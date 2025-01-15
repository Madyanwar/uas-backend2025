// import database
const db = require("../config/database")
// membuat class Patient
class Patient {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patients WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        if (err) {
          // Jika error, reject
          reject(err);
        } else {
          // Jika berhasil, resolve data
          resolve(results[0]);
        }
      });
    });
  }
  static async create(data) {
    // try catch untuk menangani error dan mengembalikan data
    try {
      // await untuk menunggu hasil dari pemanggilan query menambahkan data patient
      const id = await new Promise((resolve, reject) => {
        const sql = "INSERT INTO patients SET ?";
        db.query(sql, data, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        });
      });

      // Setelah mendapatkan id, panggil method find untuk mengambil data yang baru dimasukkan
      const createdPatient = await this.find(id);

      return createdPatient;
    } catch (err) {
      throw err; // Menangani error jika terjadi
    }
  }

  // method untuk mengupdate data
  static async update(id, data) {
    try {
      // await untuk menunggu hasil dari pemanggilan query update data patient
      await new Promise((resolve, reject) => {
        const sql = "UPDATE patients SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      // Setelah berhasil update, panggil method find untuk mengambil data yang baru diupdate
      const updatePatient = await this.find(id);

      return updatedPatient;
    } catch (err) {
      throw err; // Menangani error jika terjadi
    }
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan id
      const sql = "DELETE FROM patients WHERE id = ?";
      // jalankan query dan kirimkan id sebagai parameter query
      db.query(sql, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  async searc(name) {
    return await this.Patient.findAll({
      where: {
        name: {
          [this.db.Sequelize.Op.like]: `%${name}%`
        }
      }
    });
  }

  async findByStatus(status) {
    return await this.Patient.findAll({
      where: {
        status
      }
    });
  }

}

// export class Patient
module.exports = Patient;

// import Model Patient
const Patient = require("../models/Patient")
// buat class PatientController
class PatientController {
  async index(req, res) {
    //try untuk mengeksekusi kode program dan menerima result
    try {
      // await untuk menunggu hasil dari pemanggilan method all() pada model patient
      const patients = await Patient.all();
      const data = {
        message: "Menampilkan data patient",
        data: patients,
      };
      res.status(200).json(data);
    } catch (err) { // catch untuk menangkap error
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }

  async show(req, res) {
    // ambil id dari parameter
    const { id } = req.params;

    try {
      // await untuk menunggu hasil dari pemanggilan method find() pada model patient
      const patients = await Patient.find(id);

      const data = {
        message: `Menampilkan data pasien dengan id ${id}`,
        data: patients,
      };
      return res.status(200).json(data);
    } catch (err) {
      // catch untuk menangkap error
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }

  async store(req, res) {
    // ambil data dari body
    const data = req.body;

    try {
      // await untuk menunggu hasil dari pemanggilan method create() pada model patient
      const patients = await Patient.create(data);

      const response = {
        message: "Data berhasil ditambahkan",
        data: patients,
      };

      return res.status(201).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit pasien id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus pasien id ${id}`,
      data: [],
    };

    res.json(data);
  }

  async update(req, res) {
    // ambil id dari parameter
    const { id } = req.params;
    // ambil data dari body
    const data = req.body;

    try {
      // await untuk menunggu hasil dari pemanggilan method update() pada model patient
      const patients = await Patient.update(id, data);

      const response = {
        message: "Data berhasil diubah",
        data: patients,
      };

      return res.status(200).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }

    // method destroy untuk menghapus data patient
async destroy(req, res) {
  // ambil id dari parameter
  const { id } = req.params;

  try {
    // await untuk menunggu hasil dari pemanggilan method destroy() pada model patient
    await Patient.delete(id);

    const response = {
      message: "Data berhasil dihapus",
    };

    return res.status(200).json(response);
  } catch (err) {
    const response = {
      message: "Terjadi kesalahan",
      error: err.message,
    };
    res.status(500).json(response);
  }
}
async search(req, res) {
  try {
      const { name } = req.params;
      const patients = await Patient.findAll({ where: { name: { [Sequelize.Op.like]: `%${name}%` } } });
      res.json(patients);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}
async findByStatus(req, res) {
  try {
      const { status } = req.params;
      if (!['positive', 'recovered', 'dead'].includes(status)) {
          return res.status(400).json({ message: 'Invalid status' });
      }
      const patients = await Patient.findAll({ where: { status } });
      res.json(patients);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}
}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;

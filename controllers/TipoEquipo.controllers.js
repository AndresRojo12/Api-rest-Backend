const TipoEquipo = require("../models/Tipo_equipo");
const { request, response } = require("express");

//crear
const createTipoEquipo = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const tipoEquipoDB = await TipoEquipo.findOne({ nombre });
    if (tipoEquipoDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }

    const data = {
      nombre,
    };

    const tipoEquipo = new TipoEquipo(data);
    console.log(tipoEquipo);
    await tipoEquipo.save();
    return res.status(201).json(tipoEquipo);
  } catch (error) {
    return res.status(500).json({
      msg: "Error general" + e,
    });
  }
};

//listar todos
const getTipoEquipos = async (
  req = request,

  res = response
) => {
  try {
    const { estado } = req.query;
    const tipoEquiposDB = await TipoEquipo.find({ estado });

    return res.json(tipoEquiposDB);
  } catch (error) {
    return res.status(500).json({
      msg: "Error general" + e,
    });
  }
};
// actualizar EstadoEquipo
const EditarTipoEquipo = (req = request, res = response) => {
  const { id } = req.params;

  const info = req.body;
  const newTipoInfo = {
    nombre: info.nombre,
    estado: info.estado,
    fechaCreacion: info.fechaCreacion,
    fechaActualizacion: info.fechaActualizacion,
  };
  TipoEquipo.findByIdAndUpdate(id, newTipoInfo, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteTipoEquipo = (req = request, res = response, next) => {
  const { id } = req.params;

  TipoEquipo.findByIdAndDelete(id)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => next(error));
};

module.exports = {
  createTipoEquipo,
  getTipoEquipos,
  EditarTipoEquipo,
  deleteTipoEquipo,
};

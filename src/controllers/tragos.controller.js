const Trago=require("../models/Trago");
const TragoP=require("../models/TragoPropuesto")

const tragosCtrl = {};

tragosCtrl.renderEditTrago = async (req, res) => {
    const trago = await Trago.findById(req.params.id)
    console.log(trago)
    res.render('editartrago.html', {trago})
};

tragosCtrl.updatetrago = async(req, res) => {
    console.log(req.body.id)
    const {nombre, ingredientes, graduacion}=req.body;
    await Trago.findByIdAndUpdate(req.body.id, {nombre, ingredientes, graduacion})
    res.send("actualice satisfactoriamente")
};

tragosCtrl.deletetrago = async(req, res) => {
    await Trago.findByIdAndDelete(req.params.id);
    res.send("Trago eliminado")
}

tragosCtrl.deletetragoP = async(req, res) => {
    await TragoP.findByIdAndDelete(req.params.id);
    res.send("TragoP eliminado")
}

tragosCtrl.obtenerPropuestos = async(req, res) => {
    const tragos = await TragoP.find();
    res.json(tragos);
}

module.exports = tragosCtrl;
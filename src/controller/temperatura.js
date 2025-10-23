import ServiceTemperatura from '../service/temperatura.js';

class ControllerTemperatura {

    ConvertCelFah(req,res) {
        try {
            const celsius = req.body.celsius
            const fah = ServiceTemperatura.ConvertCelFah(cel)
            res.status(200).send({data:{celsius, fah}})
        } catch(error) {
            res.status(400).send({msg: error.message})
        }
    }

    ConvertFahCel(req,res) {
        try {

        } catch (error) {
            res.status(400).send({msg:error.message})
        }
    }  
    
    ConvertCelKel(req, res) {
        try {
            const celsius = req.body.cel
            const kel = ServiceTemperatura.convertCelKel(cel)
            res.status(200).send({data:{celsius, fah}})
        } catch (error) {
            res.status(400).send({msg: error.message})
            
        }
    }
    ConvertKelCel(req,res) {
        try {
            
        } catch (error) {
           res.status(400).send({msg: error.message}) 
        }
    }

    ConvertCelReau(req,res) {
        try {
            const celsius = req.body.cel
            const réau = ServiceTemperatura.ConvertCelRéau(cel)
            res.status(200).send({data: {celsius, réau}})
        } catch (error) {
            res.status(400).send({msg: error.message})
        }
    }
   ConvertCelRan(req,res) {
    try {
        const celsius = req.bory.cel
        const ran = ServiceTemperatura.ConvertCelRan(cel)
        res.staus(200).send({data: {celsius, ran}})
    } catch (error) {
       res.status(400).send({msg: error. message}) 
    }
   }
}
export default new ControllerTemperatura();
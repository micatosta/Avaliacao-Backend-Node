import express from 'express'
import ControllerTemperatura from '../controller/temperatura.js'

const router = express.Router()

router.post('/ConvertCelFah', ControllerTemperatura.ConvertCelFah);
router.post('/ConvertFahCel',ControllerTemperatura.ConvertFahCel);
router.post('/ConvertCelKel',ControllerTemperatura.ConvertCelKel);
router.post('/ConvertKelCel',ControllerTemperatura.ConvertKelCel);
router.post('/ConvertCelReau',ControllerTemperatura.ConvertCelReau);
router.post('/ConvertCelRan',ControllerTemperatura.ConvertCelRan);

export default router;
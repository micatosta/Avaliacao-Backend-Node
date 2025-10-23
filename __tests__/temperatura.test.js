import {describe, it, expect} from '@jest/globals'
import ServiceTemperatura from '../src/service/temperatura.js'

describe(" testando Cel to Fah", () => {
    it("testando o valor 10", () => {
        const fah = ServiceTemperatura.ConvertCelFah(10)
        
        expect(fah).toBe(50)
    })

    it("testando o valor -25", () => {
        const fah = ServiceTemperatura.ConvertCelFah

        expect(fah).toBe(-13)
    })
    describe(" testando Cel to Kel", () => {
        it("testando o valor 0", () => {
            const kel = ServiceTemperatura.ConvertCelKel

            expect(kel).toBe(273.15)
        })
        describe("testando cel to kel", () => {
            it("testando o valor 25", () => {
                const kel = ServiceTemperatura.ConvertkelCel

                expect(kel).toBe(298.15)
            })
      
        })
    })
})
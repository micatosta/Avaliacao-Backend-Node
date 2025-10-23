

class ServiceTemperatura {
    ConvertCelFah() {
        if (isNaN(cel)) {
            throw new Error("favor informar somente numeros! ")
        }
        return (cel * 9/ 5) + 32
    }
    ConvertFahCel() {
        if(isNaN(cel)) {
            throw new Error("favor infromar somente numeros!")
        }
        return (fah - 32) * 5/9
    }
     
    ConvertCelKel() {
        if(isNaN(cel)) {
            throw new Error("favor infromar somente numeros!")
        }
        return (cel + 273.15) 
    }
     ConvertkelCel() {
        if(isNaN(cel)) {
            throw new Error("favor infromar somente numeros!")
        }
        return (kel - 273.15) 
    }
     ConvertCelRéau() {
        if(isNaN(cel)) {
            throw new Error("favor infromar somente numeros!")
        }
        return (cel * 4/5) 
    }
     ConvertCelRan() {
        if(isNaN(cel)) {
            throw new Error("favor infromar somente numeros!")
        }
        return (cel  + 273.15) * 9/5
    }

}
   export default new ServiceTemperatura()

 

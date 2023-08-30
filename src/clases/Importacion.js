export class Importacion {
    constructor(id, producto, numero, precioUnitario) {
      this.id = id;
      this.producto = producto;
      this.numero = numero;
      this.precioUnitario = precioUnitario;
    }
  
    obtenerTotal() {
      return this.numero * this.precioUnitario;
    }
  }
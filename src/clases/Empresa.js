export class Empresa {
    constructor(id, nombre, rut, importaciones) {
      this.id = id;
      this.nombre = nombre;
      this.rut = rut;
      this.importaciones = [];
    }
  
    //metodo agregar importacion
    agregarImportacion(importacion) {
      this.importaciones.push(importacion);
    }
  
    //metodo obtener total de importaciones
    obtenerTotalImportaciones() {
      let total = 0;
      for(let importacion of this.importaciones) {
        total += importacion.obtenerTotal();
      }
      return total;
    }
  }
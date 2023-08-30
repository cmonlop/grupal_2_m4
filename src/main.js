import {Empresa} from '/src/clases/Empresa.js';
import {Importacion} from '/src/clases/Importacion.js';

let empresas = {}; //aqui almaceno el array
let idEmpresa = 0;
// let total = obtenerTotal();

document.getElementById('empresa-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let id = document.getElementById('empresa-id').value;
  let nombre = document.getElementById('empresa-nombre').value;
  let rut = document.getElementById('empresa-rut').value;

  let empresa = new Empresa(id, nombre, rut);
  empresas[id] = empresa;
    console.log(empresas[id].id);
    idEmpresa = empresas[id].id;  
  // document.getElementById('empresa-form').reset();
});

let importaciones = {}; //

document.getElementById('importacion-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let id = document.getElementById('importacion-id').value;
    let producto = document.getElementById('importacion-producto').value;
    let numero = document.getElementById('importacion-numero').value;
    let precio = document.getElementById('importacion-precio').value;
    console.log(id, producto, numero, precio);
    let importacion = new Importacion(id, producto, numero, precio);

    console.log(importacion);

    if (idEmpresa in empresas) {
      empresas[idEmpresa].agregarImportacion(importacion);

      updateTable(empresas[idEmpresa]);
      let sumaTotal = obtenerSumaTotalImportaciones();
      let numeroTotal = obtenerNumeroTotalImportaciones();
      console.log('suma total de importaciones: ', sumaTotal);
    } else {
      alert("Empresa no encontrada. Asegúrese de haberla agregado antes de registrar una importación.");
    }
 
    document.getElementById('importacion-form').reset();
  });

  function obtenerSumaTotalImportaciones() {
    let sumaTotal = 0;
    for (let id in empresas) {
      sumaTotal += empresas[id].obtenerTotalImportaciones();
    }
    return sumaTotal;
  }

  
  function obtenerNumeroTotalImportaciones() {
    let numeroTotal = 0;
    for (let id in empresas) {
      for (let importacion of empresas[id].importaciones) {
        numeroTotal += parseInt(importacion.numero, 10);
      }
    }
    return numeroTotal;
  }

  
  function updateTable(empresa) {
    let table = document.getElementById('importaciones-table');
    
   /*  borra todas las filas existentes, excepto la fila de encabezado */
    while(table.rows.length > 1) {
      table.deleteRow(1);
    }
    
    // Ahora, agrega una nueva fila por cada importación
    for(let importacion of empresa.importaciones) {
      let row = table.insertRow();
      
      let idCell = row.insertCell();
      idCell.textContent = importacion.id;
      
      let productoCell = row.insertCell();
      productoCell.textContent = importacion.producto;
      
      let numeroCell = row.insertCell();
      numeroCell.textContent = importacion.numero;
      
      let precioCell = row.insertCell();
      precioCell.textContent = importacion.precioUnitario;
      
      let totalCell = row.insertCell();
      totalCell.textContent = importacion.obtenerTotal();
  
    }


    //document.getElementById('total-importaciones').textContent = totalImportaciones;
    document.getElementById('total-importaciones').textContent = `El total de las importaciones es de ${obtenerSumaTotalImportaciones()}`;  
    document.getElementById('numero-importaciones').textContent = `El numero de las importaciones es de ${obtenerNumeroTotalImportaciones()}`;  
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')
    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
   })
  }

  
   







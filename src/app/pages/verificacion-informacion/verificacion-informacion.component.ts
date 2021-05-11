import { Component, OnInit } from '@angular/core';
import { RequestManager } from '../services/requestManager';
import { environment } from './../../../environments/environment'
import { Documento } from '../../@core/models/documento';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-verificacion-informacion',
  templateUrl: './verificacion-informacion.component.html',
  styleUrls: ['./verificacion-informacion.component.css']
})
export class VerificacionInformacionComponent implements OnInit {

  documento: Documento;
  hash: string = '';
  source: LocalDataSource = new LocalDataSource();
  settings: any;

  constructor(
    private request: RequestManager

  ) { 

  }

  cargarCampos() {
    this.settings = {
      actions: false,
      mode: 'external',
      columns: {
        Codigo: {
          title: 'Código',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Nombre: {
          title: 'Nombre',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Identificacion: {
          title: 'Identificación',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Nota: {
          title: 'Promedio',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        FechaGrado: {
          title: 'Fecha Grado',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Fecha: {
          title: 'Fecha Expedición',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        TipoDocumento: {
          title: 'Tipo Documento',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        NumeroActa: {
          title: 'Número Acta',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Proyecto: {
          title: 'Proyecto Curricular',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
      },
    };
  }

  public verificarDocumento() {
    this.request.get(environment.ACADEMICA_JBPM_SERVICE, 'validar_hash/'+this.hash)
    .subscribe((documentos: any) => {
      if (documentos) {
        this.documento = documentos['documentos'];
        var info_documentos=[];
        info_documentos.push(this.documento);
        let datosDocumentos = info_documentos.map((doc) =>
          new Object({
            Codigo: `${doc.codigo}`,
            Nombre: `${doc.nombre}`,
            Identificacion: `${doc.identificacion}`,
            Nota: `${doc.nota}`,
            FechaGrado: `${doc.fechaGrado}`,
            Fecha: `${doc.fecha}`,
            TipoDocumento:`${doc.tipoDocumento}`,
            NumeroActa: `${doc.numeroActa}`,
            Proyecto: `${doc.proyecto}`,
          
          }))
        this.source.load(datosDocumentos);
          console.log(this.source);
      }
    }, (error) => {
      console.log(error);
      //Swal.close();
    })
  }

  ngOnInit(): void {
    this.cargarCampos();
    console.log(this.documento);
  }

}

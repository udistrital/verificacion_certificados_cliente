import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const menu = [
  //{ Nombre: "Inicio", Icono: "home", Url: "pages", Opciones: Array(0) },
  { Id: 664, Nombre: "Verificación", Icono: "contact_support", Url: "pages/verificacion_informacion", TipoOpcion: "Menú", Opciones: null },
  //{ Id: 666, Nombre: "Caracterización", Icono: 'home', Url: "pages/caracterizacion", TipoOpcion: "Menú", Opciones: null },
  //{ Id: 666, Nombre: "Mi QR", Icono: 'qr_code', Url: "pages/qrcode", TipoOpcion: "Menú", Opciones: null },
  // { Id: 666, Nombre: "Lector de código QR", Icono: 'qr_code_scanner', Url: "pages/ingreso", TipoOpcion: "Menú", Opciones: null },
]; 

localStorage.setItem('menu', btoa(JSON.stringify(menu)));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

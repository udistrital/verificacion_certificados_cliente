import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadRouting = false;
  environment = environment;

  title = 'verificacion-certificados-cliente';


  ngOnInit(): void {
    const oas = document.querySelector('ng-uui-oas');
    this.loadRouting = true;

  }
}


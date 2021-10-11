import { AstTransformer } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadRouting = false;
  environment = environment;
  @ViewChildren('ng-uui-oas') allChildren;

  title = 'verificacion-certificados-cliente';


  ngOnInit(): void {
    const oas = document.querySelector('ng-uui-oas');
    console.log(oas.setAttribute("isLogin","true"))
    console.log(oas.childNodes)
    
    this.loadRouting = true;

  }
}


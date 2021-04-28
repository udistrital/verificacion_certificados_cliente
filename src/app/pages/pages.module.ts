import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificacionInformacionComponent } from './verificacion-informacion/verificacion-informacion.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
//import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

const pagesComponents = [
  VerificacionInformacionComponent,
];

const materialModules = [
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatGridListModule,
  MatExpansionModule,
  MatButtonModule,
  MatStepperModule
];

@NgModule({
  declarations: [
    ...pagesComponents,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ...materialModules
  ]
})
export class PagesModule { }

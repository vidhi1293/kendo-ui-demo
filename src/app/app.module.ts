import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { PopupModule  } from '@progress/kendo-angular-popup';
import { EditorModule } from '@progress/kendo-angular-editor';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { DialogModule, WindowModule  } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { OtherComponent } from './other/other.component';
import { HeaderComponent } from './header/header.component';

import { CommonService } from './services/common.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TabComponent } from './tab/tab.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'grid', component: GridComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'tab-panel', component: TabComponent },
  { path: 'country-list', component: CountryListComponent },
  { path: 'other', component: OtherComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GridComponent,
    OtherComponent,
    HeaderComponent,
    ProgressBarComponent,
    TabComponent,
    CountryListComponent
  ],
  imports:  [ FormsModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, InputsModule, 
    DropDownsModule, DateInputsModule, ButtonsModule, ProgressBarModule, TooltipModule, PopupModule,
    EditorModule, PDFExportModule, DialogModule, WindowModule, LayoutModule, GridModule, PDFModule, 
    ExcelModule, ChartsModule, ExcelExportModule, 
    RouterModule.forRoot(routes)  ],
    exports: [RouterModule],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddressPageComponent } from './pages/address-page/address-page.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTreeModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NavPageComponent } from './pages/nav-page/nav-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TreePageComponent } from './pages/tree-page/tree-page.component';
import { DragDropPageComponent } from './pages/drag-drop-page/drag-drop-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    AddressPageComponent,
    NavPageComponent,
    TablePageComponent,
    DashboardPageComponent,
    TreePageComponent,
    DragDropPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

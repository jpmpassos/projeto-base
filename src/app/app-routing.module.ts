import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressPageComponent } from './pages/address-page/address-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { TreePageComponent } from './pages/tree-page/tree-page.component';
import { DragDropPageComponent } from './pages/drag-drop-page/drag-drop-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'address', component: AddressPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'table', component: TablePageComponent },
  { path: 'tree', component: TreePageComponent },
  { path: 'dragdrop', component: DragDropPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

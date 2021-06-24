import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { GraphicsTransactionComponent } from './graphics-transaction/graphics-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
    {path: "create-transaction", component: CreateTransactionComponent},
    {path: "list-transaction", component: ListTransactionComponent},
    {path: "graphics-transaction", component: GraphicsTransactionComponent},
    {path: "settings", component: SettingsComponent},
    {path: "", pathMatch: "full", redirectTo: "create-transaction"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

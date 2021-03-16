import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ClickerComponent} from "./clicker/clicker.component";
import {ClosePageComponent} from "./close-page/close-page.component";
import {CloseGuard} from "./close.guard";

const routes: Routes = [
  {path: 'clicker', component: ClickerComponent},
  {path: 'close-page', component: ClosePageComponent, canActivate: [CloseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CloseGuard]
})
export class AppRoutingModule {}

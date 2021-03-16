import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CloseGuard} from "./@core/_helpers/close.guard";
import {CloseComponent} from "./pages/close/close.component";
import {ClickerComponent} from "./pages/clicker/clicker.component";

const routes: Routes = [
  {path: '', redirectTo: 'clicker', pathMatch: 'full'},
  {path: 'clicker', component: ClickerComponent},
  {path: 'close', component: CloseComponent, canActivate: [CloseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CloseGuard]
})
export class AppRoutingModule {
}

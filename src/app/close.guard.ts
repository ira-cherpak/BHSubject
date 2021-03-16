import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from "@angular/core";

export class CloseGuard implements CanActivate{
  constructor(
    private router: Router
  ) {

  }

  @Injectable({providedIn: 'close-page'})
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>{
    return new Promise((resolve) => {
      const config = localStorage.getItem('config');
      if (!config) {
        resolve(false);
      } else {
        this.router.navigate(['/close-page']);
        resolve(true);
      }
    });
  }
}

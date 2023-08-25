import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = String(localStorage.getItem("token_web_news"))
        if (this.authService.getDataToken(token)['usuario']['perfil_id'] == 1) {
            return true
        }
        else {
            this.router.navigate(['/'])
            return false;
        }
    }

}
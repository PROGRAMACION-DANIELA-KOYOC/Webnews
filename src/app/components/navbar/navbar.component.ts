import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged: boolean = false
  token: string = String(localStorage.getItem("token_web_news") || '')
  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.isLogged = this.authService.validateToken(this.token)
  }

  logOut() {
    this.authService.logOut()
  }
}
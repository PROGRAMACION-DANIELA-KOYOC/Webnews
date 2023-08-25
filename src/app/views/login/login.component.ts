import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private route: Router
  ) {
  }

  dataForm: LoginData = {
    correo: '',
    contraseña: '',
    contrasenia: ''
  }

  onSubmit() {
    this.dataForm.contraseña = this.dataForm.contrasenia
    this.authService.login(this.dataForm).subscribe(response => {
      localStorage.setItem("token_web_news", response.token)
      if (this.authService.getDataToken(response.token)['usuario']['perfil_id'] == 1) {
        this.route.navigate(['/admin/panel'])
      }
      else {
        this.route.navigate(['/user/panel'])
      }
    },
      error => {
        console.log('Login failed')
      })

  }

}
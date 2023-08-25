import { Component } from '@angular/core';
import { Register } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
  ) { }

  dataForm: Register = {
    nombre: '',
    apellidos: '',
    nick: '',
    correo: '',
    contraseña: '',
    contrasenia: ''
  }

  onSubmit() {
    this.dataForm.contraseña = this.dataForm.contrasenia
    this.authService.Registro(this.dataForm).subscribe(response => {
      
      console.log('user create')
      this.dataForm.apellidos= ''
      this.dataForm.nombre= ''
      this.dataForm.nick= ''
      this.dataForm.correo= ''
      this.dataForm.contraseña= ''
      this.dataForm.contrasenia= ''
      
    },
      error => {
        console.log('user not create')
      })

  }
}

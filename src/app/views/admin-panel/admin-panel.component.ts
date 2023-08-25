import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFormDialogComponent } from 'src/app/dialogs/new-form-dialog/new-form-dialog.component';
import { DataDialog, New } from 'src/app/interfaces/interfaces';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  news: New[] = []
  new_create: New = {
    titulo: '',
    categoria_id: 0,
    usuario_id: 0,
    estado_id: 0,
    descripcion: '',
    fecha_publicacion: new Date().toISOString().slice(0, 10),
    imagen: '',
    activo: true,
    FechaAlta: '1990-01-01',
    UserAlta: '',
    FechaMod: '1990-01-01',
    UserMod: '',
    FechaBaja: '1990-01-01',
    UserBaja: ''

  }

  constructor(
    private newService: NewService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.newService.getNews().subscribe(response => this.news = response)
  }

  openDialog(type: 'create' | 'edit', mynew?: New) {
    const dialogData: DataDialog<New> = {
      type: type,
      model: mynew ? mynew : this.new_create
    }

    this.dialog.open(NewFormDialogComponent, {
      data: dialogData,
      width: '70%',
      height: '85%',
      panelClass: '',
      autoFocus: false

    }).afterClosed().subscribe(value => {
      this.newService.getNews().subscribe(response => this.news = response)
    })
  }

  delete(id: any) {
    this.newService.deleteNew(Number(id)).subscribe(response => {
      alert('Noticia eliminada')
      this.newService.getNews().subscribe(response_news => this.news = response_news)
    })
  }



}
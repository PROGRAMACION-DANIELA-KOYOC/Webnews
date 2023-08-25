import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent {
  @Input() inputTitulo: string = ''
  @Input() inputCategoria: string | undefined = ''
  @Input() inputImagen: string = ''
  @Input() inputDescripcion: string = ''
  @Input() inputFecha: string = ''


}
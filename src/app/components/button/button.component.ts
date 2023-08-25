import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() inputTexto: string = ''
  @Input() inputRuta: string = ''
  @Input() inputTipo: 'fill' | 'outline' = 'fill'

}
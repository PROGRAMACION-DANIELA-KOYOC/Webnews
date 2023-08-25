import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { New } from 'src/app/interfaces/interfaces';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.css']
})
export class NewDialogComponent {

  constructor(
    private dialog: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: New
  ){}

  closeDialog(): void {
    this.dialog.close(false);
  }

}
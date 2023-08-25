import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDialogComponent } from 'src/app/dialogs/new-dialog/new-dialog.component';
import { New } from 'src/app/interfaces/interfaces';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  news: New[] = []

  constructor(
    private newService: NewService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.newService.getNews().subscribe(response => this.news = response)
  }

  openDialog(mynew: New) {
    this.dialog.open(NewDialogComponent, {
      data: mynew,
      width: '70%',
      panelClass: '',
      autoFocus: false
      
    })
  }

}
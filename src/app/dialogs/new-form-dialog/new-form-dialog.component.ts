import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category, DataDialog, New, State, User } from 'src/app/interfaces/interfaces';
import { CategroyService } from 'src/app/services/category.service';
import { NewService } from 'src/app/services/new.service';
import { StateService } from 'src/app/services/state.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-form-dialog',
  templateUrl: './new-form-dialog.component.html',
  styleUrls: ['./new-form-dialog.component.css']
})
export class NewFormDialogComponent {
  categories: Category[] = []
  users: User[] = []
  states: State[] = []


  constructor(
    private dialog: MatDialogRef<NewFormDialogComponent>,
    private newService: NewService,
    private categoryService: CategroyService,
    private userService: UserService,
    private stateService: StateService,

    @Inject(MAT_DIALOG_DATA) public data: DataDialog<New>
  ) {

  }

  ngOnInit() {
    this.data.model.fecha_publicacion = this.data.model.fecha_publicacion.slice(0, 10)
    this.categoryService.getCategories().subscribe(response => this.categories = response)
    this.userService.getUsers().subscribe(response => this.users = response)
    this.stateService.getStates().subscribe(response => this.states = response)
  }

  closeDialog(): void {
    this.dialog.close(true);
  }

  onFileSelected(e: any) {
    const selectedImage = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.data.model.imagen = e.target.result! as string;
    };
    reader.readAsDataURL(selectedImage);
  }


  onSubmit() {

    if (this.data.type == 'create') {
      this.newService.createNew(this.data.model).subscribe(response => this.closeDialog())
    }

    else if (this.data.type == 'edit') {
      this.newService.updateNew(Number(this.data.model.id), this.data.model).subscribe(response => this.closeDialog())
    }

  }



}
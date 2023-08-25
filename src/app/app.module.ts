import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNewComponent } from './components/card-new/card-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './views/category/category.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDialogComponent } from './dialogs/new-dialog/new-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NewFormDialogComponent } from './dialogs/new-form-dialog/new-form-dialog.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNewComponent,
    NavbarComponent,
    ButtonComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    NewDialogComponent,
    NavbarAdminComponent,
    NewFormDialogComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
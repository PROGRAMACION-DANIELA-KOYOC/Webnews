import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/category/category.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { AdminGuard } from './adminGuard/adminGuard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'category/:id', component: CategoryComponent },
  {path: 'admin/panel', component:AdminPanelComponent, canActivate:[AdminGuard]},
  {path: '**',redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
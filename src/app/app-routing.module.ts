import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostusersComponent } from './postusers/postusers.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  { path: 'post', component: PostusersComponent },
  { path: 'edit/:id', component: EdituserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

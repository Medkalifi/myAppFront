import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../component/user-list/user-list.component';
import { UserFormComponent } from '../component/user-form/user-form.component';
import { CvComponent } from '../component/cv/cv.component';
import { EnseignementComponent } from '../component/enseignement/enseignement.component';
import { RechercheComponent } from '../component/recherche/recherche.component';
import { DeveloppementComponent } from '../component/developpement/developpement.component';
import { PublicactionComponent } from '../component/publicaction/publicaction.component';
import { EditUserComponent } from '../component/edit-user/edit-user.component';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';

const routes : Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'cv', component: CvComponent },
  { path: 'enseignement', component: EnseignementComponent },
  {path :'recherche', component : RechercheComponent},
  {path : 'developpement' , component : DeveloppementComponent},
  {path : 'publication', component : PublicactionComponent},
 
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path :'' , redirectTo :"/cv" , pathMatch:"full"},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forRoot(routes),
  ], 
  exports : [RouterModule]
})
export class ApproutingModule { }

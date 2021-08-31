import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../component/user-list/user-list.component';
import { UserFormComponent } from '../component/user-form/user-form.component';
import { ProfilComponent } from '../component/profil/profil.component';
import { EnseignementComponent } from '../component/enseignement/enseignement.component';
import { RechercheComponent } from '../component/recherche/recherche.component';
import { DeveloppementComponent } from '../component/developpement/developpement.component';
import { PublicactionComponent } from '../component/publicaction/publicaction.component';
import { EditUserComponent } from '../component/edit-user/edit-user.component';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { FormationComponent } from '../component/profil/formation/formation.component';
import { ExpProfessionnelleComponent } from '../component/profil/exp-professionnelle/exp-professionnelle.component';

const routes : Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'profil', component: ProfilComponent,
    children:[
      {path:'formations', component: FormationComponent},
      {path:'expPros', component: ExpProfessionnelleComponent}
     
    ] 
  },
  { path: 'enseignement', component: EnseignementComponent },
  {path :'recherche', component : RechercheComponent},
  {path : 'developpement' , component : DeveloppementComponent},
  {path : 'publication', component : PublicactionComponent},
 
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path :'' , redirectTo :"/" , pathMatch:"full"},

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

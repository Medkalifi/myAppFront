import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';






import { AppComponent } from './app.component';
import { ApproutingModule } from './approuting/approuting.module';
import { CrudService} from './service/crud-service';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { ProfilComponent } from './component/profil/profil.component';
import { EnseignementComponent } from './component/enseignement/enseignement.component';
import { RechercheComponent } from './component/recherche/recherche.component';
import { DeveloppementComponent } from './component/developpement/developpement.component';
import { PublicactionComponent } from './component/publicaction/publicaction.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormationComponent } from './component/profil/formation/formation.component';
import { ExpProfessionnelleComponent } from './component/profil/exp-professionnelle/exp-professionnelle.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    ProfilComponent,
    EnseignementComponent,
    RechercheComponent,
    DeveloppementComponent,
    PublicactionComponent,
    EditUserComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FormationComponent,
    ExpProfessionnelleComponent
   
  ],
  imports: [
    BrowserModule, 
    ApproutingModule,
    HttpClientModule, 
    FormsModule, 
    RouterModule,
    CommonModule ,
    
  ],
  providers: [
  CrudService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

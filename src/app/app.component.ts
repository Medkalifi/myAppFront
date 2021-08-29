import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthentificationService } from './service/authentification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-front';

 

constructor(private router : Router,
            private authService : AuthentificationService){

}
  ngOnInit(): void {
    this.authService.loadToken()
  //  this.getUsenameConnected();
  // this.authService.loadAuthenticatedUserFromLocalStorage();
  }
onLogout(){
  console.log("deconnexion ......");
  
  this.authService.removeTokenFromLocalStorage();
  this.router.navigateByUrl('/login');
  
}

public isAdmin(){
 return this.authService.isAdmin();
}

public isUser(){
 return  this.authService.isUser();
}

isAuthenticated(){
  return this.authService.isAuthenticated();
}

getUsenameConnected(){
 let userConnecte = this.authService.userName;
 return userConnecte;
}

}

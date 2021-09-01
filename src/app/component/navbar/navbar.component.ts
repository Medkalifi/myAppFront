import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService : AuthentificationService,
                private router : Router) { }

  ngOnInit(): void {
 
    
  }

  public isAdmin(){
    return this.authService.isAdmin();
   }

   getUsenameConnected(){
    let userConnecte = this.authService.userName;
    this.authService.loadAuthenticatedUserFromLocalStorage;
    return userConnecte;
   }

   isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
     
    this.authService.removeTokenFromLocalStorage();
    this.router.navigateByUrl('/login');
    
  }
}

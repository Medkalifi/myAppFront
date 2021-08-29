import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
//import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userName!: string;
  roles: Array<any> = [];

host : string ="http://localhost:8080"

  public  isAuthentifie!: boolean;
  public userAuthenticated : any ;
  public jwt!: string;

  constructor(private http : HttpClient) { }


  public login(user: any){
    return this.http.post(this.host+"/login", user, {observe : 'response'});
    

  }


  public register(user :any){
return this.http.post(this.host+"/register", user )

  }

 public saveToken(jwt : string){
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    
    
   this.userName = objJWT.sub;
    this.roles= objJWT.roles;
    this.roles=jwtHelper.decodeToken(this.jwt).roles;
    console.log(this.roles[0]);
    
  }

 public saveAutenticatedUser(jwt : string){
    if(this.userAuthenticated){
      localStorage.setItem('token', jwt);
    }
  }

  public isAdmin(){
   return this.roles.indexOf('ADMIN')>-1;
    
    
  //  return this.roles[0] == 'ADMIN';

  }

  public isUser(){
    return this.roles.indexOf('USER')>=0;
  }

 isAuthenticated(){
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}

loadToken() {
  this.jwt=localStorage.getItem('token') as string;
  return this.jwt;
}

logout(){
  localStorage.removeItem('token');
  this.initParamsCredentials();
  
}
initParamsCredentials(){
  this.jwt = ""
  this.userName = "";
  this.roles = [];
}

 public loadAuthenticatedUserFromLocalStorage(){
 let t = localStorage.getItem('token');
 if(t){
   let user = JSON.parse(atob(t));
     
   this.userAuthenticated= {username:user.username, roles: user.roles}
   this.isAuthentifie = true;
      
   this.jwt = t;
 }
  }
  public removeTokenFromLocalStorage(){
    localStorage.removeItem('token');
    this.jwt = '';
    this.isAuthentifie = false;
    this.userAuthenticated = undefined;
  }

 

 
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   mode =0;
   

  constructor(private authservice : AuthentificationService, private router : Router) { }

  ngOnInit(): void {
    let token = this.authservice.loadToken();
      if(token){
        this.router.navigateByUrl('/cv')
      }
  }


onLogin(data: any){
this.authservice.login(data).subscribe(res=>{
console.log(res.headers.get('authorization'));
let jwt = res.headers.get('authorization') as string;
this.authservice.saveToken(jwt);

this.router.navigateByUrl('/cv')

}, err=>{
    this.mode=1;
    
  })
}
 
onRegister(){
this.router.navigateByUrl("/register")
}


public isAdmin(){
  this.authservice.isAdmin()
}
public isUser(){
  this.authservice.isUser()
}

 

}

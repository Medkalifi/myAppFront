import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;
  mode: number = 0;
  errorMessage!: string;

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {
  }

  onRegister(user: any) {

    this.authService.register(user).subscribe(res => {
      console.log(user);
      this.user = res;
      this.mode = 1;
      user.role =this.authService.roles[0]
    }, err => {
     this.mode = 0;
     this.errorMessage = "prooblème d'inscription"
     
      
    })

  }

 

}


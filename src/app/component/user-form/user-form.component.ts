import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {



  public user: User = new User;

  public mode: number = 1;
  public currentUser: User = new User;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: CrudService) {


  }

  onsubmit(data: any) {

    this.userService.save('http://localhost:8080/users/adduser', data)
      .subscribe(res => {
        console.log(data);
        this.currentUser = data;

        this.mode = 2;
        this.router.navigateByUrl('/adduser')

      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login')


      });

  }
  ajouterUser() {
    this.mode = 1;
  }



}

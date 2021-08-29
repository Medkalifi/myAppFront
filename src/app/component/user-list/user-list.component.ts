import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public user: any;
  users: any;
  public mode: number = 1;

  constructor(private userService: CrudService, private router: Router,
     private authService : AuthentificationService) { }

  ngOnInit() {
this.getAll();
   
  }

getAll(){
  this.userService.findAll('/users').subscribe(data => {
    this.users = data;

  }, err => {
    console.log(err);
    this.authService.logout();
  this.router.navigateByUrl('/login');
  });
  
}

  public onDeleteUser(id: number) {
    console.log("loooog");
    let conf = confirm(' etes vous sure ? ');
    if (conf) {
      this.userService.deleteById(id, '/users/').subscribe(data => {
        this.users = data;
        this.refresh();
        
      }, err => {
        console.log(err);

      });

    }

  }
  public onVisualiserUser(id: number) {
    this.userService.visualiserById(id, '/users/').subscribe(data => {
      console.log(data);

      this.mode = 2;

      this.user = data;
    }, err => {
      console.log(err);

    });
  }

  public onEditUser(id: number) {
    this.router.navigateByUrl('/edituser/' + id)

  }

  recuperer(form: any) {

    this.userService.getByKeyword(form.keyword).subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);

    });

  }
  refresh() {
    this.userService.recuper('/users').subscribe(data => {
      this.users = data
    }, err => {
      console.log(err);

    })

  }
}

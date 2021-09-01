import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-exp-professionnelle',
  templateUrl: './exp-professionnelle.component.html',
  styleUrls: ['./exp-professionnelle.component.css']
})
export class ExpProfessionnelleComponent implements OnInit {
  expPros!: any;
  mode =2;
  expPro :any

  constructor(private expProService : CrudService,
              private router : Router,
              private authService : AuthentificationService) { }

  ngOnInit(): void {
    this.getAllExpPros();
  }


  ajouterExpPro(){
    this.mode = 1;

  }

getAllExpPros(){
  this.expProService.findAll('/expPros').subscribe(data => {
    this.expPros = data;
    console.log(data);
    
  }, err => {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  });

}
onSubmit(data : any ){
console.log(data);
this.expProService.save('http://localhost:8080/expPros', data)
.subscribe(res => {
  this.expPros = data;
  this.mode = 2;
  this.expProService.findAll('/expPros').subscribe(data => {
    this.expPros = data;

  }, err => {
    console.log(err);
  });

})

}
onVisualiserExpPro(id: any){
  this.expProService.visualiserById(id, '/expPros/').subscribe(data => {
    this.mode = 3;
    console.log(data);

    this.expPros = data;

  }, err => {
    console.log(err);

  })
}

onEditExpPro(id : any ){

}


onDeleteExpPro(id : any ){
  let conf = confirm(' etes vous sure ? ');
  if (conf) {
    this.expProService.deleteById(id, '/expPros/').subscribe(data => {
      this.expPros = data;
      this.expProService.recuper('/expPros').subscribe(data => {
        this.expPros = data;
      }, err => {
        console.log(err);

      });


    }, err => {
      console.log(err);

    })
  }

}
}
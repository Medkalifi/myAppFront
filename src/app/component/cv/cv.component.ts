import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formation } from 'src/app/model/formation';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // formations: formation[] = [];

  formations: any;
  mode: number = 0;
  formation: any;
  expPros : any;


  constructor(private cvService: CrudService,
    private router: Router,
    public authService : AuthentificationService) { }

  ngOnInit() {
   // this.getAllFormations();

  }
  getAllFormations(){
    this.mode = 2;
    this.cvService.findAll('/formations').subscribe(data => {
      this.formations = data;
    }, err => {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });

  }

  onSubmit(data: any) {
    this.cvService.save('http://localhost:8080/formations', data)
      .subscribe(res => {
        this.formations = data;
        this.mode = 2;
        this.cvService.findAll('/formations').subscribe(data => {
          this.formations = data;

        }, err => {
          console.log(err);
        });

      })

  }
  ajouterFormation() {
    console.log('ajout formation');
    this.mode = 1;
  }

  onVisualiserFormation(id: number) {
    this.cvService.visualiserById(id, '/formations/').subscribe(data => {
      this.mode = 3;
      console.log(data);

      this.formation = data;

    }, err => {
      console.log(err);

    })
  }

  onEditFormation(id: number) {
    this.cvService.visualiserById(id, '/formations/')
    .subscribe(data => {
      this.formation = data;
      console.log(data);

    }, err=>{
      console.log(err);
      
    })
  }

  onDeleteFormation(id: number) {
    let conf = confirm(' etes vous sure ? ');
    if (conf) {
      this.cvService.deleteById(id, '/formations/').subscribe(data => {
        this.formations = data;
        this.cvService.recuper('/formations').subscribe(data => {
          this.formations = data;
        }, err => {
          console.log(err);

        });


      }, err => {
        console.log(err);

      })
    }
  }

  getAllExpPros(){
    
    this.cvService.findAll('/expPros').subscribe(data => {
      this.expPros = data;
    }, err => {
      this.authService.logout();
      this.router.navigateByUrl('/login');
    });

  }
}

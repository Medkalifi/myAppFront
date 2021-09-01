import { Component, OnInit, Output } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';

import { EventEmitter } from '@angular/core';
import { formation } from '../../../model/formation'
import { CrudService } from 'src/app/service/crud-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {



  formations: any;
  mode: number = 0;
  formation: any;
  constructor(private formationService: CrudService,
    private router: Router,
    public authService: AuthentificationService) { }


  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations() {
    this.mode = 2;
    this.formationService.findAll('/formations').subscribe(data => {
      this.formations = data;
      console.log(data);

    }, err => {
      // this.authService.logout();
      // this.router.navigateByUrl('/login');
      console.log("erreur de recupération formation ");

    });

  }

  ajouterFormation() {
    console.log('ajout formation');
    this.mode = 1;
  }

  onSubmit(data: any) {
    this.formationService.save('http://localhost:8080/formations', data)
      .subscribe(res => {
        this.formations = data;
        this.mode = 2;
        this.formationService.findAll('/formations').subscribe(data => {
          this.formations = data;

        }, err => {
          console.log(err);
        });

      })

  }

  isAdmin() {
    this.authService.isAdmin();
  }

  onEditFormation(id: any) {
    this.formationService.visualiserById(id, '/formations/')
      .subscribe(data => {
        this.formation = data;
        console.log(data);
        console.log("pas encore implémenté ");
        

      }, err => {
        console.log(err);

      })

  }

  onDeleteFormation(id: any) {
    let conf = confirm(' etes vous sure ? ');
    if (conf) {
      this.formationService.deleteById(id, '/formations/').subscribe(data => {
        this.formations = data;
        this.formationService.recuper('/formations').subscribe(data => {
          this.formations = data;
        }, err => {
          console.log(err);

        });


      }, err => {
        console.log(err);

      })
    }

  }

  onVisualiserFormation(id: any) {
    this.formationService.visualiserById(id, '/formations/').subscribe(data => {
      this.mode = 3;
      console.log(data);
      this.formation = data;
    }, err => {
      console.log(err);
    })
  }





}

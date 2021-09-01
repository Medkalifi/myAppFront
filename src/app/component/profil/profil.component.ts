import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { formation } from 'src/app/model/formation';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
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
  gotoFormationComponent(){
    console.log("formation ;;;;");
    this.router.navigateByUrl('/profil/formations')
    


  }

  
 

  onVisualiserFormation(id: number) {
    
  }

  onEditFormation(id: number) {
   
  }

  onDeleteFormation(id: number) {
  
  }

  getAllExpPros(){
    this.router.navigateByUrl('/profil/expPros')
  
}
imprimerProfil(){
  this.cvService.exportPdf().subscribe(x=>{  
    const blob = new Blob([x],{type:'application/pdf'});
    //bloc de code pour internet explorer et Firefox 
    // if(window.navigator && window.navigator.msSaveOrOpenBlob(blob)){
    //   window.navigator.msSaveOrOpenBlob(blob);
    //   return;
    // }
    const data = window.URL.createObjectURL(blob);
   const link =  document.createElement('a');
    link.href= data;
    link.download = 'formations.pdf';
    link.dispatchEvent(new MouseEvent('click', {bubbles:true , cancelable:true, view :window}));
    
    setTimeout(function(){
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100)
  });
}
}
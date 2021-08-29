import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud-service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
data :any;
  user: any;
  constructor(private router :Router, 
    private activatedRoute : ActivatedRoute, 
    private userService : CrudService) { }

  ngOnInit(): void {
 this.userService.visualiserById(this.activatedRoute.snapshot.params.id, '/users/').subscribe(data=>{
   this.user= data;
console.log(data);

 },err=>{
   console.log(err);
   
 });
  
  }
 

  onupdate(data:any){
    console.log(data);
    
  this.userService.edit(this.activatedRoute.snapshot.params.id, data,'/users/'  )
      .subscribe(res=>{
   console.log(data);
   this.user = data;
   alert('mise à jour avec succes');
   this.router.navigateByUrl('/users') 
        
  },err=>{
    console.log(err);
    
    
  });
   
}

  
}

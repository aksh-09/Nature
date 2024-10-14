import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
formobj:any={name:'',email:'',password:''}
constructor(private router:Router,private userDataService:UserDataService){}
onSubmit(){
  this.userDataService.postUserData(this.formobj).subscribe(()=>{
    this.router.navigate(['/login'])
  })
}
}

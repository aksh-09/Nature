import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
formobj:any={email:'',password:''};
constructor(private router:Router,private userDataService:UserDataService){}
onSubmit(){
  this.userDataService.getUserData(this.formobj).subscribe((data)=>{
    localStorage.setItem('token',data.token)
    localStorage.setItem('username',data.user.name)
    this.router.navigate(['/']);
  })
  
}
}

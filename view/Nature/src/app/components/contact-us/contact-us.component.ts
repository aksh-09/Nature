import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsDataService } from '../../services/contact-us-data.service';
import { CommunityDataService } from '../../services/community-data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{
constructor(private contactUsDataService:ContactUsDataService,private communityDataService:CommunityDataService){}
formObj:any={email:''};
flag:boolean=false;
myForm!:FormGroup;
name!:FormControl;
email!:FormControl;
phone!:FormControl;
message!:FormControl;
createFormControl(){
  this.name=new FormControl("",Validators.required);
  this.email=new FormControl("",[
    Validators.required,
    Validators.pattern('[^@]*@[^@]*')
  ]);
  this.phone=new FormControl("",Validators.required);
  this.message=new FormControl("",Validators.required);
}
createFormGroup(){
  this.myForm=new FormGroup({
    name:this.name,
    email:this.email,
    phone:this.phone,
    message:this.message
  })
}
onSubmit(){
this.contactUsDataService.postContactUs(this.myForm.value).subscribe((data)=>{
  this.myForm.reset();
})

}
ngOnInit(): void {
  this.createFormControl();
  this.createFormGroup();
  this.flag=false;
}
sendData(myform){
  this.communityDataService.postEmail(this.formObj).subscribe((data)=>{
    myform.reset();
    this.flag=true;
  })
}
}

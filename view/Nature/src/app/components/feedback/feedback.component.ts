import { Component } from '@angular/core';
import { FeedbackDataService } from '../../services/feedback-data.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
formobj:any={name:'',email:'',feedback:''};
isFormDirty: boolean = false;
constructor(private feedbackDataService:FeedbackDataService){}
onSubmit(myForm){
  this.feedbackDataService.postFeedbackData(this.formobj).subscribe((data)=>{
    alert('Thankyou For Your FeedBack!!');
    myForm.reset();
    this.isFormDirty = false;
  })
}
inputValue(){
this.isFormDirty=true;
}
canDeactivate(): boolean {
  if (this.isFormDirty) {
    return window.confirm(
      'You have unsaved changes. Do you really want to leave?'
    );
  }
  return true;
}
}

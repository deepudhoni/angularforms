import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform: FormGroup;
  status:boolean;
  check: boolean=false
  ptn="[0-9]*"
   constructor() { }
   ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required,Validators.pattern(this.ptn),Validators.minLength(10),Validators.maxLength(10)]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        zip: new FormControl('',[Validators.pattern(this.ptn),Validators.minLength(6),Validators.maxLength(6)])
      })
     
  });
   }
   ngOnChanges(){
     
   }
   
get name() {
  return this.myform.get('name');
} 
get phone()
{
  return this.myform.get('phone');
}
get zip()
{
  return this.myform.get("address.zip");
}

   onClickSubmit(data) {
     
   }
}
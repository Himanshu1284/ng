
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;
  message:string="";
  userError:any;

  constructor(public fb:FormBuilder, public authService:AuthService) {
    this.myForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
    },{
      validator:this.checkForMatchPassword("password","confirmPassword")
    })
   }

   checkForMatchPassword(passwordKey:string, confirmPasswordKey:string){
     return(group:FormGroup)=>{
       let password= group.controls[passwordKey];
       let confirmPassword= group.controls[confirmPasswordKey];

       if(password.value == confirmPassword.value){
         return;
       }else{
         confirmPassword.setErrors({
           notEqualToPassword:true
         })
       }
     }
   }
   onSubmit(form){
     let email:string=form.value.email;
     let password:string=form.value.password;
     let firstName:string=form.value.firstName;
     let lastName:string=form.value.lastName;

     this.authService.signup(email,password,firstName,lastName) .then(()=>{
      
         this.message="You have been signedup successfully. PLease login!"
  
     }).catch((error)=>{
     console.log(error);
     this.userError=error;
     
     })
  
   }
  ngOnInit(): void {
  }

}

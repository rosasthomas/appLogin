import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  myForm: FormGroup;

  constructor(private authService : AuthServiceService, private location : Location, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,20}$/)]],
      })
   }

  ngOnInit() {
  }

  async login(){
    localStorage.removeItem("login")
    await this.authService.login(this.email, this.password)
    
    
    if(localStorage.getItem("login")  == "true"){
      await $("#form").slideUp()
      this.location.go("/home")
      window.location.reload()
    }
    else{
      $("#userError").removeAttr("hidden")
    }
   
  }
 saveData(){
  this.email = this.myForm.value.email
  this.password = this.myForm.value.password
    this.login()
  }

  seePassword(){
    $("#password").prop("type", "text");
    $("#passEnable").removeAttr("hidden");
    $("#passDisable").attr("hidden", "true");
  }

  blindPassword(){
    $("#password").prop("type", "password");
    $("#passDisable").removeAttr("hidden");
    $("#passEnable").attr("hidden", "true");
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  

  constructor(private fireAuth : AngularFireAuth, private location:Location) { }

  async login(email:string, password:string){
  
    await this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(res => 
        localStorage.setItem("login", "true")

    ).catch(error => localStorage.setItem("login", "false"));
  }
}

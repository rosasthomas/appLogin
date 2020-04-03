import { Component } from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private location:Location) {}

  async cerrarSesion(){
    await $(".home").slideUp()
    this.location.go("/login")
    window.location.reload();
  }
}

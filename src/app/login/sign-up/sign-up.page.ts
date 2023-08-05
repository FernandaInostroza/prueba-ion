import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private api = "http://localhost:3000/pacientes";
  email: any;
  password: any;
  name: any;
  rut: any;
  age: any;
  phone: any;
  sex: any;
  weight: any;
  height: any;

  constructor() { }

  ngOnInit() {
  }
  Register() {

  }

  goToLogin(){

  }
}

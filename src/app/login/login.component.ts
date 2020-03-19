import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(emailid: any, pass: any) {
    if (emailid.value == "user@gmail.com" && pass.value == '123456') {

    }
    alert(emailid.value + pass.value)
  }
}

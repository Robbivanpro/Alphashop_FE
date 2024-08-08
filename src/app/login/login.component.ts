import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  titolo: string = "Inserisci la Tua Userid e Password";
  sottotitolo: string = "Solo gli utenti autorizzati possono accedere a questa applicazione";

  userId: string = "Nicola";
  password: string = "";

  autenticato: boolean = true;

  errMsg: string = "Spiacente, la userid e/o la password sono errati!";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.userId === "Nicola" && this.password === "123_Stella") {
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;
    }
    else {
      this.autenticato = false;

    }
  }
}

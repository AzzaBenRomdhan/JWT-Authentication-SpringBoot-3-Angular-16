import {Component, OnInit} from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token/token.service";
import {KeycloakService} from "../../services/keycloak/keycloak.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMsg: Array<string> = [];
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private keycloakService: KeycloakService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.keycloakService.init();
    await this.keycloakService.login();
  }

  /*
  login() {
    this.errorMsg = [];
    this.authService.authenticate(
      {
        body: this.authRequest
      }).subscribe(
      {
        next: (res):void => {
          this.tokenService.token = res.token as string;
          this.router.navigate(['home'])
        },
        error: (err):void => {
          console.log(err);
          if (err.error.validationErrors){
            this.errorMsg = err.error.validationErrors;
          }
          else {
            this.errorMsg.push(err.error.error);
          }
        }
      });
  }
  register() {
    this.router.navigate(['register'])
  }
  */
}

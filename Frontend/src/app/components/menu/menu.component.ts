import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../services/token/token.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  userFullName = '';
  constructor(private router: Router, private tokenService: TokenService) {}
  private jwtHelper = new JwtHelperService();

  ngOnInit() {
    this.loadUserFullName();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  loadUserFullName() {
    const token = this.tokenService.token;
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      this.userFullName = 'Guest';
    }

    const decodedToken = this.jwtHelper.decodeToken(token);
    return this.userFullName = decodedToken?.fullname || 'Unkowen user';
  }
}

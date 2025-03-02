import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak.KeycloakInstance | undefined;
  private _profile: UserProfile | undefined;

  get keycloak() {
    if (!this._keycloak) {
      // @ts-ignore
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'authentication',
        clientId: 'auth'
      });
    }
    return this._keycloak;
  }

  get profile(): UserProfile | undefined {
    return this._profile;
  }

  constructor() {}

  async init() {
    if (this.keycloak) { // Ensure keycloak is initialized before using it
      const authenticated = await this.keycloak.init({
        flow: 'standard',
        onLoad: 'login-required',
        checkLoginIframe: false
      });
      if (authenticated) {
        this._profile = (await this.keycloak?.loadUserProfile()) as UserProfile;
        this._profile.token = this.keycloak?.token || '';
      }
    }
  }

  login() {
    return this.keycloak?.login();
  }

  logout() {
    return this.keycloak?.logout({ redirectUri: 'http://localhost:4200' });
  }
}

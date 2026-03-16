import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private userAuthenticated: boolean = false;

  constructor() {}

  login() {
    this.userAuthenticated = true;
  }

  getUserAuthtneticated() {
    return this.userAuthenticated;
  }

  logout() {
    this.userAuthenticated = false;
  }
  
}

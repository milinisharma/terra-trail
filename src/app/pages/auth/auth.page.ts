import { Component, OnInit } from '@angular/core';
import { Auth } from './auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {

  constructor(
    private authService: Auth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    const userAuthenticated = this.authService.getUserAuthtneticated();
    if (userAuthenticated === true) this.navCtrl.navigateForward('/places/tabs/discover')
  }

}

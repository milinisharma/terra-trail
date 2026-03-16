import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Auth } from './pages/auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private menuCtrl: MenuController,
    private authService: Auth
  ) {}

  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.authService.logout();
  }
}

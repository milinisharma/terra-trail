import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Auth } from './pages/auth/auth';
import { Router } from '@angular/router';
import { Database } from './services/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  isDarkMode = false;
  showSplash = true;
  readonly splashTitle = 'TerraTrail';
  readonly splashTagline = 'Stay beyond the ordinary';
  readonly splashSubTagline = 'Follow your trail. Find your haven'



  constructor(
    private menuCtrl: MenuController,
    private authService: Auth,
    private router: Router,
    private dbService: Database
  ) {}

  ngOnInit() {
    const splashStartTime = Date.now();
    
    try {
      await this.dbService.initializePlugin();
      console.log('[APP] DB is initialized successfully');
    } catch (error) {
      console.log('[App] DB init failed: ', JSON.stringify(error));
    } finally {
      const elapsed = Date.now() - splashStartTime;
      const minVisibleMS = 2600;
      const delay = Math.max(0, minVisibleMS - elapsed);
      setTimeout(() => {
        this.showSplash = false;
      }, delay)
    }
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

  toggleDarkMode(event: CustomEvent) {
    this.isDarkMode = event.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', this.isDarkMode)
  }


}

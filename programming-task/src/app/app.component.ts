import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  showInit = true;

  onClickRegistration(): void {
    this.showInit = !this.showInit;
  }
}

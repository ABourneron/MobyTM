import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = true;

  constructor() {
  }

  public setAuth(state:boolean)
  {
    this.isAuth=state;
  }

}

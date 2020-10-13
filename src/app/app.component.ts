import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { UserStore } from './shared/user.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeopleManagement';

  constructor(private userStore: UserStore) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    this.userStore.getUsers();
  }
}

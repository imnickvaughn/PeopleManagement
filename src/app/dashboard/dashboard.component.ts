import { Component, OnInit } from '@angular/core';
import { UserStore } from '../shared/user.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
  displayedColumns = ['id', 'name', 'email'];
  constructor(private userStore: UserStore) { }

  ngOnInit() {
    this.userStore.users.subscribe(x => {
      this.users = x;
    });
  }

}

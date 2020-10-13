import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  public users = new BehaviorSubject<any>([]);
  constructor(private userService: UserService) { }

  getUsers(): Observable<object> {
    const obs = this.userService.getUsers();
    obs.subscribe(x => {
      this.users.next(x);
    });
    return obs;
  }
}

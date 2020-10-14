import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { USERS } from './model/testing/userTest.constant';
import { UserStore } from './shared/user.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: UserStore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [UserStore]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        store = TestBed.inject(UserStore);
        store.users.next(USERS);
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have call 'getUsers()'`, () => {
    const spyObj = spyOn(store, 'getUsers');
    comp.getUsers();
    expect(spyObj).toHaveBeenCalled();
  });
});

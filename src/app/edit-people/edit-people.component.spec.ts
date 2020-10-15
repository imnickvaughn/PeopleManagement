import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { USERS } from '../model/testing/userTest.constant';
import { EditDialogComponent } from '../shared/dialogs/edit/edit.dialog.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { UserStore } from '../shared/user.store';

import { EditPeopleComponent } from './edit-people.component';

describe('EditPeopleComponent', () => {
  let component: EditPeopleComponent;
  let fixture: ComponentFixture<EditPeopleComponent>;
  let store: UserStore
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule],
      providers: [UserStore, MatDialog],
      declarations: [EditPeopleComponent, FilterPipe]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(EditPeopleComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(UserStore);
        dialog = TestBed.inject(MatDialog);
        store.users.next(USERS);
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have call 'startEdit()'`, () => {
    const spyOpenMethodObj = spyOn(dialog, 'open').and
      .returnValue(
        { afterClosed: () => of(true) } as MatDialogRef<EditDialogComponent>
      );
    const user = USERS[0];
    component.startEdit(user.id, user.name, user.email, user.website);
    expect(spyOpenMethodObj).toHaveBeenCalled();
  });

  it(`should have call 'addNew()'`, () => {
    const spyOpenMethodObj = spyOn(dialog, 'open').and
      .returnValue(
        { afterClosed: () => of(true) } as MatDialogRef<EditDialogComponent>
      );
    const user = USERS[0];
    component.addNew();
    expect(spyOpenMethodObj).toHaveBeenCalled();
  });

  it(`should have call 'delete()'`, () => {
    component.deleteItem(USERS[0].id);
    expect(store.users.value.length).toBe(0);
  });
});

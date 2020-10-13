import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../shared/dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../shared/dialogs/edit/edit.dialog.component';
import { UserStore } from '../shared/user.store';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  id: number;
  users: any;
  isToLoad: boolean;
  displayedColumns = ['id', 'name', 'email', 'actions'];
  constructor(private userStore: UserStore, public dialog: MatDialog) { }

  ngOnInit() {
    this.isToLoad = false;
    this.userStore.users.subscribe(x => {
      this.isToLoad = true;
      this.users = x;
    });
  }


  startEdit(id: number, name: string, email: string, website: string, created_at: string, updated_at: string) {
    this.id = id;
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { id: id, name: name, email: email, website: website }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isToLoad = false;
      setTimeout(() => {
        this.isToLoad = true;
      }, 0);
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isToLoad = false;
      setTimeout(() => {
        this.isToLoad = true;
      }, 2);
    });
  }
}

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserStore } from '../../user.store';

@Component({
  selector: 'app-add-dialog',
  templateUrl: '../../dialogs/add/add.dialog.component.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, private userStore: UserStore,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.data = new User();
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    const usersValue: User[] = this.userStore.users.value;
    usersValue.push(this.data);
    this.userStore.users.next(usersValue);
  }
}

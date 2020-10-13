import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserStore } from '../../user.store';

@Component({
  selector: 'app-baza-dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.component.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, private userStore: UserStore,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty for submitting form
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    const usersValue: User[] = this.userStore.users.value;
    const index = usersValue.findIndex(x => x.id === this.data.id);
    usersValue[index] = this.data;
    this.userStore.users.next(usersValue);
  }
}

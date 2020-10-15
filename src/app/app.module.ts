import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app.routing';
import { UserService } from './shared/services/user.service';
import { UserStore } from './shared/user.store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EditDialogComponent } from './shared/dialogs/edit/edit.dialog.component';
import { AddDialogComponent } from './shared/dialogs/add/add.dialog.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditPeopleComponent,
    EditDialogComponent,
    AddDialogComponent,
    FilterPipe
  ],
  imports: [
    AppRoutingModule,
    MatListModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditDialogComponent, AddDialogComponent],
  providers: [UserService, UserStore],
  bootstrap: [AppComponent]
})
export class AppModule { }

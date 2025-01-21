import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';




@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  @Input({required: true}) selectedName!:string;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}

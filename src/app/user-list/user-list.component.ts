import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  `,
  styles: []
})
export class UserListComponent {
  @Input() users: string[] = [];
}

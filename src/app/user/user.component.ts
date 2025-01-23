import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../tasks/shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

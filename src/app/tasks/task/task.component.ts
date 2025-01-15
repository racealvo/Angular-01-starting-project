import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  name: string = 'Task 1';
  description: string = 'Description 1';
  dueDate: string = '2021-12-31';

  onSelect() {
    console.log('Task selected');
  }
}

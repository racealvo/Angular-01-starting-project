import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) title: string = 'SOME TITLE';
  @Input({required: true}) summary: string = 'SOME SUMMARY';
  dueDate: string = '2021-12-31';

  onSelect() {
    console.log('Task selected');
  }
}

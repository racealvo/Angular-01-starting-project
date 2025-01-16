import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks/task/task.model';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Input({required: true}) addTaskIsVisible = false;
  @Input({required: true}) task!: Task;
  @Output() addTask = new EventEmitter();
  @Output() cancelTask = new EventEmitter();

  onAddTask() {
    this.addTask.emit();
  }

  onCancelTask() {
    this.cancelTask.emit();
  }
}

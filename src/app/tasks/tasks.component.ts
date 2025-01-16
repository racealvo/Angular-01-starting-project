import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewtaskComponent } from "../newtask/newtask.component";
import { Task } from "./task/task.model";

const templateTask:Task = {
  id: 't',
  userId: 'u',
  dueDate: Date.now().toString(),
  title: 'Ray Title ',
  summary: 'Ray Summary '
};

let currcount = 11;

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  addTaskIsVisible = false;
  @Output() newTask: Task = templateTask;
  
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    // Remove the task from the list of tasks
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onAddTask() {
    currcount++;
    this.newTask = {...templateTask};
    this.newTask.id += currcount.toString();
    this.newTask.userId += ((Math.random()*6)+1).toString();
    this.newTask.dueDate = Date.now().toString();
    this.newTask.title += currcount.toString();
    this.newTask.summary += currcount.toString();

    this.addTaskIsVisible = true;

    console.log(this.tasks);
    console.log(this.newTask);
    console.log(templateTask);
  }

  onSaveTask() {
    this.addTaskIsVisible = false;
    this.tasks.push(this.newTask);
  }

  onCancelTask() {
    this.addTaskIsVisible = false;
  }
}

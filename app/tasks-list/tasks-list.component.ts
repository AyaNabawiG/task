import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITask } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit {

  _taskService:TasksService=inject(TasksService)
data:ITask[]=[];

ngOnInit(): void {
  this.getData()
}

getData(){
  this._taskService.GetTasks().subscribe({
    next:(res:ITask[])=> {
      this.data=res
    },
    error:(err:any)=>{
      console.log(err?.message);
      
    }
  })
}

}
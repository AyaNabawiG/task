import { Component, inject, OnInit } from '@angular/core';
import { ITask } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {

  _taskService: TasksService = inject(TasksService);
  _activatedRoute:ActivatedRoute=inject(ActivatedRoute);

  data: ITask = {} as ITask;
  _id: number = 0;

  ngOnInit(): void {
    this.getParam()
  }

  getParam(){
    this._activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this._id=Number(param.get('id'));
      this.getData()
    })
  }

  getData() {
    if(this._id){
      this._taskService.GetById(this._id).subscribe({
        next: (res: ITask) => {
          this.data = res
        },
        error: (err: any) => {
          console.log(err);
          
  
        }
      })
    }

  }
  closeCompletion(){
    let {...obj}={...this.data,status:!this.data.status} 
    this._taskService.UpdateTask(obj).subscribe({
      next:(res:ITask)=>{
        this.data=res;
        alert('Successfully Changed Completion')
      },
      error:(err)=>{
        alert('Error Changed Completion !!!')
      }
    });
  }

}

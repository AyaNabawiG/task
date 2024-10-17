import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  _url: string = environment.uRL_API;
  constructor(private _http: HttpClient) { }

  GetTasks(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this._url)
  }

  GetById(id: number): Observable<ITask> {
    return this._http.get<ITask>(`${this._url}/${id}`)
  }

  AddTask(data: ITask) {
    return this._http.post(this._url, data)
  }
  UpdateTask(data: ITask):Observable<ITask> {
    return this._http.put<ITask>(`${this._url}/${data?.id}`, data)
  }

  DeleteTask(id: number) {
    return this._http.delete(`${this._url}/${id}`)
  }
}

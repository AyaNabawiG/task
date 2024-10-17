import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {
        path:'',
        component:TasksListComponent
    },
    {
        path:'view/:id',
        component:TaskDetailsComponent
    },
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    }
];

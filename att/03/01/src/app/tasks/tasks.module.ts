import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  //FormsModule offers access to ngModel, which is used in the NewTaskComponent template
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}

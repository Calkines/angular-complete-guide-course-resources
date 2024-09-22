import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, DatePipe, BrowserModule],
  declarations: [
    AppComponent,
    TasksComponent,
    UserComponent,
    CardComponent,
    NewTaskComponent,
    TaskComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

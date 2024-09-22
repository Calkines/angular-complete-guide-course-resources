import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';

@NgModule({
  // Add standalone components here
  imports: [BrowserModule, TasksComponent, HeaderComponent, UserComponent],
  // Add not standalone compoents here
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

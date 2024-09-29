import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestimentResultsComponent } from './investiment-results/investiment-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestimentResultsComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}

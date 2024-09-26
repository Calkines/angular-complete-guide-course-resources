import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestimentResultsComponent } from '../investiment-results/investiment-results.component';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestimentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestiment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  showResults = false;
  onSubmitForm() {
    console.log('Form Submitted!');
    console.log(this.initialInvestiment);
    this.showResults = true;
  }
}

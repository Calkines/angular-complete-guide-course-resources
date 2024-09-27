import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestimentResultsComponent } from '../investiment-results/investiment-results.component';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestimentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output()
  calculate = new EventEmitter<InvestmentInput>();

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  showResults = false;

  onSubmitForm() {
    console.log('form foi clicado');
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
    });
  }
}

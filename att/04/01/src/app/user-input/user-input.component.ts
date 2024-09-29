import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestimentResultsComponent } from '../investiment-results/investiment-results.component';
import type { InvestmentInput } from '../investment-input.model';
import { InvestimentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestimentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestimentService) {}

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  showResults = false;

  onSubmitForm() {
    console.log('form foi clicado');
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
    });
  }
}

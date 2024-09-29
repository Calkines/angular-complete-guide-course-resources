import { Component, computed, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput, InvestmentOutput } from '../investment-input.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InvestimentService } from '../investment.service';

@Component({
  selector: 'app-investiment-results',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css',
})
export class InvestimentResultsComponent {
  private investmentService = inject(InvestimentService);
  //constructor(private investmentService: InvestimentService) {}

  data = this.investmentService.resultsData.asReadonly();
}

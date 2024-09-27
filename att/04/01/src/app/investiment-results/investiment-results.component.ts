import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput, InvestmentOutput } from '../investment-input.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-investiment-results',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './investiment-results.component.html',
  styleUrl: './investiment-results.component.css',
})
export class InvestimentResultsComponent {
  @Input()
  data?: InvestmentOutput[];
}

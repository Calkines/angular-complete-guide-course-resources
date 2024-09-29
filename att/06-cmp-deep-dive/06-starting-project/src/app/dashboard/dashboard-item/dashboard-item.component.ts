import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true }) title!: string;
  // @Input({ required: true }) img_src!: string;
  // @Input({ required: true }) img_alt!: string;

  title = input.required<string>();
  image = input.required<{ src: string; alt: string }>();
}

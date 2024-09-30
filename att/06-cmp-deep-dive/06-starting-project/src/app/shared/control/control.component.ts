import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // click: 'onClick($event)',
  },
})
export class ControlComponent {
  title = input.required<string>();
  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log('ControlComponent.onClick', event);
    console.log(event);
  }
  @Output() onCheck = new EventEmitter();

  check() {
    console.log('acionou check do control component');
    this.onCheck.emit();
  }
}

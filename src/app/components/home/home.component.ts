import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected count = signal(0);
  protected countDouble = computed(() => this.count() * 2)
  constructor() {}
  increment() {
    this.count.update(comp => comp + 1);
  }
  decrement() {
    this.count.update(comp => comp - 1);
  }
}

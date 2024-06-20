import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected count = signal<number>(0);
  protected name = signal<string>("Guilherme");
  protected countDouble = computed(() => this.count() * 2);
  protected arrayNumber = signal([1, 2, 3]);
  protected lastNumber: number = 5;
  constructor() {
    effect(() => {
      if (this.count() > 10 && this.count() < 13) {
        alert("Usando uma condicional no Effect do Signals.");
      }
    });
  }
  increment(): void {
    this.count.update(comp => comp + 1);
  }
  decrement(): void {
    this.count.update(comp => comp - 1);
  }
  setName(): void {
    this.name.set("Quintino");
  }
  updateName(): void {
    this.name.update((oldName: string): string => {
      console.log(oldName);
      return "Silva";
    });
  }
  updateChangeArray() {
    this.lastNumber += 1;
    this.arrayNumber.update(currentArray => {
      return [...currentArray, this.lastNumber];
    })
    console.log(this.arrayNumber());
  }
}

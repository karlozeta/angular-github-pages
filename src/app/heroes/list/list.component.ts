import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public deleteHero?: string;

  deleteLastHero(): void {
    this.deleteHero = this.heroesNames.pop();
  }

}

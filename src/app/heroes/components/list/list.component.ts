import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk','Ghost Rider','Thor'];
  public deleteHero?:string;

  removeLastHero():void{
    const deleteHero=this.heroNames.pop();
    this.deleteHero = deleteHero;
    console.log('Hero borrado ',deleteHero);
  }




}

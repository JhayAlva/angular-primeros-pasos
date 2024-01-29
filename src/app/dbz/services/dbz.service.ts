import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public character:Character[]=[{
    id:uuid(),
    name:'Gohan',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegeta',
    power:7500
  }];

  addCharacter( character:Character):void{
   // this.character.unshift(character); agrega al principio del array
      const newCharacter:Character={id:uuid(),...character};
      this.character.push(newCharacter); //agrega al final del array
  }

  // onDeleteCharacter(index:number):void{
  //   this.character.splice(index,1); //el ,1 significa que solo queremos borrar un elemento del array
  // }

  onDeleteCharacterbyId(id:string){
    this.character = this.character.filter(c => c.id !== id);
  }

}

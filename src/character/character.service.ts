import { Injectable } from '@nestjs/common';
import * as characterData from './characters.json';

@Injectable()
export class CharacterService {
  getCharacters(): any {
    return characterData;
  }

  getCharacter(id: number): any {
    return characterData.find((character) => character.id === Number(id));
  }
}

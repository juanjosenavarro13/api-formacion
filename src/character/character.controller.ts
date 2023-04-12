import { CharacterService } from './character.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('character')
export class CharacterController {
  constructor(private CharacterService: CharacterService) {}

  @Get()
  getCharacters(): any {
    return this.CharacterService.getCharacters();
  }

  @Get('/:id')
  getCharacter(@Param() params): any {
    return this.CharacterService.getCharacter(params.id);
  }
}

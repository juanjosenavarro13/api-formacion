/* eslint-disable @typescript-eslint/no-unused-vars */
import { CharacterService } from './character.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('character')
export class CharacterController {
  constructor(private CharacterService: CharacterService) {}

  @Get()
  async getCharacters() {
    return await this.CharacterService.getCharacters();
  }

  @Get('/:id')
  async getCharacter(@Param() params) {
    return await this.CharacterService.getCharacter(params.id);
  }
}

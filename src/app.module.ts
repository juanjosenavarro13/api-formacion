import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [CharacterModule, EpisodeModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

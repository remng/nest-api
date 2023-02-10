import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // decorator JavaScript EcmaScript 7
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

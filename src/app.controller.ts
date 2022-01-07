import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/content/:id')
  getContentById(
    @Param('id') id: string,
  ): { content: string } | { error: string } {
    const idNum = Number(id);
    if (Number.isNaN(idNum)) {
      return {
        error: 'not a number',
      };
    }
    return {
      content: 'bla bla bla',
    };
  }
}

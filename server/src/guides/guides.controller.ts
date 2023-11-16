import { Controller, Get } from '@nestjs/common';
import { GuidesService } from './guides.service';

@Controller()
export class guidesController {
  constructor(private readonly guidesService: GuidesService) {}

  @Get('/guides')
  getGuides() {
    return this.guidesService.findAll();
  }
}

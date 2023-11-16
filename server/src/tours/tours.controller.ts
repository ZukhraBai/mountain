import { Controller, Get } from '@nestjs/common';
import { ToursService } from './tours.service';

@Controller()
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get('/tours')
  getTours() {
    return this.toursService.findAll();
  }
}

import { Body, Controller, Post } from '@nestjs/common';

import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  async create(@Body('name') name: string) {
    return await this.leadsService.create(name);
  }
}

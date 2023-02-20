import { Controller, Post, Body } from '@nestjs/common';

import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body('name') name: string) {
    return await this.companiesService.create(name);
  }
}

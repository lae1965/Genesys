import { Controller, Post, Body } from '@nestjs/common';

import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body('name') name: string) {
    return await this.contactsService.create(name);
  }
}

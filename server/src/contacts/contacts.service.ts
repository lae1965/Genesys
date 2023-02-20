import { Injectable } from '@nestjs/common';

import { crmController } from './../_util/crmController';

@Injectable()
export class ContactsService {
  async create(name: string) {
    try {
      const data = await crmController('contacts', name);
      return { id: data.contacts[0].id };
    } catch (e) {
      throw e;
    }
  }
}

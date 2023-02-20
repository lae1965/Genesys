import { Injectable } from '@nestjs/common';

import { crmController } from './../_util/crmController';

@Injectable()
export class LeadsService {
  async create(name: string) {
    try {
      const data = await crmController('leads', name);
      return { id: data.leads[0].id };
    } catch (e) {
      throw e;
    }
  }
}

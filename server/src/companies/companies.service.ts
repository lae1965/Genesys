import { Injectable } from '@nestjs/common';

import { crmController } from './../_util/crmController';

@Injectable()
export class CompaniesService {
  async create(name: string) {
    try {
      const data = await crmController('companies', name);
      return { id: data.companies[0].id };
    } catch (e) {
      throw e;
    }
  }
}

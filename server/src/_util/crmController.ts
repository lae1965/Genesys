import { $api } from './request';

export const crmController = async (url: string, name: string) => {
  const retcode = await $api.post(url, [{ name }]);
  return retcode.data._embedded;
};

import { User } from '@prisma/client';
import { client } from '../search/auth';
import { SearchIndexEnum, syncToEs } from '../search/elastic.service';

export const userElasticDocuments = {
  async findOrCreateUser(userDetails : Partial<User>): Promise<any> {
    console.log('userDetails:', userDetails);

    const upsert = await syncToEs(userDetails, SearchIndexEnum.USER);

    console.log('upsert:', upsert);

  },
};

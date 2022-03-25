import { User } from '@prisma/client';
import { neo } from '../neo/auth';

export const userNeoDocuments = {
  async findOrCreateUser(userDetails : Partial<User>): Promise<any> {
    try {
      const query = `
      MERGE (n:user { phoneNumber: '${userDetails.phoneNumber}'})
        ON MATCH
          SET n = $props
        ON CREATE
          SET n = $props
        RETURN n`;
        
      const values = await neo.query(query, { props: userDetails  });
      // console.log('values:', values[0]._fields[0]);

      return { values : values[0]._fields[0].properties, id: values[0]._fields[0].identity.low };

    } catch (err) {
      throw new Error(err);
    }
  },

  async addInfoToUser(key, data) {
    
  },
};

// import { User } from '@prisma/client';
import { User } from '@prisma/client';
import { aql } from 'arangojs';
import { db } from 'src/partners/authArango';

export const document = { 

  async addInfoToUser(key, data) {
    await db.collection('user');

    const update = await db.query(
      aql`
        UPDATE { _key: ${key} } WITH ${data} IN user
        RETURN NEW
        `,
    );
    const [ doc ] = await  update.all();
    return doc;
  },


  async findOrCreateUser(userDetails : Partial<User>): Promise<any> {
    try {
      await db.collection('user');

      const searchIfExists = await db.query(
        aql`
          UPSERT  { phoneNumber: ${userDetails.phoneNumber}  }
          INSERT ${userDetails}  
          UPDATE {}
          INTO user
          RETURN NEW
        `, 
      );
      const [user] = await searchIfExists.all();
      return user;

    } catch (err){
      throw new Error(err);
    }
  },



};
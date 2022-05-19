
import { db } from 'src/old/partners/authArango';
import { aql } from 'arangojs';

export const AccountReprository = {
  async findOrCreate(accountDetails) {
    await db.collection('account');
    try {
      const searchIfExists = await db.query(
        aql`
              UPSERT  { "mpesa" : {"paybill": ${accountDetails.values.mpesa.paybill} } }
              INSERT ${accountDetails}  
              UPDATE {}
              INTO account
              RETURN NEW
          `,
      );
      const [list] = await searchIfExists.all();    
      return list as any;
  
    } catch (err){
      throw new Error(err);
    }
  },
};
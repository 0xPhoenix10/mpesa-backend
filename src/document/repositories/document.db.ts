// import { User } from '@prisma/client';
import { Transaction, User } from '@prisma/client';
import { aql } from 'arangojs';
import { db } from 'src/partners/authArango';

export const document = {
  async ArangoTest(): Promise<void> {
    try {
      const account = await db.collection('account');
      const doc = {
        _key: 'some_test',
        name: 'my name',
        'some value': 'testval',
      };

      console.log('doc:', doc);
      const saveNow = await account.save(doc);
      console.log('saveNow:', saveNow);

      // await db.useDatabase('production');
      await db.version().then(
        (version) => console.log(version),
        (error) => console.error(error),
      );

      // const save = await db.save({ name: "name" })

      const documentDetails = await db.query(
        aql`RETURN DOCUMENT("account/8010212")`,
      );
      console.log('val', await documentDetails.all());
    } catch (err) {
      console.error(err.message);
    }
  },
 

  async addInfoToUser(key, data) {
    const update = await db.query(
      aql`
        UPDATE { _key: ${key} } WITH ${data} IN user
        RETURN NEW
        `,
    );
    const [ doc ] = await  update.all();
    return doc;
  },


  async findOrCreateFrom(userDetails : Partial<User>): Promise<any> {
    try {
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
      console.log('user:', user);

      return user;

      // if (user) return user;
      // if (!user) {
      //   const create = await db.query(
      //     aql`
      //           INSERT ${userDetails} INTO user
      //           RETURN NEW
      //       `,
      //   );
      //   const [newUser] = await create.all();
      //   return newUser;
      // }

    } catch (err){
      throw new Error(err);
    }
  },


  async createTransaction(transaction) {
    console.log('transaction:', transaction);
    try {
      const create = await db.query(
        aql`
        UPSERT  { transactionId: ${transaction.transactionId}  }
        INSERT ${transaction} 
        UPDATE {}
        INTO transaction
        RETURN NEW
          `,
      );

      const [newTransaction] = await create.all();
      console.log('newTransaction:', newTransaction);
    } catch (err) {
      throw new Error(err);
    }
  },
};
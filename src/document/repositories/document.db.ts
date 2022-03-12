// import { User } from '@prisma/client';
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
  async MpesaToGraph(documentData) {
    const { name, documentId,  phoneNumber, email, requestDate, period } = documentData.user;
    const fromUser = await this.findOrCreateFrom({ name, documentId,  phoneNumber, email });
    console.log('fromUser:', fromUser);

    const mpesaSummary = {
      requestDate,
      period,
      ...documentData.summary,
    };

    // Add mepsa details to user account
    this.addInfoToUser(fromUser._key, { mpesa: mpesaSummary });

    // add All transaction to Users.
    


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


  async findOrCreateFrom(userDetails): Promise<any> {
    try {
      const searchIfExists = await db.query(
        aql`
            FOR u IN user
            FILTER u.phoneNumber == ${userDetails.phoneNumber} 
            RETURN u
        `,
      );
      const [user] = await searchIfExists.all();
      if (user) return user;
      if (!user) {
        const create = await db.query(
          aql`
                INSERT ${userDetails} INTO user
                RETURN NEW
            `,
        );
        const [newUser] = await create.all();
        return newUser;
      }

    } catch (err){
      throw new Error(err);
    }
  },

};
import { flattenObject } from '../helpers/flatten';

const neo4j = require('neo4j-driver');

console.log('start');

const driver = neo4j.driver(
  'neo4j+s://b8483c2c.databases.neo4j.io',
  neo4j.auth.basic('neo4j', 'E_2a6xQywP75I9GbLWGbkPIrLSFZ_0GjSkci0EgZ5h4'),
);

const session = driver.session({
  database: 'neo4j',
  defaultAccessMode: neo4j.session.WRITE,
});

export const neo = {
  async query(query: string, params?: any) {
    // console.log('params:', params);
    const txc = session.beginTransaction();
    try {
      const result1 = await txc.run(query, params );
      await txc.commit();
      return result1.records;
    } catch (error) {
      console.log(error);
      await txc.rollback();
      console.log('rolled back');
    } finally {
      // await session.close();
    }
  },
};




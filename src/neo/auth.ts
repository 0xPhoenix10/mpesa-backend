import { flattenObject } from '../helpers/flatten';

const neo4j = require('neo4j-driver');


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
    const txc = session.beginTransaction();
    try {
      const result1 = await txc.run(query, params );
      await txc.commit();
      return result1.records;
    } catch (error) {
      await txc.rollback();
    } finally {
      // await session.close();
    }
  },
};




import { Client } from '@elastic/elasticsearch';

export const client = new Client({ node: 'http://elasticsearch:9200' });

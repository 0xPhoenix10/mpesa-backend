import { StatsService } from './stats.service';

describe('generic stats', () => {
  const generateStats = new StatsService;
  it('top 10', async () => {
    const value = await generateStats.generalTransaction();
    console.log('value:', value);
   
  });
});
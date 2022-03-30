const childProcess = require('child_process');
const options = { maxBuffer: 1024 * 1024 * 100, encoding: 'utf8', timeout: 30000 };

export const Tabula = async (file = './output/test.pdf', password = '123', pages = '1') => {
  async function tableData() {
    try {
      const child = await childProcess.execFileSync('java', ['-jar', './lib/tabula-1.0.5-jar-with-dependencies.jar', '-t', file, '-f', 'JSON', '--pages', pages, '--lattice', '--password', password, '--use-line-returns'], options);
      return JSON.parse(child);

    } catch (err) {
      console.log('err:someErrir', err);
      return null;
    }
  }

  async function rawData() {
    try {
      const child = await childProcess.execFileSync('java', ['-jar', './lib/tabula-1.0.5-jar-with-dependencies.jar', '-t', file, '-f', 'JSON', '--pages', pages, '--password', password, '--use-line-returns'], options);
      return JSON.parse(child);

    } catch (err) {
      console.log('err:someErrir', err);
      return null;
    }
  }

  return { table: await tableData(), raw: await rawData() };
};
const { spawn } = require('child_process');

export const CrackPassword = async  (file, potentialPassword) => {

  const pdfcrack = spawn('pdfcrack', ['-f', `./input/${file}`, '-c', '0123456789', '-m', '8', '-n', '8']);
  let crackedPassword = '';

  for await (const chunk of pdfcrack.stderr) {
    const toString = chunk.toString();
  }

  for await (const chunk of pdfcrack.stdout) {
    const toString = chunk.toString();
    const password = toString.includes('found user-password:');
    if (password) {
      const [s] =  toString.split(' ').slice(-1);
      const clean  = s.replace( /^\D+/g, '').replace('\'', '').trim();
      crackedPassword = clean;
    }

  }
  return crackedPassword;
};
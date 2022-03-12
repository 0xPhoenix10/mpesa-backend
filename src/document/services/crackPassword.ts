const { spawn, exec } = require('child_process');

export const CrackPassword = (file) => {
  const pdfcrack = spawn('pdfcrack', ['-f', `./input/${file}`, '-c', '0123456789', '-m', '8', '-n', '8']);

  // pdfcrack.stdout.pipe(process.stdout)

  pdfcrack.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });

  pdfcrack.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });

  // console.log('start')
  // exec('pdfcrack -f ./src/mpesa.pdf -p 25705637', (err, stdout, stderr) => {
  //     console.log('stdout:', stdout)
  //     console.log('stderr:', stderr)
  //     console.log('err:', err)
  // });


};
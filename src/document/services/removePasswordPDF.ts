const { spawn } = require('child_process');
const fs = require('fs');

const removePdfPassword = (params) => {
  const { password, inputFilePath, outputFilePath } = params;
  const child = spawn('qpdf', [`--password=${password}`, '--decrypt', `${inputFilePath}`, `${outputFilePath}`]);

  child.stdout.on('data', (data) => {
    console.log('data:', data);


    // password incorrect
  });

  child.stderr.on('data', (data) => {
    const error = `${data}`;

    if (error.includes('invalid password')) {
      console.log('invalid password');
      // find password by cracking the PDF file

    }

  });


  const tryFile = setInterval(() => {
    try {
      if (fs.existsSync(outputFilePath)) {
        //
        // file exists
        //
        console.log('does exists');


        // send to s3

        clearInterval(tryFile);
      }
    } catch (err) {
      console.error(err);
    }
  }, 100);


};

export const RemovePassword = async (fileName) => {
  // console.log('fileName:', fileName)
  const params = {
    inputFilePath: `./input/${fileName}`,
    password: '257056377',
    outputFilePath: `./output/${fileName}`,
  };

  // console.log('params:', params)
  removePdfPassword(params);
};
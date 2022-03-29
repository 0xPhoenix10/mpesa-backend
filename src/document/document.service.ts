import { HttpStatus, Injectable } from '@nestjs/common';
const https = require('https');
import { MpesaStatements } from './services/getMpesaStatements.service';
const fs = require('fs');
import { findPhoneNumbersInText } from 'libphonenumber-js';
import parseMobile from 'libphonenumber-js/mobile';
import { CrackPassword } from './services/crackPassword.service';
import { getDataFromPDF } from './services/tabula.service';
import { MpesaTransactions } from './services/mpesa/transactions.service';
import { OriginUser } from './services/mpesa/originUser';
// import { client } from '../search/auth';
import { DocumentInput } from './type/document.input';
import { s3 } from '../partners/authAWS';
import { Readable } from 'stream';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'; // ES Modules import
// const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
// const { S3RequestPresigner } = require("@aws-sdk/s3-request-presigner");
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner'; 
@Injectable()
export class DocumentService {
  async onModuleInit() {
    // console.log('run');
    // console.log('start');
    // this.mpesaStatements();


    // const val = await getDataFromPDF('./input/MPESA_Statement_2021-03-22_to_2022-03-22_2547xxxxxx246.pdf', '24564409-1877', 'all');
    // console.log('val:', val);
    
    // toExcel(val);
    // console.log('val:', val);

    // const originUser = await OriginUser(val);

    // await MpesaTransactions(originUser, val.transactions);

    // this.getDocumentDetails({ password: '24564409-1877', key:'locked/1.pdf', fileName: '1.pdf' });
  }
  
  async getDocumentDetailsS3(input:DocumentInput ) {
    try {
      const params = {
        Bucket: 'sevi-external-financial-statements', 
        Key: input.key,
      };

      // working 1

      const region = 'eu-central-1';
      const client = new S3Client({  
        credentials:{
          secretAccessKey: 'MFotbypr03ZQWQb8tcuvaXYAxc6k6sqeceWpeIu9',
          accessKeyId: 'AKIAYAMMCWGLL6V6DXKV',
        },
        region });

      const command = new GetObjectCommand(params);
      const response = await client.send(command);
      const stream = response.Body as Readable;

      const val =  await new Promise<Buffer>((resolve, reject) => {
        const chunks: Buffer[] = [];
        stream.on('data', chunk => chunks.push(chunk));
        stream.once('end', () => {
          console.log('done upload');
          resolve(Buffer.concat(chunks));
        });
        stream.once('error', reject);
      });

      // console.log('before');
      await fs.writeFile(`./output/${input.fileName}`, val, function (err) {
        if (err) {
          console.log('There has been an error saving your configuration data.');
          console.log(err.message);
          return;
        }
        // console.log('Configuration saved successfully.');

      });

      // console.log('after');

    } catch (err){throw new Error(err);}
  }

  async mpesaStatements() {
    try {

      // get mpesa statements
      await MpesaStatements();
    
      // find passwords for input folder files
      const filesNames = fs.readdirSync('./input');

      for (const file of filesNames ) {
        const items = file.split('_');
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        items.forEach(async (element) => {
          const cleanString = element.replace('.pdf', '');
          const [findPhone] =  findPhoneNumbersInText(cleanString, 'KE');
          if (findPhone) {
            const phoneDetails = parseMobile(findPhone.number.number, 'KE');
            if (phoneDetails.getType() === 'MOBILE') {
              const documentDetails = { password: null, phoneNumber: findPhone.number.number.toString(), fileName: file, potentialPassword:  null };
            
              //
              // Get Passwords
              //
              const password = await CrackPassword(file, documentDetails.potentialPassword );
              // console.log('password:', password);

              const val = await getDataFromPDF(`./input/${documentDetails.fileName}`, password, 'all');
              const originUser = await OriginUser(val);
              // console.log('originUser:', originUser);
              await MpesaTransactions(originUser, val.transactions);

              // move statement to output folder if all above is done correctly.
              await fs.copyFile(`./input/${file}`, `./output/${file}`, function (err) {
                if (err) throw err;
                console.log('Successfully renamed - AKA moved!');
                fs.unlink(`./input/${file}`, (err) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  console.log('file removed');
                  //file removed
                });
              });
 
             

              return;
            }
          }
        });
      }

    } catch (err){
      throw new Error(err);
    }
  }
}
function getSignedUrl(client: S3Client, command: GetObjectCommand, arg2: { expiresIn: number; }) {
  throw new Error('Function not implemented.');
}


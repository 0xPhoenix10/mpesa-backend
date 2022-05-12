const imaps = require('imap-simple');
const fs = require('fs');
import { writeFile } from 'fs/promises';


export const MpesaStatements = async () => {
  const config = {
    imap: {
      user: 'bartel@sevi.io',
      password: 'sevpaWho@sd45!i',
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      authTimeout: 3000,
      tlsOptions: { rejectUnauthorized: false },
    },
  };

  // Fetch emails from the last 24h
  const delay = 40 * 3600 * 1000;
  let yesterday = new Date();
  yesterday.setTime(Date.now() - delay);
  yesterday = yesterday.toISOString() as any;
  const searchCriteria = ['UNSEEN', ['SINCE', yesterday]];
  const fetchOptions = { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'], struct: true, markSeen: true };

  imaps.connect(config).then(function (connection) {

    connection.openBox('INBOX').then(function () {
      // retrieve only the headers of the messages
      return connection.search(searchCriteria, fetchOptions);
    }).then(function (messages) {

      let attachments = [];

      messages.forEach(function (message) {
        const parts = imaps.getParts(message.attributes.struct);
        attachments = attachments.concat(parts.filter(function (part) {
          return part.disposition && part.disposition.type.toUpperCase() === 'ATTACHMENT';
        }).map(function (part) {
          if (part.params.name.includes('MPESA_Statement')) {
            // add from search 
            // const email = extractEmails(message.parts[0].body.from[0])
            // statementsFrom.push(['HEADER', "FROM", email[0]])

            // retrieve the attachments only of the messages with attachments
            return connection.getPartData(message, part)
              .then(function (partData) {
                return {
                  filename: part.disposition.params.filename,
                  data: partData,
                };
              });
          }
          return null;
        }));
      });

      return Promise.all(attachments);
    }).then(async function (attachments) {
      // save file to input directory. 
      // remove pin from attachments
      const list = attachments.filter((item) => item !== null);
      for (const item of list) {
        const file = await writeFile(`./input/${item.filename}`, item.data );

        
        // start encrypting file names
        // RemovePassword(item.filename);
      }

      // // All Done, move file to read
      // connection.search(statementsFrom, { ...fetchOptions, markSeen: true });




    });
  });




};
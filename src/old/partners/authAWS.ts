import aws from 'aws-sdk';

const region = 'eu-central-1';

aws.config.update({
  secretAccessKey: 'MFotbypr03ZQWQb8tcuvaXYAxc6k6sqeceWpeIu9',
  accessKeyId: 'AKIAYAMMCWGLL6V6DXKV',
  signatureVersion: 'v4',
  region,
});

export const s3 = new aws.S3({ region });

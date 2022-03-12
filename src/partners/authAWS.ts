import aws from 'aws-sdk';

const region = 'eu-central-1';

aws.config.update({
    secretAccessKey: 'MFotbypr03ZQWQb8tcuvaXYAxc6k6sqeceWpeIu9',
    accessKeyId: 'AKIAYAMMCWGLL6V6DXKV',
    signatureVersion: 'v4',
    region,
});

export const sns = new aws.SNS({ region });

export const ses = new aws.SES({ apiVersion: '2010-12-01' });

export const s3 = new aws.S3({ region });

export const rekognition = new aws.Rekognition();

export const textract = new aws.Textract();

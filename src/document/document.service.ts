import { Injectable } from '@nestjs/common';
import { Tabula } from 'src/helpers/lib/tabula';
import { document } from './repositories/document.db';
import { CrackPassword } from './services/crackPassword';
import { getDataFromPDF } from './services/tabula.service';

@Injectable()
export class DocumentService {
    async onModuleInit() {
        // await getDataFromPDF('./output/test.pdf', null, '1')
        // GetJSON()

        const val = await getDataFromPDF('./input/MPESA_Statement_20220101_to_20220131_254722522382.pdf', '13319712', '1');
        // console.log('val:', val)


        document.MpesaToGraph(val);
        // 

        // CrackPassword('MPESA_Statement_2021-08-25_to_2022-02-25_254728434471.pdf')

    }
}

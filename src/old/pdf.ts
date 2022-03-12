const fs = require("fs");
const PDFParser = require("pdf2json");
var pdf2table = require('pdf2table');
// import { pdf2table } from './helpers/toTable'

export const GetJSON = () => {
    const pdfParser = new PDFParser(null, null, '25705637');

    pdfParser.on("pdfParser_dataError", (errData) => {
        console.log('errData:', errData)
        console.error(errData.parserError);
    });

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
        fs.writeFile("./output/test324324.json", JSON.stringify(pdfData), (val) => { console.log("Done.", val); });
        console.log('done new')
    });

    pdfParser.loadPDF("./output/test.pdf");
}


export const GETtable = () => {
    fs.readFile('./output/test.pdf', function (err, buffer) {

        pdf2table.parse(buffer, function (err, rows, rowsdebug) {
            if (err) return console.log(err);
            //
            // store raw data in elasticSearch
            //

            // 
            // parse data
            DataMapping(rows)


        });
    });
}


const DataMapping = (rows) => {
    const knownItems = [
        { field: 'Customer Name:', name: "name", valueIndex: 1 },
        { field: 'Mobile Number:', name: "phoneNumber", valueIndex: 1 },
        { field: 'Email Address:', name: 'email', valueIndex: 1 },
        { field: 'Statement Period:', name: "statementPeriod", valueIndex: 1 },
        { field: 'Request Date:', name: "requestDate", valueIndex: 1 },
        { field: 'TRANSACTION TYPE', name: "typeIn", valueIndex: 1 },
        { field: 'TRANSACTION TYPE', name: "typeOut", valueIndex: 2 },
        { field: 'SEND MONEY:', name: "sendMoneyIn", valueIndex: 1 },
        { field: 'SEND MONEY:', name: "sendMoneyOut", valueIndex: 2 },
        { field: 'RECEIVED MONEY:', name: "recieveMoneyIn", valueIndex: 1 },
        { field: 'RECEIVED MONEY:', name: "recieveMoneyOut", valueIndex: 2 },
        { field: 'AGENT DEPOSIT:', name: "AgentDepositIn", valueIndex: 1 },
        { field: 'AGENT DEPOSIT:', name: "AgentDepositOut", valueIndex: 2 },
        { field: 'AGENT WITHDRAWAL:', name: "AgentWithdrawalIn", valueIndex: 1 },
        { field: 'AGENT WITHDRAWAL:', name: "AgentWithdrawalOut", valueIndex: 2 },
        { field: 'LIPA NA M-PESA (BUY GOODS):', name: "goodsIn", valueIndex: 1 },
        { field: 'LIPA NA M-PESA (BUY GOODS):', name: "goodsOut", valueIndex: 2 },
        { field: 'OTHERS:', name: "otherIn", valueIndex: 1 },
        { field: 'OTHERS:', name: "otherOut", valueIndex: 2 },
        { field: 'TOTAL:', name: "totalTransactionsIn", valueIndex: 1 },
        { field: 'TOTAL:', name: "totalTransactionsOut", valueIndex: 2 }
    ]

    let dataMapping = {
        owner: ownerData(rows, knownItems),
        transactions: transactions(rows)
    }

}



// create parsed transaction

const ownerData = (array, knownItems) => {
    let foundItems = []
    const val = array.map((rawItem, index) => {
        // console.log('rawItem:', rawItem)

        knownItems.forEach((item) => {
            if (item.field === rawItem[0]) {
                foundItems.push({ label: item.name, value: rawItem[item.valueIndex] })
            }
        })


    })

    return foundItems

}


const transactions = array => {
    let foundItems = []

    // get all known transactions
    array.map((rawItem, index) => {

        if (rawItem.length === 1) {
            // console.log('single item:', rawItem)

            // console.log('foundItems:', foundItems)

            if (foundItems.length > 0) {
                let lastItem = foundItems?.pop();
                if (rawItem[0].length < 60) {
                    // console.log('lastItem:', lastItem)
                    lastItem[2] = `${lastItem[2]} ${rawItem[0]}`
                    foundItems.push(lastItem)

                    // console.log('lastItem:', lastItem)
                }

            }


        }
        if (rawItem[0].length === 10) {
            // console.log('transaction', rawItem)
            // console.log('index:', index)
            foundItems.push(rawItem)
        }

    })


    console.log('foundItems:', foundItems)
    // parseTransaction()
    // console.log('knownTransactions:', knownTransactions)
    return foundItems



}




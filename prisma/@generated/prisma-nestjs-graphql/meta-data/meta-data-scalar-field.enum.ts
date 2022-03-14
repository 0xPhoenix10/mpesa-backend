import { registerEnumType } from '@nestjs/graphql';

export enum MetaDataScalarFieldEnum {
    walletAccount = "walletAccount",
    CRB = "CRB",
    taxId = "taxId",
    taxName = "taxName",
    seller = "seller",
    sellerPhase = "sellerPhase",
    buyerPhase = "buyerPhase",
    partnerRole = "partnerRole",
    documentCOI = "documentCOI",
    documentCR12 = "documentCR12",
    documentSCF = "documentSCF",
    documentSCA = "documentSCA",
    documentStore = "documentStore",
    documentKRAcert = "documentKRAcert",
    legalStatus = "legalStatus",
    metaBaseURL = "metaBaseURL",
    buyer = "buyer",
    maxBuyerOrderAmount = "maxBuyerOrderAmount"
}


registerEnumType(MetaDataScalarFieldEnum, { name: 'MetaDataScalarFieldEnum', description: undefined })

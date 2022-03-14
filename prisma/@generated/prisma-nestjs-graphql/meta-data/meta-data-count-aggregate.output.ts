import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MetaDataCountAggregate {

    @Field(() => Int, {nullable:false})
    walletAccount!: number;

    @Field(() => Int, {nullable:false})
    CRB!: number;

    @Field(() => Int, {nullable:false})
    taxId!: number;

    @Field(() => Int, {nullable:false})
    taxName!: number;

    @Field(() => Int, {nullable:false})
    seller!: number;

    @Field(() => Int, {nullable:false})
    sellerPhase!: number;

    @Field(() => Int, {nullable:false})
    buyerPhase!: number;

    @Field(() => Int, {nullable:false})
    partnerRole!: number;

    @Field(() => Int, {nullable:false})
    documentCOI!: number;

    @Field(() => Int, {nullable:false})
    documentCR12!: number;

    @Field(() => Int, {nullable:false})
    documentSCF!: number;

    @Field(() => Int, {nullable:false})
    documentSCA!: number;

    @Field(() => Int, {nullable:false})
    documentStore!: number;

    @Field(() => Int, {nullable:false})
    documentKRAcert!: number;

    @Field(() => Int, {nullable:false})
    legalStatus!: number;

    @Field(() => Int, {nullable:false})
    metaBaseURL!: number;

    @Field(() => Int, {nullable:false})
    buyer!: number;

    @Field(() => Int, {nullable:false})
    maxBuyerOrderAmount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

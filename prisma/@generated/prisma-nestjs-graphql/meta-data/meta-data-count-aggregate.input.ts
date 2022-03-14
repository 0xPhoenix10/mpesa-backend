import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MetaDataCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    walletAccount?: true;

    @Field(() => Boolean, {nullable:true})
    CRB?: true;

    @Field(() => Boolean, {nullable:true})
    taxId?: true;

    @Field(() => Boolean, {nullable:true})
    taxName?: true;

    @Field(() => Boolean, {nullable:true})
    seller?: true;

    @Field(() => Boolean, {nullable:true})
    sellerPhase?: true;

    @Field(() => Boolean, {nullable:true})
    buyerPhase?: true;

    @Field(() => Boolean, {nullable:true})
    partnerRole?: true;

    @Field(() => Boolean, {nullable:true})
    documentCOI?: true;

    @Field(() => Boolean, {nullable:true})
    documentCR12?: true;

    @Field(() => Boolean, {nullable:true})
    documentSCF?: true;

    @Field(() => Boolean, {nullable:true})
    documentSCA?: true;

    @Field(() => Boolean, {nullable:true})
    documentStore?: true;

    @Field(() => Boolean, {nullable:true})
    documentKRAcert?: true;

    @Field(() => Boolean, {nullable:true})
    legalStatus?: true;

    @Field(() => Boolean, {nullable:true})
    metaBaseURL?: true;

    @Field(() => Boolean, {nullable:true})
    buyer?: true;

    @Field(() => Boolean, {nullable:true})
    maxBuyerOrderAmount?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

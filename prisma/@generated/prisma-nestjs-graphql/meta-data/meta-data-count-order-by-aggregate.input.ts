import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MetaDataCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    walletAccount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    CRB?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seller?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sellerPhase?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buyerPhase?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    partnerRole?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCOI?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCR12?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentSCF?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentSCA?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentStore?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentKRAcert?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    legalStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metaBaseURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buyer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxBuyerOrderAmount?: keyof typeof SortOrder;
}

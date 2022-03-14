import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MetaDataCountOrderByAggregateInput } from './meta-data-count-order-by-aggregate.input';
import { MetaDataAvgOrderByAggregateInput } from './meta-data-avg-order-by-aggregate.input';
import { MetaDataMaxOrderByAggregateInput } from './meta-data-max-order-by-aggregate.input';
import { MetaDataMinOrderByAggregateInput } from './meta-data-min-order-by-aggregate.input';
import { MetaDataSumOrderByAggregateInput } from './meta-data-sum-order-by-aggregate.input';

@InputType()
export class MetaDataOrderByWithAggregationInput {

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

    @Field(() => MetaDataCountOrderByAggregateInput, {nullable:true})
    _count?: MetaDataCountOrderByAggregateInput;

    @Field(() => MetaDataAvgOrderByAggregateInput, {nullable:true})
    _avg?: MetaDataAvgOrderByAggregateInput;

    @Field(() => MetaDataMaxOrderByAggregateInput, {nullable:true})
    _max?: MetaDataMaxOrderByAggregateInput;

    @Field(() => MetaDataMinOrderByAggregateInput, {nullable:true})
    _min?: MetaDataMinOrderByAggregateInput;

    @Field(() => MetaDataSumOrderByAggregateInput, {nullable:true})
    _sum?: MetaDataSumOrderByAggregateInput;
}

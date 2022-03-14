import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereInput } from './installment-where.input';
import { InstallmentOrderByWithRelationInput } from './installment-order-by-with-relation.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstallmentCountAggregateInput } from './installment-count-aggregate.input';
import { InstallmentAvgAggregateInput } from './installment-avg-aggregate.input';
import { InstallmentSumAggregateInput } from './installment-sum-aggregate.input';
import { InstallmentMinAggregateInput } from './installment-min-aggregate.input';
import { InstallmentMaxAggregateInput } from './installment-max-aggregate.input';

@ArgsType()
export class InstallmentAggregateArgs {

    @Field(() => InstallmentWhereInput, {nullable:true})
    where?: InstallmentWhereInput;

    @Field(() => [InstallmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InstallmentOrderByWithRelationInput>;

    @Field(() => InstallmentWhereUniqueInput, {nullable:true})
    cursor?: InstallmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => InstallmentCountAggregateInput, {nullable:true})
    _count?: InstallmentCountAggregateInput;

    @Field(() => InstallmentAvgAggregateInput, {nullable:true})
    _avg?: InstallmentAvgAggregateInput;

    @Field(() => InstallmentSumAggregateInput, {nullable:true})
    _sum?: InstallmentSumAggregateInput;

    @Field(() => InstallmentMinAggregateInput, {nullable:true})
    _min?: InstallmentMinAggregateInput;

    @Field(() => InstallmentMaxAggregateInput, {nullable:true})
    _max?: InstallmentMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereInput } from './installment-where.input';
import { InstallmentOrderByWithAggregationInput } from './installment-order-by-with-aggregation.input';
import { InstallmentScalarFieldEnum } from './installment-scalar-field.enum';
import { InstallmentScalarWhereWithAggregatesInput } from './installment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { InstallmentCountAggregateInput } from './installment-count-aggregate.input';
import { InstallmentAvgAggregateInput } from './installment-avg-aggregate.input';
import { InstallmentSumAggregateInput } from './installment-sum-aggregate.input';
import { InstallmentMinAggregateInput } from './installment-min-aggregate.input';
import { InstallmentMaxAggregateInput } from './installment-max-aggregate.input';

@ArgsType()
export class InstallmentGroupByArgs {

    @Field(() => InstallmentWhereInput, {nullable:true})
    where?: InstallmentWhereInput;

    @Field(() => [InstallmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<InstallmentOrderByWithAggregationInput>;

    @Field(() => [InstallmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof InstallmentScalarFieldEnum>;

    @Field(() => InstallmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstallmentScalarWhereWithAggregatesInput;

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

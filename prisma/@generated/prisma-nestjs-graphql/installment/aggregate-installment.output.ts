import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { InstallmentCountAggregate } from './installment-count-aggregate.output';
import { InstallmentAvgAggregate } from './installment-avg-aggregate.output';
import { InstallmentSumAggregate } from './installment-sum-aggregate.output';
import { InstallmentMinAggregate } from './installment-min-aggregate.output';
import { InstallmentMaxAggregate } from './installment-max-aggregate.output';

@ObjectType()
export class AggregateInstallment {

    @Field(() => InstallmentCountAggregate, {nullable:true})
    _count?: InstallmentCountAggregate;

    @Field(() => InstallmentAvgAggregate, {nullable:true})
    _avg?: InstallmentAvgAggregate;

    @Field(() => InstallmentSumAggregate, {nullable:true})
    _sum?: InstallmentSumAggregate;

    @Field(() => InstallmentMinAggregate, {nullable:true})
    _min?: InstallmentMinAggregate;

    @Field(() => InstallmentMaxAggregate, {nullable:true})
    _max?: InstallmentMaxAggregate;
}

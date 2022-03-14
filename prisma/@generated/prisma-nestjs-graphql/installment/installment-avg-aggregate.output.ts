import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class InstallmentAvgAggregate {

    @Field(() => Float, {nullable:true})
    installmentCount?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    amountWithPenalty?: number;

    @Field(() => Float, {nullable:true})
    seviFees?: number;

    @Field(() => Float, {nullable:true})
    penalty?: number;

    @Field(() => Float, {nullable:true})
    affiliateFees?: number;
}

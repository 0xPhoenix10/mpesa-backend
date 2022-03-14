import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class WalletSumAggregate {

    @Field(() => Float, {nullable:true})
    balance?: number;
}

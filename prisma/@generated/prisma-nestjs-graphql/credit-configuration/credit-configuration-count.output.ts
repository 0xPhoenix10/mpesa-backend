import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditConfigurationCount {

    @Field(() => Int, {nullable:false})
    credit?: number;

    @Field(() => Int, {nullable:false})
    attachedWallets?: number;

    @Field(() => Int, {nullable:false})
    Installment?: number;
}

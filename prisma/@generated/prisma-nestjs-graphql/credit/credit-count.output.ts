import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditCount {

    @Field(() => Int, {nullable:false})
    installments?: number;
}

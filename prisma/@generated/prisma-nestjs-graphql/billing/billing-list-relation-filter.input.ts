import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';

@InputType()
export class BillingListRelationFilter {

    @Field(() => BillingWhereInput, {nullable:true})
    every?: BillingWhereInput;

    @Field(() => BillingWhereInput, {nullable:true})
    some?: BillingWhereInput;

    @Field(() => BillingWhereInput, {nullable:true})
    none?: BillingWhereInput;
}

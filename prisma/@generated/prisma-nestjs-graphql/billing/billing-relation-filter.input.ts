import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';

@InputType()
export class BillingRelationFilter {

    @Field(() => BillingWhereInput, {nullable:true})
    is?: BillingWhereInput;

    @Field(() => BillingWhereInput, {nullable:true})
    isNot?: BillingWhereInput;
}

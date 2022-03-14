import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingCreateWithoutOrderInput } from './billing-create-without-order.input';

@InputType()
export class BillingCreateOrConnectWithoutOrderInput {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;

    @Field(() => BillingCreateWithoutOrderInput, {nullable:false})
    create!: BillingCreateWithoutOrderInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCreateWithoutOrderInput } from './billing-create-without-order.input';
import { BillingCreateOrConnectWithoutOrderInput } from './billing-create-or-connect-without-order.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';

@InputType()
export class BillingCreateNestedOneWithoutOrderInput {

    @Field(() => BillingCreateWithoutOrderInput, {nullable:true})
    create?: BillingCreateWithoutOrderInput;

    @Field(() => BillingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: BillingCreateOrConnectWithoutOrderInput;

    @Field(() => BillingWhereUniqueInput, {nullable:true})
    connect?: BillingWhereUniqueInput;
}

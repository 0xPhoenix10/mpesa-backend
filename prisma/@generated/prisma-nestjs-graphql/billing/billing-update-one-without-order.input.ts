import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingCreateWithoutOrderInput } from './billing-create-without-order.input';
import { BillingCreateOrConnectWithoutOrderInput } from './billing-create-or-connect-without-order.input';
import { BillingUpsertWithoutOrderInput } from './billing-upsert-without-order.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingUpdateWithoutOrderInput } from './billing-update-without-order.input';

@InputType()
export class BillingUpdateOneWithoutOrderInput {

    @Field(() => BillingCreateWithoutOrderInput, {nullable:true})
    create?: BillingCreateWithoutOrderInput;

    @Field(() => BillingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: BillingCreateOrConnectWithoutOrderInput;

    @Field(() => BillingUpsertWithoutOrderInput, {nullable:true})
    upsert?: BillingUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BillingWhereUniqueInput, {nullable:true})
    connect?: BillingWhereUniqueInput;

    @Field(() => BillingUpdateWithoutOrderInput, {nullable:true})
    update?: BillingUpdateWithoutOrderInput;
}

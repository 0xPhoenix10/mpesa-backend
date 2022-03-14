import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBillingInput } from './order-create-without-billing.input';
import { OrderCreateOrConnectWithoutBillingInput } from './order-create-or-connect-without-billing.input';
import { OrderCreateManyBillingInputEnvelope } from './order-create-many-billing-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutBillingInput {

    @Field(() => [OrderCreateWithoutBillingInput], {nullable:true})
    create?: Array<OrderCreateWithoutBillingInput>;

    @Field(() => [OrderCreateOrConnectWithoutBillingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBillingInput>;

    @Field(() => OrderCreateManyBillingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyBillingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}

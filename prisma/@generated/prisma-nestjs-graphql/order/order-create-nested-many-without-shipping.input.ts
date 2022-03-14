import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShippingInput } from './order-create-without-shipping.input';
import { OrderCreateOrConnectWithoutShippingInput } from './order-create-or-connect-without-shipping.input';
import { OrderCreateManyShippingInputEnvelope } from './order-create-many-shipping-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutShippingInput {

    @Field(() => [OrderCreateWithoutShippingInput], {nullable:true})
    create?: Array<OrderCreateWithoutShippingInput>;

    @Field(() => [OrderCreateOrConnectWithoutShippingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShippingInput>;

    @Field(() => OrderCreateManyShippingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyShippingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}

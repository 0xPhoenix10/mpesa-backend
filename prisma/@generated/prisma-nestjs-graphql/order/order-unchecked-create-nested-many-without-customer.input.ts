import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';
import { OrderCreateOrConnectWithoutCustomerInput } from './order-create-or-connect-without-customer.input';
import { OrderCreateManyCustomerInputEnvelope } from './order-create-many-customer-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutCustomerInput {

    @Field(() => [OrderCreateWithoutCustomerInput], {nullable:true})
    create?: Array<OrderCreateWithoutCustomerInput>;

    @Field(() => [OrderCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutCustomerInput>;

    @Field(() => OrderCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyCustomerInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}

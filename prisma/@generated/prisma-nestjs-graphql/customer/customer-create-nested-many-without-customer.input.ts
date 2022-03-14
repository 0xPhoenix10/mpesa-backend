import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerInput } from './customer-create-without-customer.input';
import { CustomerCreateOrConnectWithoutCustomerInput } from './customer-create-or-connect-without-customer.input';
import { CustomerCreateManyCustomerInputEnvelope } from './customer-create-many-customer-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedManyWithoutCustomerInput {

    @Field(() => [CustomerCreateWithoutCustomerInput], {nullable:true})
    create?: Array<CustomerCreateWithoutCustomerInput>;

    @Field(() => [CustomerCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutCustomerInput>;

    @Field(() => CustomerCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyCustomerInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;
}

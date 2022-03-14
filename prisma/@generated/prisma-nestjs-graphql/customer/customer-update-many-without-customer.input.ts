import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutCustomerInput } from './customer-create-without-customer.input';
import { CustomerCreateOrConnectWithoutCustomerInput } from './customer-create-or-connect-without-customer.input';
import { CustomerUpsertWithWhereUniqueWithoutCustomerInput } from './customer-upsert-with-where-unique-without-customer.input';
import { CustomerCreateManyCustomerInputEnvelope } from './customer-create-many-customer-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutCustomerInput } from './customer-update-with-where-unique-without-customer.input';
import { CustomerUpdateManyWithWhereWithoutCustomerInput } from './customer-update-many-with-where-without-customer.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUpdateManyWithoutCustomerInput {

    @Field(() => [CustomerCreateWithoutCustomerInput], {nullable:true})
    create?: Array<CustomerCreateWithoutCustomerInput>;

    @Field(() => [CustomerCreateOrConnectWithoutCustomerInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutCustomerInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => CustomerCreateManyCustomerInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyCustomerInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    set?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    delete?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    update?: Array<CustomerUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomerScalarWhereInput>;
}

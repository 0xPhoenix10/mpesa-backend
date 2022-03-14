import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutCustomerInput } from './customer-create-without-customer.input';

@InputType()
export class CustomerCreateOrConnectWithoutCustomerInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerInput;
}

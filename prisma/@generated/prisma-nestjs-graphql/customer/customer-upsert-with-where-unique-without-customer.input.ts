import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutCustomerInput } from './customer-update-without-customer.input';
import { CustomerCreateWithoutCustomerInput } from './customer-create-without-customer.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutCustomerInput, {nullable:false})
    update!: CustomerUpdateWithoutCustomerInput;

    @Field(() => CustomerCreateWithoutCustomerInput, {nullable:false})
    create!: CustomerCreateWithoutCustomerInput;
}

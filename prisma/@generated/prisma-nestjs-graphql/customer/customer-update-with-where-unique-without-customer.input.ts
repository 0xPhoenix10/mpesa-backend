import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutCustomerInput } from './customer-update-without-customer.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutCustomerInput, {nullable:false})
    data!: CustomerUpdateWithoutCustomerInput;
}

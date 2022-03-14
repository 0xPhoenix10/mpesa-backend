import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';
import { CustomerUncheckedUpdateManyWithoutCustomerInput } from './customer-unchecked-update-many-without-customer.input';

@InputType()
export class CustomerUpdateManyWithWhereWithoutCustomerInput {

    @Field(() => CustomerScalarWhereInput, {nullable:false})
    where!: CustomerScalarWhereInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutCustomerInput, {nullable:false})
    data!: CustomerUncheckedUpdateManyWithoutCustomerInput;
}

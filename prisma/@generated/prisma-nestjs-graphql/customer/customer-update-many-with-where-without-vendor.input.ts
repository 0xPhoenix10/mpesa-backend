import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';
import { CustomerUncheckedUpdateManyWithoutVendorInput } from './customer-unchecked-update-many-without-vendor.input';

@InputType()
export class CustomerUpdateManyWithWhereWithoutVendorInput {

    @Field(() => CustomerScalarWhereInput, {nullable:false})
    where!: CustomerScalarWhereInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutVendorInput, {nullable:false})
    data!: CustomerUncheckedUpdateManyWithoutVendorInput;
}

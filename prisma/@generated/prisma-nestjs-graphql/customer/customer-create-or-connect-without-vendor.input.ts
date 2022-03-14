import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateWithoutVendorInput } from './customer-create-without-vendor.input';

@InputType()
export class CustomerCreateOrConnectWithoutVendorInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateWithoutVendorInput, {nullable:false})
    create!: CustomerCreateWithoutVendorInput;
}

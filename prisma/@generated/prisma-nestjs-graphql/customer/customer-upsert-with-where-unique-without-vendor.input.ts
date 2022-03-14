import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutVendorInput } from './customer-update-without-vendor.input';
import { CustomerCreateWithoutVendorInput } from './customer-create-without-vendor.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutVendorInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutVendorInput, {nullable:false})
    update!: CustomerUpdateWithoutVendorInput;

    @Field(() => CustomerCreateWithoutVendorInput, {nullable:false})
    create!: CustomerCreateWithoutVendorInput;
}

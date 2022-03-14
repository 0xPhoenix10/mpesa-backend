import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithoutVendorInput } from './customer-update-without-vendor.input';

@InputType()
export class CustomerUpdateWithWhereUniqueWithoutVendorInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerUpdateWithoutVendorInput, {nullable:false})
    data!: CustomerUpdateWithoutVendorInput;
}

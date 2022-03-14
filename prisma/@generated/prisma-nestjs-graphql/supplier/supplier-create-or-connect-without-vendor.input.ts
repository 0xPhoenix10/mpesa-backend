import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierCreateWithoutVendorInput } from './supplier-create-without-vendor.input';

@InputType()
export class SupplierCreateOrConnectWithoutVendorInput {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierCreateWithoutVendorInput, {nullable:false})
    create!: SupplierCreateWithoutVendorInput;
}

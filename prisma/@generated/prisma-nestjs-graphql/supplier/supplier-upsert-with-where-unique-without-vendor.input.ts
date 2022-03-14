import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierUpdateWithoutVendorInput } from './supplier-update-without-vendor.input';
import { SupplierCreateWithoutVendorInput } from './supplier-create-without-vendor.input';

@InputType()
export class SupplierUpsertWithWhereUniqueWithoutVendorInput {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierUpdateWithoutVendorInput, {nullable:false})
    update!: SupplierUpdateWithoutVendorInput;

    @Field(() => SupplierCreateWithoutVendorInput, {nullable:false})
    create!: SupplierCreateWithoutVendorInput;
}

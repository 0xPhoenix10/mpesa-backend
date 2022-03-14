import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierScalarWhereInput } from './supplier-scalar-where.input';
import { SupplierUncheckedUpdateManyWithoutVendorSupplierInput } from './supplier-unchecked-update-many-without-vendor-supplier.input';

@InputType()
export class SupplierUpdateManyWithWhereWithoutVendorInput {

    @Field(() => SupplierScalarWhereInput, {nullable:false})
    where!: SupplierScalarWhereInput;

    @Field(() => SupplierUncheckedUpdateManyWithoutVendorSupplierInput, {nullable:false})
    data!: SupplierUncheckedUpdateManyWithoutVendorSupplierInput;
}

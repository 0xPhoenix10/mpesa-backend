import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierScalarWhereInput } from './supplier-scalar-where.input';
import { SupplierUncheckedUpdateManyWithoutSupplierInput } from './supplier-unchecked-update-many-without-supplier.input';

@InputType()
export class SupplierUpdateManyWithWhereWithoutSupplierInput {

    @Field(() => SupplierScalarWhereInput, {nullable:false})
    where!: SupplierScalarWhereInput;

    @Field(() => SupplierUncheckedUpdateManyWithoutSupplierInput, {nullable:false})
    data!: SupplierUncheckedUpdateManyWithoutSupplierInput;
}

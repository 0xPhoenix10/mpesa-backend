import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierUpdateWithoutSupplierInput } from './supplier-update-without-supplier.input';

@InputType()
export class SupplierUpdateWithWhereUniqueWithoutSupplierInput {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierUpdateWithoutSupplierInput, {nullable:false})
    data!: SupplierUpdateWithoutSupplierInput;
}

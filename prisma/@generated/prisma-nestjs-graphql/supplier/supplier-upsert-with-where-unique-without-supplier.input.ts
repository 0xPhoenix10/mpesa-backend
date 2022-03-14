import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierUpdateWithoutSupplierInput } from './supplier-update-without-supplier.input';
import { SupplierCreateWithoutSupplierInput } from './supplier-create-without-supplier.input';

@InputType()
export class SupplierUpsertWithWhereUniqueWithoutSupplierInput {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierUpdateWithoutSupplierInput, {nullable:false})
    update!: SupplierUpdateWithoutSupplierInput;

    @Field(() => SupplierCreateWithoutSupplierInput, {nullable:false})
    create!: SupplierCreateWithoutSupplierInput;
}

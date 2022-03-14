import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierCreateWithoutSupplierInput } from './supplier-create-without-supplier.input';

@InputType()
export class SupplierCreateOrConnectWithoutSupplierInput {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierCreateWithoutSupplierInput, {nullable:false})
    create!: SupplierCreateWithoutSupplierInput;
}

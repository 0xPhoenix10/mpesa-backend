import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierWhereInput } from './supplier-where.input';

@InputType()
export class SupplierListRelationFilter {

    @Field(() => SupplierWhereInput, {nullable:true})
    every?: SupplierWhereInput;

    @Field(() => SupplierWhereInput, {nullable:true})
    some?: SupplierWhereInput;

    @Field(() => SupplierWhereInput, {nullable:true})
    none?: SupplierWhereInput;
}

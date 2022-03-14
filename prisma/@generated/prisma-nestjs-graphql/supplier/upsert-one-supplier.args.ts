import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierCreateInput } from './supplier-create.input';
import { SupplierUpdateInput } from './supplier-update.input';

@ArgsType()
export class UpsertOneSupplierArgs {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;

    @Field(() => SupplierCreateInput, {nullable:false})
    create!: SupplierCreateInput;

    @Field(() => SupplierUpdateInput, {nullable:false})
    update!: SupplierUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierUpdateInput } from './supplier-update.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';

@ArgsType()
export class UpdateOneSupplierArgs {

    @Field(() => SupplierUpdateInput, {nullable:false})
    data!: SupplierUpdateInput;

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;
}

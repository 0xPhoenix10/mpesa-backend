import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierUncheckedUpdateManyInput } from './supplier-unchecked-update-many.input';
import { SupplierWhereInput } from './supplier-where.input';

@ArgsType()
export class UpdateManySupplierArgs {

    @Field(() => SupplierUncheckedUpdateManyInput, {nullable:false})
    data!: SupplierUncheckedUpdateManyInput;

    @Field(() => SupplierWhereInput, {nullable:true})
    where?: SupplierWhereInput;
}

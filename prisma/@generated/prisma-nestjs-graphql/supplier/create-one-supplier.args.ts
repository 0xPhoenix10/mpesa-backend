import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierCreateInput } from './supplier-create.input';

@ArgsType()
export class CreateOneSupplierArgs {

    @Field(() => SupplierCreateInput, {nullable:false})
    data!: SupplierCreateInput;
}

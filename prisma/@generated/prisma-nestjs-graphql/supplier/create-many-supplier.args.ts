import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierCreateManyInput } from './supplier-create-many.input';

@ArgsType()
export class CreateManySupplierArgs {

    @Field(() => [SupplierCreateManyInput], {nullable:false})
    data!: Array<SupplierCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

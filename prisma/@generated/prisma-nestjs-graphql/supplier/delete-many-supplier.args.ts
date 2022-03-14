import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereInput } from './supplier-where.input';

@ArgsType()
export class DeleteManySupplierArgs {

    @Field(() => SupplierWhereInput, {nullable:true})
    where?: SupplierWhereInput;
}

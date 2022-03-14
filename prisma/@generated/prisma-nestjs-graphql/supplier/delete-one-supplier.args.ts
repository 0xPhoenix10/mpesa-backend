import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';

@ArgsType()
export class DeleteOneSupplierArgs {

    @Field(() => SupplierWhereUniqueInput, {nullable:false})
    where!: SupplierWhereUniqueInput;
}

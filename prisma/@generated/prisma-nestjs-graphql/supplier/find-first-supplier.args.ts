import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereInput } from './supplier-where.input';
import { SupplierOrderByWithRelationInput } from './supplier-order-by-with-relation.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SupplierScalarFieldEnum } from './supplier-scalar-field.enum';

@ArgsType()
export class FindFirstSupplierArgs {

    @Field(() => SupplierWhereInput, {nullable:true})
    where?: SupplierWhereInput;

    @Field(() => [SupplierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupplierOrderByWithRelationInput>;

    @Field(() => SupplierWhereUniqueInput, {nullable:true})
    cursor?: SupplierWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SupplierScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SupplierScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SupplierScalarWhereWithAggregatesInput {

    @Field(() => [SupplierScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SupplierScalarWhereWithAggregatesInput>;

    @Field(() => [SupplierScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SupplierScalarWhereWithAggregatesInput>;

    @Field(() => [SupplierScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SupplierScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    supplierId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    vendorId?: StringWithAggregatesFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SupplierScalarWhereInput {

    @Field(() => [SupplierScalarWhereInput], {nullable:true})
    AND?: Array<SupplierScalarWhereInput>;

    @Field(() => [SupplierScalarWhereInput], {nullable:true})
    OR?: Array<SupplierScalarWhereInput>;

    @Field(() => [SupplierScalarWhereInput], {nullable:true})
    NOT?: Array<SupplierScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    supplierId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vendorId?: StringFilter;
}

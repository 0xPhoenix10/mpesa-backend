import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class SupplierWhereInput {

    @Field(() => [SupplierWhereInput], {nullable:true})
    AND?: Array<SupplierWhereInput>;

    @Field(() => [SupplierWhereInput], {nullable:true})
    OR?: Array<SupplierWhereInput>;

    @Field(() => [SupplierWhereInput], {nullable:true})
    NOT?: Array<SupplierWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    supplierId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vendorId?: StringFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    supplier?: WalletRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    vendor?: WalletRelationFilter;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class CustomerWhereInput {

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    customerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vendorId?: StringFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    customer?: WalletRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    vendor?: WalletRelationFilter;
}

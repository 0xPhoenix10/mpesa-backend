import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';

@InputType()
export class SupplierOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    supplierId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vendorId?: keyof typeof SortOrder;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    supplier?: WalletOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    vendor?: WalletOrderByWithRelationInput;
}

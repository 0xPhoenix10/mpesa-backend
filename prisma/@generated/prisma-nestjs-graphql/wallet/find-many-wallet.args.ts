import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';
import { WalletOrderByWithRelationInput } from './wallet-order-by-with-relation.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WalletScalarFieldEnum } from './wallet-scalar-field.enum';

@ArgsType()
export class FindManyWalletArgs {

    @Field(() => WalletWhereInput, {nullable:true})
    where?: WalletWhereInput;

    @Field(() => [WalletOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WalletOrderByWithRelationInput>;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    cursor?: WalletWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WalletScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WalletScalarFieldEnum>;
}

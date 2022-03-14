import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';

@InputType()
export class WalletListRelationFilter {

    @Field(() => WalletWhereInput, {nullable:true})
    every?: WalletWhereInput;

    @Field(() => WalletWhereInput, {nullable:true})
    some?: WalletWhereInput;

    @Field(() => WalletWhereInput, {nullable:true})
    none?: WalletWhereInput;
}

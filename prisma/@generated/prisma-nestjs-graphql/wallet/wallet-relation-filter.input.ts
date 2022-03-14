import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';

@InputType()
export class WalletRelationFilter {

    @Field(() => WalletWhereInput, {nullable:true})
    is?: WalletWhereInput;

    @Field(() => WalletWhereInput, {nullable:true})
    isNot?: WalletWhereInput;
}

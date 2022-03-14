import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';

@ArgsType()
export class DeleteManyWalletArgs {

    @Field(() => WalletWhereInput, {nullable:true})
    where?: WalletWhereInput;
}

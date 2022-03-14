import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletUpdateInput } from './wallet-update.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@ArgsType()
export class UpdateOneWalletArgs {

    @Field(() => WalletUpdateInput, {nullable:false})
    data!: WalletUpdateInput;

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;
}

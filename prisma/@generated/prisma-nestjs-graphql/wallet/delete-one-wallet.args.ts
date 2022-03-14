import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@ArgsType()
export class DeleteOneWalletArgs {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateInput } from './wallet-create.input';
import { WalletUpdateInput } from './wallet-update.input';

@ArgsType()
export class UpsertOneWalletArgs {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateInput, {nullable:false})
    create!: WalletCreateInput;

    @Field(() => WalletUpdateInput, {nullable:false})
    update!: WalletUpdateInput;
}

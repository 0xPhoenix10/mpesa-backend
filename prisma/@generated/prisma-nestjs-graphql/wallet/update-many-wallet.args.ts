import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletUpdateManyMutationInput } from './wallet-update-many-mutation.input';
import { WalletWhereInput } from './wallet-where.input';

@ArgsType()
export class UpdateManyWalletArgs {

    @Field(() => WalletUpdateManyMutationInput, {nullable:false})
    data!: WalletUpdateManyMutationInput;

    @Field(() => WalletWhereInput, {nullable:true})
    where?: WalletWhereInput;
}

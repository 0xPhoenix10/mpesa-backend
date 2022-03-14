import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletCreateInput } from './wallet-create.input';

@ArgsType()
export class CreateOneWalletArgs {

    @Field(() => WalletCreateInput, {nullable:false})
    data!: WalletCreateInput;
}

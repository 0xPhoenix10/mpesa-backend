import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletCreateManyInput } from './wallet-create-many.input';

@ArgsType()
export class CreateManyWalletArgs {

    @Field(() => [WalletCreateManyInput], {nullable:false})
    data!: Array<WalletCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

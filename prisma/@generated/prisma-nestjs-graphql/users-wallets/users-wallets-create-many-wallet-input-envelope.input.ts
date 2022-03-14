import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateManyWalletInput } from './users-wallets-create-many-wallet.input';

@InputType()
export class UsersWalletsCreateManyWalletInputEnvelope {

    @Field(() => [UsersWalletsCreateManyWalletInput], {nullable:false})
    data!: Array<UsersWalletsCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

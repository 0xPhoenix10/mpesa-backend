import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutUsersInput } from './wallet-create-without-users.input';

@InputType()
export class WalletCreateOrConnectWithoutUsersInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutUsersInput, {nullable:false})
    create!: WalletCreateWithoutUsersInput;
}

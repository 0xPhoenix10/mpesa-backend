import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutUsersInput } from './wallet-update-without-users.input';

@InputType()
export class WalletUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutUsersInput, {nullable:false})
    data!: WalletUpdateWithoutUsersInput;
}

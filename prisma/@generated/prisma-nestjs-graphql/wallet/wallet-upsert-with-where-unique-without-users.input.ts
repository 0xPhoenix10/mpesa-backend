import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutUsersInput } from './wallet-update-without-users.input';
import { WalletCreateWithoutUsersInput } from './wallet-create-without-users.input';

@InputType()
export class WalletUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutUsersInput, {nullable:false})
    update!: WalletUpdateWithoutUsersInput;

    @Field(() => WalletCreateWithoutUsersInput, {nullable:false})
    create!: WalletCreateWithoutUsersInput;
}

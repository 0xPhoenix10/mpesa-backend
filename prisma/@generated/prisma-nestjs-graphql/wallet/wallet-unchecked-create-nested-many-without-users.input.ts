import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUsersInput } from './wallet-create-without-users.input';
import { WalletCreateOrConnectWithoutUsersInput } from './wallet-create-or-connect-without-users.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [WalletCreateWithoutUsersInput], {nullable:true})
    create?: Array<WalletCreateWithoutUsersInput>;

    @Field(() => [WalletCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<WalletCreateOrConnectWithoutUsersInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    connect?: Array<WalletWhereUniqueInput>;
}

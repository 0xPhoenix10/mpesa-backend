import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateWithoutWalletInput } from './users-wallets-create-without-wallet.input';
import { UsersWalletsCreateOrConnectWithoutWalletInput } from './users-wallets-create-or-connect-without-wallet.input';
import { UsersWalletsUpsertWithWhereUniqueWithoutWalletInput } from './users-wallets-upsert-with-where-unique-without-wallet.input';
import { UsersWalletsCreateManyWalletInputEnvelope } from './users-wallets-create-many-wallet-input-envelope.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithWhereUniqueWithoutWalletInput } from './users-wallets-update-with-where-unique-without-wallet.input';
import { UsersWalletsUpdateManyWithWhereWithoutWalletInput } from './users-wallets-update-many-with-where-without-wallet.input';
import { UsersWalletsScalarWhereInput } from './users-wallets-scalar-where.input';

@InputType()
export class UsersWalletsUncheckedUpdateManyWithoutWalletInput {

    @Field(() => [UsersWalletsCreateWithoutWalletInput], {nullable:true})
    create?: Array<UsersWalletsCreateWithoutWalletInput>;

    @Field(() => [UsersWalletsCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<UsersWalletsCreateOrConnectWithoutWalletInput>;

    @Field(() => [UsersWalletsUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<UsersWalletsUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => UsersWalletsCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: UsersWalletsCreateManyWalletInputEnvelope;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    set?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    delete?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<UsersWalletsUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [UsersWalletsUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<UsersWalletsUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [UsersWalletsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UsersWalletsScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateWithoutUserInput } from './users-wallets-create-without-user.input';
import { UsersWalletsCreateOrConnectWithoutUserInput } from './users-wallets-create-or-connect-without-user.input';
import { UsersWalletsUpsertWithWhereUniqueWithoutUserInput } from './users-wallets-upsert-with-where-unique-without-user.input';
import { UsersWalletsCreateManyUserInputEnvelope } from './users-wallets-create-many-user-input-envelope.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithWhereUniqueWithoutUserInput } from './users-wallets-update-with-where-unique-without-user.input';
import { UsersWalletsUpdateManyWithWhereWithoutUserInput } from './users-wallets-update-many-with-where-without-user.input';
import { UsersWalletsScalarWhereInput } from './users-wallets-scalar-where.input';

@InputType()
export class UsersWalletsUncheckedUpdateManyWithoutUserInput {

    @Field(() => [UsersWalletsCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersWalletsCreateWithoutUserInput>;

    @Field(() => [UsersWalletsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersWalletsCreateOrConnectWithoutUserInput>;

    @Field(() => [UsersWalletsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UsersWalletsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UsersWalletsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersWalletsCreateManyUserInputEnvelope;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    set?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    delete?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersWalletsWhereUniqueInput>;

    @Field(() => [UsersWalletsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UsersWalletsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UsersWalletsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UsersWalletsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UsersWalletsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UsersWalletsScalarWhereInput>;
}

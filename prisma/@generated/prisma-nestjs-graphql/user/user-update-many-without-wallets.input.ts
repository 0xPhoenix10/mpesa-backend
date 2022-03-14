import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWalletsInput } from './user-create-without-wallets.input';
import { UserCreateOrConnectWithoutWalletsInput } from './user-create-or-connect-without-wallets.input';
import { UserUpsertWithWhereUniqueWithoutWalletsInput } from './user-upsert-with-where-unique-without-wallets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutWalletsInput } from './user-update-with-where-unique-without-wallets.input';
import { UserUpdateManyWithWhereWithoutWalletsInput } from './user-update-many-with-where-without-wallets.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutWalletsInput {

    @Field(() => [UserCreateWithoutWalletsInput], {nullable:true})
    create?: Array<UserCreateWithoutWalletsInput>;

    @Field(() => [UserCreateOrConnectWithoutWalletsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutWalletsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutWalletsInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutWalletsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutWalletsInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutWalletsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutWalletsInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutWalletsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}

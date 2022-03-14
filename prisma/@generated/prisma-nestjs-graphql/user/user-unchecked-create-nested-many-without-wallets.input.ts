import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutWalletsInput } from './user-create-without-wallets.input';
import { UserCreateOrConnectWithoutWalletsInput } from './user-create-or-connect-without-wallets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutWalletsInput {

    @Field(() => [UserCreateWithoutWalletsInput], {nullable:true})
    create?: Array<UserCreateWithoutWalletsInput>;

    @Field(() => [UserCreateOrConnectWithoutWalletsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutWalletsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWalletsInput } from './user-update-without-wallets.input';
import { UserCreateWithoutWalletsInput } from './user-create-without-wallets.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutWalletsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWalletsInput, {nullable:false})
    update!: UserUpdateWithoutWalletsInput;

    @Field(() => UserCreateWithoutWalletsInput, {nullable:false})
    create!: UserCreateWithoutWalletsInput;
}

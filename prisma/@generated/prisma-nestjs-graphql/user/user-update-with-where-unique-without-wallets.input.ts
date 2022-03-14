import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutWalletsInput } from './user-update-without-wallets.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutWalletsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutWalletsInput, {nullable:false})
    data!: UserUpdateWithoutWalletsInput;
}

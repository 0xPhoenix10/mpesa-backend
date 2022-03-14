import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutWalletsInput } from './user-create-without-wallets.input';

@InputType()
export class UserCreateOrConnectWithoutWalletsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutWalletsInput, {nullable:false})
    create!: UserCreateWithoutWalletsInput;
}

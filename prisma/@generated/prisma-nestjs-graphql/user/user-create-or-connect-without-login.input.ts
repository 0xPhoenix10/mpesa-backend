import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLoginInput } from './user-create-without-login.input';

@InputType()
export class UserCreateOrConnectWithoutLoginInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLoginInput, {nullable:false})
    create!: UserCreateWithoutLoginInput;
}

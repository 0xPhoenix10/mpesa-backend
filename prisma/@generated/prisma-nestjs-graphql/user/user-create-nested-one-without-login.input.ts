import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginInput } from './user-create-without-login.input';
import { UserCreateOrConnectWithoutLoginInput } from './user-create-or-connect-without-login.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLoginInput {

    @Field(() => UserCreateWithoutLoginInput, {nullable:true})
    create?: UserCreateWithoutLoginInput;

    @Field(() => UserCreateOrConnectWithoutLoginInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}

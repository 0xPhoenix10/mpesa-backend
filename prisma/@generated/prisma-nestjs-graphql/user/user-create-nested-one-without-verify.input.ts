import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVerifyInput } from './user-create-without-verify.input';
import { UserCreateOrConnectWithoutVerifyInput } from './user-create-or-connect-without-verify.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVerifyInput {

    @Field(() => UserCreateWithoutVerifyInput, {nullable:true})
    create?: UserCreateWithoutVerifyInput;

    @Field(() => UserCreateOrConnectWithoutVerifyInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutVerifyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}

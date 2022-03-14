import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLoginInput } from './user-create-without-login.input';
import { UserCreateOrConnectWithoutLoginInput } from './user-create-or-connect-without-login.input';
import { UserUpsertWithoutLoginInput } from './user-upsert-without-login.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLoginInput } from './user-update-without-login.input';

@InputType()
export class UserUpdateOneWithoutLoginInput {

    @Field(() => UserCreateWithoutLoginInput, {nullable:true})
    create?: UserCreateWithoutLoginInput;

    @Field(() => UserCreateOrConnectWithoutLoginInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLoginInput;

    @Field(() => UserUpsertWithoutLoginInput, {nullable:true})
    upsert?: UserUpsertWithoutLoginInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLoginInput, {nullable:true})
    update?: UserUpdateWithoutLoginInput;
}

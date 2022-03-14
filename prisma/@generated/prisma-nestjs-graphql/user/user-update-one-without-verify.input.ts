import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVerifyInput } from './user-create-without-verify.input';
import { UserCreateOrConnectWithoutVerifyInput } from './user-create-or-connect-without-verify.input';
import { UserUpsertWithoutVerifyInput } from './user-upsert-without-verify.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutVerifyInput } from './user-update-without-verify.input';

@InputType()
export class UserUpdateOneWithoutVerifyInput {

    @Field(() => UserCreateWithoutVerifyInput, {nullable:true})
    create?: UserCreateWithoutVerifyInput;

    @Field(() => UserCreateOrConnectWithoutVerifyInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutVerifyInput;

    @Field(() => UserUpsertWithoutVerifyInput, {nullable:true})
    upsert?: UserUpsertWithoutVerifyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutVerifyInput, {nullable:true})
    update?: UserUpdateWithoutVerifyInput;
}

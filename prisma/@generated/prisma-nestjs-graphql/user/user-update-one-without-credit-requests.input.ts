import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditRequestsInput } from './user-create-without-credit-requests.input';
import { UserCreateOrConnectWithoutCreditRequestsInput } from './user-create-or-connect-without-credit-requests.input';
import { UserUpsertWithoutCreditRequestsInput } from './user-upsert-without-credit-requests.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCreditRequestsInput } from './user-update-without-credit-requests.input';

@InputType()
export class UserUpdateOneWithoutCreditRequestsInput {

    @Field(() => UserCreateWithoutCreditRequestsInput, {nullable:true})
    create?: UserCreateWithoutCreditRequestsInput;

    @Field(() => UserCreateOrConnectWithoutCreditRequestsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditRequestsInput;

    @Field(() => UserUpsertWithoutCreditRequestsInput, {nullable:true})
    upsert?: UserUpsertWithoutCreditRequestsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCreditRequestsInput, {nullable:true})
    update?: UserUpdateWithoutCreditRequestsInput;
}

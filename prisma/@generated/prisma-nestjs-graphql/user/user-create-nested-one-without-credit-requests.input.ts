import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreditRequestsInput } from './user-create-without-credit-requests.input';
import { UserCreateOrConnectWithoutCreditRequestsInput } from './user-create-or-connect-without-credit-requests.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCreditRequestsInput {

    @Field(() => UserCreateWithoutCreditRequestsInput, {nullable:true})
    create?: UserCreateWithoutCreditRequestsInput;

    @Field(() => UserCreateOrConnectWithoutCreditRequestsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutCreditRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}

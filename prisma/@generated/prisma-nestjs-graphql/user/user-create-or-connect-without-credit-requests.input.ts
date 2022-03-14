import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCreditRequestsInput } from './user-create-without-credit-requests.input';

@InputType()
export class UserCreateOrConnectWithoutCreditRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCreditRequestsInput, {nullable:false})
    create!: UserCreateWithoutCreditRequestsInput;
}

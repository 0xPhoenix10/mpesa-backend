import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreditRequestsInput } from './user-update-without-credit-requests.input';
import { UserCreateWithoutCreditRequestsInput } from './user-create-without-credit-requests.input';

@InputType()
export class UserUpsertWithoutCreditRequestsInput {

    @Field(() => UserUpdateWithoutCreditRequestsInput, {nullable:false})
    update!: UserUpdateWithoutCreditRequestsInput;

    @Field(() => UserCreateWithoutCreditRequestsInput, {nullable:false})
    create!: UserCreateWithoutCreditRequestsInput;
}

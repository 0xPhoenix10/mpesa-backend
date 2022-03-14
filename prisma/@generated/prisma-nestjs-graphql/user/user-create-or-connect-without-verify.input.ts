import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutVerifyInput } from './user-create-without-verify.input';

@InputType()
export class UserCreateOrConnectWithoutVerifyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutVerifyInput, {nullable:false})
    create!: UserCreateWithoutVerifyInput;
}

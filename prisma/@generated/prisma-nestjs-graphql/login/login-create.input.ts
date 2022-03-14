import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLoginInput } from '../user/user-create-nested-one-without-login.input';

@InputType()
export class LoginCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    qrKey?: string;

    @Field(() => String, {nullable:true})
    jwt?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLoginInput, {nullable:true})
    user?: UserCreateNestedOneWithoutLoginInput;
}

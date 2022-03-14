import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginCreateWithoutUserInput } from './login-create-without-user.input';
import { LoginCreateOrConnectWithoutUserInput } from './login-create-or-connect-without-user.input';
import { LoginCreateManyUserInputEnvelope } from './login-create-many-user-input-envelope.input';
import { LoginWhereUniqueInput } from './login-where-unique.input';

@InputType()
export class LoginUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [LoginCreateWithoutUserInput], {nullable:true})
    create?: Array<LoginCreateWithoutUserInput>;

    @Field(() => [LoginCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LoginCreateOrConnectWithoutUserInput>;

    @Field(() => LoginCreateManyUserInputEnvelope, {nullable:true})
    createMany?: LoginCreateManyUserInputEnvelope;

    @Field(() => [LoginWhereUniqueInput], {nullable:true})
    connect?: Array<LoginWhereUniqueInput>;
}

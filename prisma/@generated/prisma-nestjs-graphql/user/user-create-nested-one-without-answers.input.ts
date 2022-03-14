import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAnswersInput } from './user-create-without-answers.input';
import { UserCreateOrConnectWithoutAnswersInput } from './user-create-or-connect-without-answers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAnswersInput {

    @Field(() => UserCreateWithoutAnswersInput, {nullable:true})
    create?: UserCreateWithoutAnswersInput;

    @Field(() => UserCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}

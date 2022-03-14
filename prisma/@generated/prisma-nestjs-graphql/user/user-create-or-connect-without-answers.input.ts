import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAnswersInput } from './user-create-without-answers.input';

@InputType()
export class UserCreateOrConnectWithoutAnswersInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAnswersInput, {nullable:false})
    create!: UserCreateWithoutAnswersInput;
}

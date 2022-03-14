import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAnswersInput } from './user-update-without-answers.input';
import { UserCreateWithoutAnswersInput } from './user-create-without-answers.input';

@InputType()
export class UserUpsertWithoutAnswersInput {

    @Field(() => UserUpdateWithoutAnswersInput, {nullable:false})
    update!: UserUpdateWithoutAnswersInput;

    @Field(() => UserCreateWithoutAnswersInput, {nullable:false})
    create!: UserCreateWithoutAnswersInput;
}

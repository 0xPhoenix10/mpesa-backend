import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAnswersInput } from './user-create-without-answers.input';
import { UserCreateOrConnectWithoutAnswersInput } from './user-create-or-connect-without-answers.input';
import { UserUpsertWithoutAnswersInput } from './user-upsert-without-answers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAnswersInput } from './user-update-without-answers.input';

@InputType()
export class UserUpdateOneWithoutAnswersInput {

    @Field(() => UserCreateWithoutAnswersInput, {nullable:true})
    create?: UserCreateWithoutAnswersInput;

    @Field(() => UserCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAnswersInput;

    @Field(() => UserUpsertWithoutAnswersInput, {nullable:true})
    upsert?: UserUpsertWithoutAnswersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAnswersInput, {nullable:true})
    update?: UserUpdateWithoutAnswersInput;
}

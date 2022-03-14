import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { VerifyUpdateWithoutUserInput } from './verify-update-without-user.input';
import { VerifyCreateWithoutUserInput } from './verify-create-without-user.input';

@InputType()
export class VerifyUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;

    @Field(() => VerifyUpdateWithoutUserInput, {nullable:false})
    update!: VerifyUpdateWithoutUserInput;

    @Field(() => VerifyCreateWithoutUserInput, {nullable:false})
    create!: VerifyCreateWithoutUserInput;
}

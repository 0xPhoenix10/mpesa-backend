import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { VerifyUpdateWithoutUserInput } from './verify-update-without-user.input';

@InputType()
export class VerifyUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;

    @Field(() => VerifyUpdateWithoutUserInput, {nullable:false})
    data!: VerifyUpdateWithoutUserInput;
}

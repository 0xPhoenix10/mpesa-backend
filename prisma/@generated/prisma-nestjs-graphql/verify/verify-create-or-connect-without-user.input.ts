import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { VerifyCreateWithoutUserInput } from './verify-create-without-user.input';

@InputType()
export class VerifyCreateOrConnectWithoutUserInput {

    @Field(() => VerifyWhereUniqueInput, {nullable:false})
    where!: VerifyWhereUniqueInput;

    @Field(() => VerifyCreateWithoutUserInput, {nullable:false})
    create!: VerifyCreateWithoutUserInput;
}

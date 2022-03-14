import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutUserInput } from './credit-create-without-user.input';

@InputType()
export class CreditCreateOrConnectWithoutUserInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutUserInput, {nullable:false})
    create!: CreditCreateWithoutUserInput;
}

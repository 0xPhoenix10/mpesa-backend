import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutUserInput } from './credit-update-without-user.input';

@InputType()
export class CreditUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutUserInput, {nullable:false})
    data!: CreditUpdateWithoutUserInput;
}

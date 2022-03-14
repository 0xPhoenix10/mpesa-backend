import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutUserInput } from './credit-update-without-user.input';
import { CreditCreateWithoutUserInput } from './credit-create-without-user.input';

@InputType()
export class CreditUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutUserInput, {nullable:false})
    update!: CreditUpdateWithoutUserInput;

    @Field(() => CreditCreateWithoutUserInput, {nullable:false})
    create!: CreditCreateWithoutUserInput;
}

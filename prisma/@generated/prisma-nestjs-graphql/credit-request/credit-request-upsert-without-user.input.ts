import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestUpdateWithoutUserInput } from './credit-request-update-without-user.input';
import { CreditRequestCreateWithoutUserInput } from './credit-request-create-without-user.input';

@InputType()
export class CreditRequestUpsertWithoutUserInput {

    @Field(() => CreditRequestUpdateWithoutUserInput, {nullable:false})
    update!: CreditRequestUpdateWithoutUserInput;

    @Field(() => CreditRequestCreateWithoutUserInput, {nullable:false})
    create!: CreditRequestCreateWithoutUserInput;
}

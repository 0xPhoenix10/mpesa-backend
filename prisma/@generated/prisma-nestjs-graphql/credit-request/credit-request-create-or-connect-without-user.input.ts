import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestCreateWithoutUserInput } from './credit-request-create-without-user.input';

@InputType()
export class CreditRequestCreateOrConnectWithoutUserInput {

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestCreateWithoutUserInput, {nullable:false})
    create!: CreditRequestCreateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutUserInput } from './credit-request-create-without-user.input';
import { CreditRequestCreateOrConnectWithoutUserInput } from './credit-request-create-or-connect-without-user.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';

@InputType()
export class CreditRequestCreateNestedOneWithoutUserInput {

    @Field(() => CreditRequestCreateWithoutUserInput, {nullable:true})
    create?: CreditRequestCreateWithoutUserInput;

    @Field(() => CreditRequestCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutUserInput;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;
}

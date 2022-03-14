import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutUserInput } from './credit-request-create-without-user.input';
import { CreditRequestCreateOrConnectWithoutUserInput } from './credit-request-create-or-connect-without-user.input';
import { CreditRequestUpsertWithoutUserInput } from './credit-request-upsert-without-user.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestUpdateWithoutUserInput } from './credit-request-update-without-user.input';

@InputType()
export class CreditRequestUncheckedUpdateOneWithoutUserInput {

    @Field(() => CreditRequestCreateWithoutUserInput, {nullable:true})
    create?: CreditRequestCreateWithoutUserInput;

    @Field(() => CreditRequestCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutUserInput;

    @Field(() => CreditRequestUpsertWithoutUserInput, {nullable:true})
    upsert?: CreditRequestUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestUpdateWithoutUserInput, {nullable:true})
    update?: CreditRequestUpdateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutUserInput } from './credit-create-without-user.input';
import { CreditCreateOrConnectWithoutUserInput } from './credit-create-or-connect-without-user.input';
import { CreditCreateManyUserInputEnvelope } from './credit-create-many-user-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditCreateNestedManyWithoutUserInput {

    @Field(() => [CreditCreateWithoutUserInput], {nullable:true})
    create?: Array<CreditCreateWithoutUserInput>;

    @Field(() => [CreditCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutUserInput>;

    @Field(() => CreditCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyUserInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;
}

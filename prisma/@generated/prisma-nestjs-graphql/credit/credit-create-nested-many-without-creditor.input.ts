import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutCreditorInput } from './credit-create-without-creditor.input';
import { CreditCreateOrConnectWithoutCreditorInput } from './credit-create-or-connect-without-creditor.input';
import { CreditCreateManyCreditorInputEnvelope } from './credit-create-many-creditor-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditCreateNestedManyWithoutCreditorInput {

    @Field(() => [CreditCreateWithoutCreditorInput], {nullable:true})
    create?: Array<CreditCreateWithoutCreditorInput>;

    @Field(() => [CreditCreateOrConnectWithoutCreditorInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutCreditorInput>;

    @Field(() => CreditCreateManyCreditorInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyCreditorInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;
}

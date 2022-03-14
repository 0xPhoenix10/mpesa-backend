import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutDebtorInput } from './credit-create-without-debtor.input';
import { CreditCreateOrConnectWithoutDebtorInput } from './credit-create-or-connect-without-debtor.input';
import { CreditCreateManyDebtorInputEnvelope } from './credit-create-many-debtor-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditUncheckedCreateNestedManyWithoutDebtorInput {

    @Field(() => [CreditCreateWithoutDebtorInput], {nullable:true})
    create?: Array<CreditCreateWithoutDebtorInput>;

    @Field(() => [CreditCreateOrConnectWithoutDebtorInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutDebtorInput>;

    @Field(() => CreditCreateManyDebtorInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyDebtorInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;
}

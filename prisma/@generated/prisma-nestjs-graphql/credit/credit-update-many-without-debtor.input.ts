import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutDebtorInput } from './credit-create-without-debtor.input';
import { CreditCreateOrConnectWithoutDebtorInput } from './credit-create-or-connect-without-debtor.input';
import { CreditUpsertWithWhereUniqueWithoutDebtorInput } from './credit-upsert-with-where-unique-without-debtor.input';
import { CreditCreateManyDebtorInputEnvelope } from './credit-create-many-debtor-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithWhereUniqueWithoutDebtorInput } from './credit-update-with-where-unique-without-debtor.input';
import { CreditUpdateManyWithWhereWithoutDebtorInput } from './credit-update-many-with-where-without-debtor.input';
import { CreditScalarWhereInput } from './credit-scalar-where.input';

@InputType()
export class CreditUpdateManyWithoutDebtorInput {

    @Field(() => [CreditCreateWithoutDebtorInput], {nullable:true})
    create?: Array<CreditCreateWithoutDebtorInput>;

    @Field(() => [CreditCreateOrConnectWithoutDebtorInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutDebtorInput>;

    @Field(() => [CreditUpsertWithWhereUniqueWithoutDebtorInput], {nullable:true})
    upsert?: Array<CreditUpsertWithWhereUniqueWithoutDebtorInput>;

    @Field(() => CreditCreateManyDebtorInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyDebtorInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    set?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    delete?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditUpdateWithWhereUniqueWithoutDebtorInput], {nullable:true})
    update?: Array<CreditUpdateWithWhereUniqueWithoutDebtorInput>;

    @Field(() => [CreditUpdateManyWithWhereWithoutDebtorInput], {nullable:true})
    updateMany?: Array<CreditUpdateManyWithWhereWithoutDebtorInput>;

    @Field(() => [CreditScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutDebtorInput } from './installment-create-without-debtor.input';
import { InstallmentCreateOrConnectWithoutDebtorInput } from './installment-create-or-connect-without-debtor.input';
import { InstallmentUpsertWithWhereUniqueWithoutDebtorInput } from './installment-upsert-with-where-unique-without-debtor.input';
import { InstallmentCreateManyDebtorInputEnvelope } from './installment-create-many-debtor-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutDebtorInput } from './installment-update-with-where-unique-without-debtor.input';
import { InstallmentUpdateManyWithWhereWithoutDebtorInput } from './installment-update-many-with-where-without-debtor.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUncheckedUpdateManyWithoutDebtorInput {

    @Field(() => [InstallmentCreateWithoutDebtorInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutDebtorInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutDebtorInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutDebtorInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutDebtorInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutDebtorInput>;

    @Field(() => InstallmentCreateManyDebtorInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyDebtorInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutDebtorInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutDebtorInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutDebtorInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutDebtorInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutDebtorInput } from './installment-create-without-debtor.input';
import { InstallmentCreateOrConnectWithoutDebtorInput } from './installment-create-or-connect-without-debtor.input';
import { InstallmentCreateManyDebtorInputEnvelope } from './installment-create-many-debtor-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentUncheckedCreateNestedManyWithoutDebtorInput {

    @Field(() => [InstallmentCreateWithoutDebtorInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutDebtorInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutDebtorInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutDebtorInput>;

    @Field(() => InstallmentCreateManyDebtorInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyDebtorInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}

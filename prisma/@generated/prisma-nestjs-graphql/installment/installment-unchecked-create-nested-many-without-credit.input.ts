import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditInput } from './installment-create-without-credit.input';
import { InstallmentCreateOrConnectWithoutCreditInput } from './installment-create-or-connect-without-credit.input';
import { InstallmentCreateManyCreditInputEnvelope } from './installment-create-many-credit-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentUncheckedCreateNestedManyWithoutCreditInput {

    @Field(() => [InstallmentCreateWithoutCreditInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditInput>;

    @Field(() => InstallmentCreateManyCreditInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}

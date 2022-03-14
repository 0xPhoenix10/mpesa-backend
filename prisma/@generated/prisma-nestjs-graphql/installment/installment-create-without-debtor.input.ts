import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from '../prisma/installment-status-type.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { CreditConfigurationCreateNestedOneWithoutInstallmentInput } from '../credit-configuration/credit-configuration-create-nested-one-without-installment.input';
import { CreditCreateNestedOneWithoutInstallmentsInput } from '../credit/credit-create-nested-one-without-installments.input';
import { WalletCreateNestedOneWithoutCreditorInstallmentsInput } from '../wallet/wallet-create-nested-one-without-creditor-installments.input';
import { OrderCreateNestedOneWithoutInstallmentsInput } from '../order/order-create-nested-one-without-installments.input';
import { UserCreateNestedOneWithoutInstallmentInput } from '../user/user-create-nested-one-without-installment.input';

@InputType()
export class InstallmentCreateWithoutDebtorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    installmentCount?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    referenceNumber?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    status?: keyof typeof installmentStatusTypeEnum;

    @Field(() => Date, {nullable:true})
    firstTryFailedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Float, {nullable:false})
    amountWithPenalty!: number;

    @Field(() => Float, {nullable:false})
    seviFees!: number;

    @Field(() => Float, {nullable:true})
    penalty?: number;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => Float, {nullable:false})
    affiliateFees!: number;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => CreditConfigurationCreateNestedOneWithoutInstallmentInput, {nullable:false})
    creditConfiguration!: CreditConfigurationCreateNestedOneWithoutInstallmentInput;

    @Field(() => CreditCreateNestedOneWithoutInstallmentsInput, {nullable:true})
    credit?: CreditCreateNestedOneWithoutInstallmentsInput;

    @Field(() => WalletCreateNestedOneWithoutCreditorInstallmentsInput, {nullable:true})
    creditor?: WalletCreateNestedOneWithoutCreditorInstallmentsInput;

    @Field(() => OrderCreateNestedOneWithoutInstallmentsInput, {nullable:true})
    order?: OrderCreateNestedOneWithoutInstallmentsInput;

    @Field(() => UserCreateNestedOneWithoutInstallmentInput, {nullable:true})
    user?: UserCreateNestedOneWithoutInstallmentInput;
}

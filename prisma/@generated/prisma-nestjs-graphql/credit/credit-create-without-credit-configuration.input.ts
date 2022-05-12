import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { creditRefType } from '../prisma/credit-ref-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { creditStatusEnum } from '../prisma/credit-status.enum';
import { SlicesEnum } from '../prisma/slices.enum';
import { UserCreateNestedOneWithoutCreditsAffilateInput } from '../user/user-create-nested-one-without-credits-affilate.input';
import { WalletCreateNestedOneWithoutCreditorCreditInput } from '../wallet/wallet-create-nested-one-without-creditor-credit.input';
import { WalletCreateNestedOneWithoutDebtorCreditInput } from '../wallet/wallet-create-nested-one-without-debtor-credit.input';
import { OrderCreateNestedOneWithoutCreditInput } from '../order/order-create-nested-one-without-credit.input';
import { UserCreateNestedOneWithoutCreditsInput } from '../user/user-create-nested-one-without-credits.input';
import { InstallmentCreateNestedManyWithoutCreditInput } from '../installment/installment-create-nested-many-without-credit.input';

@InputType()
export class CreditCreateWithoutCreditConfigurationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    typeId?: string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => creditRefType, {nullable:true})
    type?: keyof typeof creditRefType;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Int, {nullable:true})
    installmentsCount?: number;

    @Field(() => Int, {nullable:true})
    installmentsCountPaid?: number;

    @Field(() => creditStatusEnum, {nullable:true})
    status?: keyof typeof creditStatusEnum;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Float, {nullable:true})
    totalPaid?: number;

    @Field(() => Float, {nullable:true})
    totalToPay?: number;

    @Field(() => Date, {nullable:true})
    agreedDate?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    referenceNumber!: string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => SlicesEnum, {nullable:false})
    durationSlices!: keyof typeof SlicesEnum;

    @Field(() => Date, {nullable:true})
    defaultAt?: Date | string;

    @Field(() => Float, {nullable:true})
    fundUpfrontAmount?: number;

    @Field(() => String, {nullable:true})
    orderWalletId?: string;

    @Field(() => Float, {nullable:true})
    fundFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    amountWithFees?: number;

    @Field(() => Float, {nullable:true})
    payNowAmount?: number;

    @Field(() => Float, {nullable:true})
    seviFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    orderWalletShareFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    fundPostDeliveryAmount?: number;

    @Field(() => UserCreateNestedOneWithoutCreditsAffilateInput, {nullable:true})
    affiliate?: UserCreateNestedOneWithoutCreditsAffilateInput;

    @Field(() => WalletCreateNestedOneWithoutCreditorCreditInput, {nullable:true})
    creditor?: WalletCreateNestedOneWithoutCreditorCreditInput;

    @Field(() => WalletCreateNestedOneWithoutDebtorCreditInput, {nullable:true})
    debtor?: WalletCreateNestedOneWithoutDebtorCreditInput;

    @Field(() => OrderCreateNestedOneWithoutCreditInput, {nullable:true})
    order?: OrderCreateNestedOneWithoutCreditInput;

    @Field(() => UserCreateNestedOneWithoutCreditsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutCreditsInput;

    @Field(() => InstallmentCreateNestedManyWithoutCreditInput, {nullable:true})
    installments?: InstallmentCreateNestedManyWithoutCreditInput;

    @Field(() => Float, {nullable:true})
    payLaterAmount?: number;
}

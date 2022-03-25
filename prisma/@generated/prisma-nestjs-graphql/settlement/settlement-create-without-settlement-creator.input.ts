import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';
import { WalletCreateNestedOneWithoutSettlementInput } from '../wallet/wallet-create-nested-one-without-settlement.input';
import { UserCreateNestedOneWithoutSettlementInput } from '../user/user-create-nested-one-without-settlement.input';
import { WalletCreateNestedManyWithoutSettlementDefaultInput } from '../wallet/wallet-create-nested-many-without-settlement-default.input';

@InputType()
export class SettlementCreateWithoutSettlementCreatorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionMethodEnum, {nullable:false})
    type!: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:true})
    bankAccount?: string;

    @Field(() => String, {nullable:true})
    bankAccountName?: string;

    @Field(() => String, {nullable:true})
    bankBranch?: string;

    @Field(() => String, {nullable:true})
    bankName?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    tillNumber?: string;

    @Field(() => String, {nullable:true})
    paybillNumber?: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    createdByAgent!: boolean;

    @Field(() => WalletCreateNestedOneWithoutSettlementInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutSettlementInput;

    @Field(() => UserCreateNestedOneWithoutSettlementInput, {nullable:true})
    settlementVerifier?: UserCreateNestedOneWithoutSettlementInput;

    @Field(() => WalletCreateNestedManyWithoutSettlementDefaultInput, {nullable:true})
    Wallet?: WalletCreateNestedManyWithoutSettlementDefaultInput;
}

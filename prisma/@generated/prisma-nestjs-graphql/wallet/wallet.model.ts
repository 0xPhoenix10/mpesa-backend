import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { Settlement } from '../settlement/settlement.model';
import { Answer } from '../answer/answer.model';
import { Badge } from '../badge/badge.model';
import { Billing } from '../billing/billing.model';
import { Credit } from '../credit/credit.model';
import { CreditConfiguration } from '../credit-configuration/credit-configuration.model';
import { Customer } from '../customer/customer.model';
import { Installment } from '../installment/installment.model';
import { MetaData } from '../meta-data/meta-data.model';
import { Order } from '../order/order.model';
import { Product } from '../product/product.model';
import { Settings } from '../settings/settings.model';
import { Shipping } from '../shipping/shipping.model';
import { Supplier } from '../supplier/supplier.model';
import { Transaction } from '../transaction/transaction.model';
import { UsersWallets } from '../users-wallets/users-wallets.model';
import { Visit } from '../visit/visit.model';
import { User } from '../user/user.model';
import { Trust } from '../trust/trust.model';
import { WalletCount } from './wallet-count.output';

@ObjectType()
export class Wallet {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => WalletTypesEnum, {nullable:false})
    type!: keyof typeof WalletTypesEnum;

    @Field(() => Float, {nullable:false,defaultValue:0})
    balance!: number;

    @Field(() => ID, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => CurrencyEnum, {nullable:true})
    currency!: keyof typeof CurrencyEnum | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    settlementAutomatic!: boolean | null;

    @Field(() => String, {nullable:true})
    settlementDefaultId!: string | null;

    @Field(() => Date, {nullable:true})
    verificationStartedAt!: Date | null;

    @Field(() => String, {nullable:true})
    shippingId!: string | null;

    @Field(() => String, {nullable:true})
    picture!: string | null;

    @Field(() => Settlement, {nullable:true})
    settlementDefault?: Settlement | null;

    @Field(() => [Answer], {nullable:true})
    answers?: Array<Answer>;

    @Field(() => [Badge], {nullable:true})
    badges?: Array<Badge>;

    @Field(() => [Billing], {nullable:true})
    billing?: Array<Billing>;

    @Field(() => [Credit], {nullable:true})
    creditorCredit?: Array<Credit>;

    @Field(() => [Credit], {nullable:true})
    debtorCredit?: Array<Credit>;

    @Field(() => [CreditConfiguration], {nullable:true})
    creditConfigurations?: Array<CreditConfiguration>;

    @Field(() => [Customer], {nullable:true})
    customer?: Array<Customer>;

    @Field(() => [Customer], {nullable:true})
    vendor?: Array<Customer>;

    @Field(() => [Installment], {nullable:true})
    creditorInstallments?: Array<Installment>;

    @Field(() => [Installment], {nullable:true})
    debtorInstallments?: Array<Installment>;

    @Field(() => MetaData, {nullable:true})
    metaData?: MetaData | null;

    @Field(() => [Order], {nullable:true})
    order?: Array<Order>;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;

    @Field(() => [Product], {nullable:true})
    product?: Array<Product>;

    @Field(() => Settings, {nullable:true})
    settings?: Settings | null;

    @Field(() => [Settlement], {nullable:true})
    settlement?: Array<Settlement>;

    @Field(() => [Shipping], {nullable:true})
    shipping?: Array<Shipping>;

    @Field(() => [Supplier], {nullable:true})
    supplier?: Array<Supplier>;

    @Field(() => [Supplier], {nullable:true})
    vendorSupplier?: Array<Supplier>;

    @Field(() => [Transaction], {nullable:true})
    transaction?: Array<Transaction>;

    @Field(() => [UsersWallets], {nullable:true})
    usersWallets?: Array<UsersWallets>;

    @Field(() => [Visit], {nullable:true})
    visit?: Array<Visit>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => Trust, {nullable:true})
    trust?: Trust | null;

    @Field(() => WalletCount, {nullable:false})
    _count?: WalletCount;
}

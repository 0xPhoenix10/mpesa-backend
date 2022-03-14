import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CreditConfiguration } from '../credit-configuration/credit-configuration.model';

@ObjectType()
export class CreditConfigurationsWallets {

    @Field(() => String, {nullable:false})
    configurationId!: string;

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => Float, {nullable:false})
    upfrontPercentage!: number;

    @Field(() => Float, {nullable:false})
    fundFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    maxOrderAmount!: number;

    @Field(() => Float, {nullable:false})
    maxOutstandingCredit!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    shareFeesPercentage!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    postDeliveryPercentage!: number;

    @Field(() => CreditConfiguration, {nullable:false})
    configuration?: CreditConfiguration;
}

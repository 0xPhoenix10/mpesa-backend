import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CreditConfigurationCreateNestedOneWithoutAttachedWalletsInput } from '../credit-configuration/credit-configuration-create-nested-one-without-attached-wallets.input';

@InputType()
export class CreditConfigurationsWalletsCreateInput {

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

    @Field(() => Float, {nullable:true})
    shareFeesPercentage?: number;

    @Field(() => Float, {nullable:true})
    postDeliveryPercentage?: number;

    @Field(() => CreditConfigurationCreateNestedOneWithoutAttachedWalletsInput, {nullable:false})
    configuration!: CreditConfigurationCreateNestedOneWithoutAttachedWalletsInput;
}

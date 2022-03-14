import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CreditConfigurationsWalletsUncheckedCreateWithoutConfigurationInput {

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
}

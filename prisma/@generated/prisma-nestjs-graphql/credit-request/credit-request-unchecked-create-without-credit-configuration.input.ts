import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';

@InputType()
export class CreditRequestUncheckedCreateWithoutCreditConfigurationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CreditRequestStatus, {nullable:true})
    status?: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date | string;
}

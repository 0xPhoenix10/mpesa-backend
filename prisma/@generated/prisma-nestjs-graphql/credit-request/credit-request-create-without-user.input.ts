import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { OrderCreateNestedOneWithoutCreditRequestInput } from '../order/order-create-nested-one-without-credit-request.input';
import { CreditConfigurationCreateNestedOneWithoutCreditRequestsInput } from '../credit-configuration/credit-configuration-create-nested-one-without-credit-requests.input';

@InputType()
export class CreditRequestCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CreditRequestStatus, {nullable:true})
    status?: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => OrderCreateNestedOneWithoutCreditRequestInput, {nullable:true})
    order?: OrderCreateNestedOneWithoutCreditRequestInput;

    @Field(() => CreditConfigurationCreateNestedOneWithoutCreditRequestsInput, {nullable:true})
    creditConfiguration?: CreditConfigurationCreateNestedOneWithoutCreditRequestsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date | string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';
import { UserCreateNestedOneWithoutCreditRequestsInput } from '../user/user-create-nested-one-without-credit-requests.input';
import { OrderCreateNestedOneWithoutCreditRequestInput } from '../order/order-create-nested-one-without-credit-request.input';

@InputType()
export class CreditRequestCreateWithoutCreditConfigurationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CreditRequestStatus, {nullable:true})
    status?: keyof typeof CreditRequestStatus;

    @Field(() => String, {nullable:false})
    wallet!: string;

    @Field(() => UserCreateNestedOneWithoutCreditRequestsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutCreditRequestsInput;

    @Field(() => OrderCreateNestedOneWithoutCreditRequestInput, {nullable:true})
    order?: OrderCreateNestedOneWithoutCreditRequestInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    proceedAt!: Date | string;
}

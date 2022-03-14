import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCreditRequestStatusFieldUpdateOperationsInput } from '../prisma/enum-credit-request-status-field-update-operations.input';
import { UserUpdateOneWithoutCreditRequestsInput } from '../user/user-update-one-without-credit-requests.input';
import { OrderUpdateOneWithoutCreditRequestInput } from '../order/order-update-one-without-credit-request.input';
import { CreditConfigurationUpdateOneWithoutCreditRequestsInput } from '../credit-configuration/credit-configuration-update-one-without-credit-requests.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CreditRequestUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCreditRequestStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCreditRequestStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    wallet?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutCreditRequestsInput, {nullable:true})
    user?: UserUpdateOneWithoutCreditRequestsInput;

    @Field(() => OrderUpdateOneWithoutCreditRequestInput, {nullable:true})
    order?: OrderUpdateOneWithoutCreditRequestInput;

    @Field(() => CreditConfigurationUpdateOneWithoutCreditRequestsInput, {nullable:true})
    creditConfiguration?: CreditConfigurationUpdateOneWithoutCreditRequestsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    proceedAt?: DateTimeFieldUpdateOperationsInput;
}

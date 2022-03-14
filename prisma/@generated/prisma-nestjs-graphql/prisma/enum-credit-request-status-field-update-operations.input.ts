import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestStatus } from '../credit/credit-request-status.enum';

@InputType()
export class EnumCreditRequestStatusFieldUpdateOperationsInput {

    @Field(() => CreditRequestStatus, {nullable:true})
    set?: keyof typeof CreditRequestStatus;
}

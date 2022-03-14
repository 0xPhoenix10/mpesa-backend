import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationStatus } from './credit-configuration-status.enum';

@InputType()
export class EnumCreditConfigurationStatusFieldUpdateOperationsInput {

    @Field(() => CreditConfigurationStatus, {nullable:true})
    set?: keyof typeof CreditConfigurationStatus;
}

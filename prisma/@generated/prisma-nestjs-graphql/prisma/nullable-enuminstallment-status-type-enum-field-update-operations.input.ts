import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from './installment-status-type.enum';

@InputType()
export class NullableEnuminstallmentStatusTypeEnumFieldUpdateOperationsInput {

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    set?: keyof typeof installmentStatusTypeEnum;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditStatusEnum } from './credit-status.enum';

@InputType()
export class NullableEnumcreditStatusEnumFieldUpdateOperationsInput {

    @Field(() => creditStatusEnum, {nullable:true})
    set?: keyof typeof creditStatusEnum;
}

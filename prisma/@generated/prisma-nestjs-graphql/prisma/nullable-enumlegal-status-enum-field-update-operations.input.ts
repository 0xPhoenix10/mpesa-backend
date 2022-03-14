import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { legalStatusEnum } from './legal-status.enum';

@InputType()
export class NullableEnumlegalStatusEnumFieldUpdateOperationsInput {

    @Field(() => legalStatusEnum, {nullable:true})
    set?: keyof typeof legalStatusEnum;
}

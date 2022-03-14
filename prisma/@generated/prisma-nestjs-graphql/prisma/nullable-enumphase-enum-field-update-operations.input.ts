import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { phaseEnum } from './phase.enum';

@InputType()
export class NullableEnumphaseEnumFieldUpdateOperationsInput {

    @Field(() => phaseEnum, {nullable:true})
    set?: keyof typeof phaseEnum;
}

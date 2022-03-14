import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';

@InputType()
export class EnumSlicesEnumFieldUpdateOperationsInput {

    @Field(() => SlicesEnum, {nullable:true})
    set?: keyof typeof SlicesEnum;
}

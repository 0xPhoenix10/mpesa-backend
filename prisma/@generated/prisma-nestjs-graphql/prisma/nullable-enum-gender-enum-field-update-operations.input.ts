import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderEnum } from './gender.enum';

@InputType()
export class NullableEnumGenderEnumFieldUpdateOperationsInput {

    @Field(() => GenderEnum, {nullable:true})
    set?: keyof typeof GenderEnum;
}

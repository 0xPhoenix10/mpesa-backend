import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { partnerRoleEnum } from './partner-role.enum';

@InputType()
export class NullableEnumpartnerRoleEnumFieldUpdateOperationsInput {

    @Field(() => partnerRoleEnum, {nullable:true})
    set?: keyof typeof partnerRoleEnum;
}

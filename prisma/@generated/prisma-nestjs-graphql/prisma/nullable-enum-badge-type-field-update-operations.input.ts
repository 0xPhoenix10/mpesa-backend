import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeType } from './badge-type.enum';

@InputType()
export class NullableEnumBadgeTypeFieldUpdateOperationsInput {

    @Field(() => BadgeType, {nullable:true})
    set?: keyof typeof BadgeType;
}

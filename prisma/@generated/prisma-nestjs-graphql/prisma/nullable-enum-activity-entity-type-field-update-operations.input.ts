import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityEntityType } from './activity-entity-type.enum';

@InputType()
export class NullableEnumActivityEntityTypeFieldUpdateOperationsInput {

    @Field(() => ActivityEntityType, {nullable:true})
    set?: keyof typeof ActivityEntityType;
}

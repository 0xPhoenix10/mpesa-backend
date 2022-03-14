import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';

@InputType()
export class NullableEnumActivityPriorityFieldUpdateOperationsInput {

    @Field(() => ActivityPriority, {nullable:true})
    set?: keyof typeof ActivityPriority;
}

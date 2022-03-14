import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumActivityEntityTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-activity-entity-type-field-update-operations.input';
import { NullableEnumActivityPriorityFieldUpdateOperationsInput } from '../prisma/nullable-enum-activity-priority-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneWithoutActivityInput } from '../user/user-update-one-without-activity.input';

@InputType()
export class ActivityUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    entityId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumActivityEntityTypeFieldUpdateOperationsInput, {nullable:true})
    entityType?: NullableEnumActivityEntityTypeFieldUpdateOperationsInput;

    @Field(() => NullableEnumActivityPriorityFieldUpdateOperationsInput, {nullable:true})
    priority?: NullableEnumActivityPriorityFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isRead?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    entity?: any;

    @Field(() => UserUpdateOneWithoutActivityInput, {nullable:true})
    user?: UserUpdateOneWithoutActivityInput;
}

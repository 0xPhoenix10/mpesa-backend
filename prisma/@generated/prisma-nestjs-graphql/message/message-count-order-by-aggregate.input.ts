import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MessageCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    messageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentSlices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    SMS?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pushNotificationTitle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pushNotificationBody?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { language } from '../prisma/language.enum';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';

@ObjectType()
export class MessageGroupBy {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => [SlicesEnum], {nullable:true})
    installmentSlices?: Array<keyof typeof SlicesEnum>;

    @Field(() => String, {nullable:true})
    SMS?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    pushNotificationTitle?: string;

    @Field(() => String, {nullable:true})
    pushNotificationBody?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => language, {nullable:false})
    language!: keyof typeof language;

    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: MessageCountAggregate;

    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: MessageMinAggregate;

    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: MessageMaxAggregate;
}

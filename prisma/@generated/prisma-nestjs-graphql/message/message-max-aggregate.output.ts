import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { language } from '../prisma/language.enum';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => String, {nullable:true})
    messageId?: string;

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

    @Field(() => language, {nullable:true})
    language?: keyof typeof language;
}

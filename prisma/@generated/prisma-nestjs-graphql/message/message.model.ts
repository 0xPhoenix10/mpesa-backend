import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { language } from '../prisma/language.enum';

@ObjectType()
export class Message {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => [SlicesEnum], {nullable:true})
    installmentSlices!: Array<keyof typeof SlicesEnum>;

    @Field(() => String, {nullable:true})
    SMS!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    pushNotificationTitle!: string | null;

    @Field(() => String, {nullable:true})
    pushNotificationBody!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => language, {nullable:false})
    language!: keyof typeof language;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language } from '../prisma/language.enum';

@InputType()
export class MessageMessageIdLanguageCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => language, {nullable:false})
    language!: keyof typeof language;
}

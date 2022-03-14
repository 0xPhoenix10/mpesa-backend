import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageMessageIdLanguageCompoundUniqueInput } from './message-message-id-language-compound-unique.input';

@InputType()
export class MessageWhereUniqueInput {

    @Field(() => MessageMessageIdLanguageCompoundUniqueInput, {nullable:true})
    messageId_language?: MessageMessageIdLanguageCompoundUniqueInput;
}

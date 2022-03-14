import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateinstallmentSlicesInput } from '../prisma/message-createinstallment-slices.input';
import { language } from '../prisma/language.enum';

@InputType()
export class MessageCreateManyInput {

    @Field(() => String, {nullable:false})
    messageId!: string;

    @Field(() => MessageCreateinstallmentSlicesInput, {nullable:true})
    installmentSlices?: MessageCreateinstallmentSlicesInput;

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
}

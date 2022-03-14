import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language } from './language.enum';

@InputType()
export class EnumlanguageFieldUpdateOperationsInput {

    @Field(() => language, {nullable:true})
    set?: keyof typeof language;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';

@InputType()
export class EnumCurrencyEnumFieldUpdateOperationsInput {

    @Field(() => CurrencyEnum, {nullable:true})
    set?: keyof typeof CurrencyEnum;
}

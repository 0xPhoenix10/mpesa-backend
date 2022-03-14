import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';

@InputType()
export class NullableEnumCurrencyEnumFieldUpdateOperationsInput {

    @Field(() => CurrencyEnum, {nullable:true})
    set?: keyof typeof CurrencyEnum;
}

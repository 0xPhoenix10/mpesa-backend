import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from './country-code.enum';

@InputType()
export class NullableEnumCountryCodeFieldUpdateOperationsInput {

    @Field(() => CountryCode, {nullable:true})
    set?: keyof typeof CountryCode;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditRefType } from './credit-ref-type.enum';

@InputType()
export class NullableEnumcreditRefTypeFieldUpdateOperationsInput {

    @Field(() => creditRefType, {nullable:true})
    set?: keyof typeof creditRefType;
}

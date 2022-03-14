import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class CustomerUncheckedUpdateWithoutVendorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    customerId?: StringFieldUpdateOperationsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { WalletUpdateOneWithoutTrustInput } from '../wallet/wallet-update-one-without-trust.input';

@InputType()
export class TrustUpdateInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    trustRating?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    score?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneWithoutTrustInput, {nullable:true})
    Wallet?: WalletUpdateOneWithoutTrustInput;
}

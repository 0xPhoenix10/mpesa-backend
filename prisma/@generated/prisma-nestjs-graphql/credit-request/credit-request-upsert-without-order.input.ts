import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestUpdateWithoutOrderInput } from './credit-request-update-without-order.input';
import { CreditRequestCreateWithoutOrderInput } from './credit-request-create-without-order.input';

@InputType()
export class CreditRequestUpsertWithoutOrderInput {

    @Field(() => CreditRequestUpdateWithoutOrderInput, {nullable:false})
    update!: CreditRequestUpdateWithoutOrderInput;

    @Field(() => CreditRequestCreateWithoutOrderInput, {nullable:false})
    create!: CreditRequestCreateWithoutOrderInput;
}

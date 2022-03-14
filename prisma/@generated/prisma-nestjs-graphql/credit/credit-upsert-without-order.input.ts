import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditUpdateWithoutOrderInput } from './credit-update-without-order.input';
import { CreditCreateWithoutOrderInput } from './credit-create-without-order.input';

@InputType()
export class CreditUpsertWithoutOrderInput {

    @Field(() => CreditUpdateWithoutOrderInput, {nullable:false})
    update!: CreditUpdateWithoutOrderInput;

    @Field(() => CreditCreateWithoutOrderInput, {nullable:false})
    create!: CreditCreateWithoutOrderInput;
}

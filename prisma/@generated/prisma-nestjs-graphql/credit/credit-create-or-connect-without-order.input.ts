import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditCreateWithoutOrderInput } from './credit-create-without-order.input';

@InputType()
export class CreditCreateOrConnectWithoutOrderInput {

    @Field(() => CreditWhereUniqueInput, {nullable:false})
    where!: CreditWhereUniqueInput;

    @Field(() => CreditCreateWithoutOrderInput, {nullable:false})
    create!: CreditCreateWithoutOrderInput;
}

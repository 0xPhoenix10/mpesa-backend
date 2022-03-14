import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestCreateWithoutOrderInput } from './credit-request-create-without-order.input';

@InputType()
export class CreditRequestCreateOrConnectWithoutOrderInput {

    @Field(() => CreditRequestWhereUniqueInput, {nullable:false})
    where!: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestCreateWithoutOrderInput, {nullable:false})
    create!: CreditRequestCreateWithoutOrderInput;
}

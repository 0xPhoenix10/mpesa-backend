import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutOrderInput } from './credit-request-create-without-order.input';
import { CreditRequestCreateOrConnectWithoutOrderInput } from './credit-request-create-or-connect-without-order.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';

@InputType()
export class CreditRequestCreateNestedOneWithoutOrderInput {

    @Field(() => CreditRequestCreateWithoutOrderInput, {nullable:true})
    create?: CreditRequestCreateWithoutOrderInput;

    @Field(() => CreditRequestCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutOrderInput;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;
}

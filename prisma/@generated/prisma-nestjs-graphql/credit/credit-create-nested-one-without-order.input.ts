import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutOrderInput } from './credit-create-without-order.input';
import { CreditCreateOrConnectWithoutOrderInput } from './credit-create-or-connect-without-order.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';

@InputType()
export class CreditCreateNestedOneWithoutOrderInput {

    @Field(() => CreditCreateWithoutOrderInput, {nullable:true})
    create?: CreditCreateWithoutOrderInput;

    @Field(() => CreditCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: CreditCreateOrConnectWithoutOrderInput;

    @Field(() => CreditWhereUniqueInput, {nullable:true})
    connect?: CreditWhereUniqueInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditRequestCreateWithoutOrderInput } from './credit-request-create-without-order.input';
import { CreditRequestCreateOrConnectWithoutOrderInput } from './credit-request-create-or-connect-without-order.input';
import { CreditRequestUpsertWithoutOrderInput } from './credit-request-upsert-without-order.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { CreditRequestUpdateWithoutOrderInput } from './credit-request-update-without-order.input';

@InputType()
export class CreditRequestUncheckedUpdateOneWithoutOrderInput {

    @Field(() => CreditRequestCreateWithoutOrderInput, {nullable:true})
    create?: CreditRequestCreateWithoutOrderInput;

    @Field(() => CreditRequestCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: CreditRequestCreateOrConnectWithoutOrderInput;

    @Field(() => CreditRequestUpsertWithoutOrderInput, {nullable:true})
    upsert?: CreditRequestUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    connect?: CreditRequestWhereUniqueInput;

    @Field(() => CreditRequestUpdateWithoutOrderInput, {nullable:true})
    update?: CreditRequestUpdateWithoutOrderInput;
}

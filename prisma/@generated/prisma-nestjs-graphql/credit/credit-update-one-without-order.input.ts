import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutOrderInput } from './credit-create-without-order.input';
import { CreditCreateOrConnectWithoutOrderInput } from './credit-create-or-connect-without-order.input';
import { CreditUpsertWithoutOrderInput } from './credit-upsert-without-order.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutOrderInput } from './credit-update-without-order.input';

@InputType()
export class CreditUpdateOneWithoutOrderInput {

    @Field(() => CreditCreateWithoutOrderInput, {nullable:true})
    create?: CreditCreateWithoutOrderInput;

    @Field(() => CreditCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: CreditCreateOrConnectWithoutOrderInput;

    @Field(() => CreditUpsertWithoutOrderInput, {nullable:true})
    upsert?: CreditUpsertWithoutOrderInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditWhereUniqueInput, {nullable:true})
    connect?: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutOrderInput, {nullable:true})
    update?: CreditUpdateWithoutOrderInput;
}

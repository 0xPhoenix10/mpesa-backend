import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutInstallmentsInput } from './credit-create-without-installments.input';
import { CreditCreateOrConnectWithoutInstallmentsInput } from './credit-create-or-connect-without-installments.input';
import { CreditUpsertWithoutInstallmentsInput } from './credit-upsert-without-installments.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithoutInstallmentsInput } from './credit-update-without-installments.input';

@InputType()
export class CreditUpdateOneWithoutInstallmentsInput {

    @Field(() => CreditCreateWithoutInstallmentsInput, {nullable:true})
    create?: CreditCreateWithoutInstallmentsInput;

    @Field(() => CreditCreateOrConnectWithoutInstallmentsInput, {nullable:true})
    connectOrCreate?: CreditCreateOrConnectWithoutInstallmentsInput;

    @Field(() => CreditUpsertWithoutInstallmentsInput, {nullable:true})
    upsert?: CreditUpsertWithoutInstallmentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CreditWhereUniqueInput, {nullable:true})
    connect?: CreditWhereUniqueInput;

    @Field(() => CreditUpdateWithoutInstallmentsInput, {nullable:true})
    update?: CreditUpdateWithoutInstallmentsInput;
}

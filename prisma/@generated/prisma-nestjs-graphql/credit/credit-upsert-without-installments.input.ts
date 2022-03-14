import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditUpdateWithoutInstallmentsInput } from './credit-update-without-installments.input';
import { CreditCreateWithoutInstallmentsInput } from './credit-create-without-installments.input';

@InputType()
export class CreditUpsertWithoutInstallmentsInput {

    @Field(() => CreditUpdateWithoutInstallmentsInput, {nullable:false})
    update!: CreditUpdateWithoutInstallmentsInput;

    @Field(() => CreditCreateWithoutInstallmentsInput, {nullable:false})
    create!: CreditCreateWithoutInstallmentsInput;
}

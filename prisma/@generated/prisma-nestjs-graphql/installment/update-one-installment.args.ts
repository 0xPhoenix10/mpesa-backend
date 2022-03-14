import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentUpdateInput } from './installment-update.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@ArgsType()
export class UpdateOneInstallmentArgs {

    @Field(() => InstallmentUpdateInput, {nullable:false})
    data!: InstallmentUpdateInput;

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;
}

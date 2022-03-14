import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentCreateInput } from './installment-create.input';
import { InstallmentUpdateInput } from './installment-update.input';

@ArgsType()
export class UpsertOneInstallmentArgs {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;

    @Field(() => InstallmentCreateInput, {nullable:false})
    create!: InstallmentCreateInput;

    @Field(() => InstallmentUpdateInput, {nullable:false})
    update!: InstallmentUpdateInput;
}

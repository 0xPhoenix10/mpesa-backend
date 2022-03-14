import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentUpdateManyMutationInput } from './installment-update-many-mutation.input';
import { InstallmentWhereInput } from './installment-where.input';

@ArgsType()
export class UpdateManyInstallmentArgs {

    @Field(() => InstallmentUpdateManyMutationInput, {nullable:false})
    data!: InstallmentUpdateManyMutationInput;

    @Field(() => InstallmentWhereInput, {nullable:true})
    where?: InstallmentWhereInput;
}

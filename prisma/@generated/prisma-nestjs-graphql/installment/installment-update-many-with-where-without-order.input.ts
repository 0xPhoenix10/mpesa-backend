import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';
import { InstallmentUpdateManyMutationInput } from './installment-update-many-mutation.input';

@InputType()
export class InstallmentUpdateManyWithWhereWithoutOrderInput {

    @Field(() => InstallmentScalarWhereInput, {nullable:false})
    where!: InstallmentScalarWhereInput;

    @Field(() => InstallmentUpdateManyMutationInput, {nullable:false})
    data!: InstallmentUpdateManyMutationInput;
}

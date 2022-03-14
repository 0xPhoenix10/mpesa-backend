import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentCreateInput } from './installment-create.input';

@ArgsType()
export class CreateOneInstallmentArgs {

    @Field(() => InstallmentCreateInput, {nullable:false})
    data!: InstallmentCreateInput;
}

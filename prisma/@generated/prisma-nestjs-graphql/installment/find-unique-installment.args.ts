import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@ArgsType()
export class FindUniqueInstallmentArgs {

    @Field(() => InstallmentWhereUniqueInput, {nullable:false})
    where!: InstallmentWhereUniqueInput;
}

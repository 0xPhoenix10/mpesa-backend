import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereInput } from './installment-where.input';

@ArgsType()
export class DeleteManyInstallmentArgs {

    @Field(() => InstallmentWhereInput, {nullable:true})
    where?: InstallmentWhereInput;
}

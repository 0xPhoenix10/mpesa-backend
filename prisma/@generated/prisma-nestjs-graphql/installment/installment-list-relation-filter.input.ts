import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentWhereInput } from './installment-where.input';

@InputType()
export class InstallmentListRelationFilter {

    @Field(() => InstallmentWhereInput, {nullable:true})
    every?: InstallmentWhereInput;

    @Field(() => InstallmentWhereInput, {nullable:true})
    some?: InstallmentWhereInput;

    @Field(() => InstallmentWhereInput, {nullable:true})
    none?: InstallmentWhereInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstallmentWhereInput } from './installment-where.input';
import { InstallmentOrderByWithRelationInput } from './installment-order-by-with-relation.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstallmentScalarFieldEnum } from './installment-scalar-field.enum';

@ArgsType()
export class FindManyInstallmentArgs {

    @Field(() => InstallmentWhereInput, {nullable:true})
    where?: InstallmentWhereInput;

    @Field(() => [InstallmentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InstallmentOrderByWithRelationInput>;

    @Field(() => InstallmentWhereUniqueInput, {nullable:true})
    cursor?: InstallmentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InstallmentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof InstallmentScalarFieldEnum>;
}

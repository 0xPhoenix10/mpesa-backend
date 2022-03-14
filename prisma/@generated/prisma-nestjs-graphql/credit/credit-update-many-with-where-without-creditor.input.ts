import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditScalarWhereInput } from './credit-scalar-where.input';
import { CreditUpdateManyMutationInput } from './credit-update-many-mutation.input';

@InputType()
export class CreditUpdateManyWithWhereWithoutCreditorInput {

    @Field(() => CreditScalarWhereInput, {nullable:false})
    where!: CreditScalarWhereInput;

    @Field(() => CreditUpdateManyMutationInput, {nullable:false})
    data!: CreditUpdateManyMutationInput;
}

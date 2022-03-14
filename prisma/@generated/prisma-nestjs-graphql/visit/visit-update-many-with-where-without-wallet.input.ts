import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitScalarWhereInput } from './visit-scalar-where.input';
import { VisitUpdateManyMutationInput } from './visit-update-many-mutation.input';

@InputType()
export class VisitUpdateManyWithWhereWithoutWalletInput {

    @Field(() => VisitScalarWhereInput, {nullable:false})
    where!: VisitScalarWhereInput;

    @Field(() => VisitUpdateManyMutationInput, {nullable:false})
    data!: VisitUpdateManyMutationInput;
}

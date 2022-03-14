import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitUpdateManyMutationInput } from './visit-update-many-mutation.input';
import { VisitWhereInput } from './visit-where.input';

@ArgsType()
export class UpdateManyVisitArgs {

    @Field(() => VisitUpdateManyMutationInput, {nullable:false})
    data!: VisitUpdateManyMutationInput;

    @Field(() => VisitWhereInput, {nullable:true})
    where?: VisitWhereInput;
}

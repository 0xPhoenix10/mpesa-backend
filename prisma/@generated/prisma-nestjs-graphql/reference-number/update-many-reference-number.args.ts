import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberUpdateManyMutationInput } from './reference-number-update-many-mutation.input';
import { ReferenceNumberWhereInput } from './reference-number-where.input';

@ArgsType()
export class UpdateManyReferenceNumberArgs {

    @Field(() => ReferenceNumberUpdateManyMutationInput, {nullable:false})
    data!: ReferenceNumberUpdateManyMutationInput;

    @Field(() => ReferenceNumberWhereInput, {nullable:true})
    where?: ReferenceNumberWhereInput;
}

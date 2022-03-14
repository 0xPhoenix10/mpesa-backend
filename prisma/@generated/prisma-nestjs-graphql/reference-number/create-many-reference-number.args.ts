import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberCreateManyInput } from './reference-number-create-many.input';

@ArgsType()
export class CreateManyReferenceNumberArgs {

    @Field(() => [ReferenceNumberCreateManyInput], {nullable:false})
    data!: Array<ReferenceNumberCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

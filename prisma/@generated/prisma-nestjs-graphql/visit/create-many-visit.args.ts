import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitCreateManyInput } from './visit-create-many.input';

@ArgsType()
export class CreateManyVisitArgs {

    @Field(() => [VisitCreateManyInput], {nullable:false})
    data!: Array<VisitCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

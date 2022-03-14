import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateManyVisitedInput } from './visit-create-many-visited.input';

@InputType()
export class VisitCreateManyVisitedInputEnvelope {

    @Field(() => [VisitCreateManyVisitedInput], {nullable:false})
    data!: Array<VisitCreateManyVisitedInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

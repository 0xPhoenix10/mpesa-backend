import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereInput } from './visit-where.input';

@ArgsType()
export class DeleteManyVisitArgs {

    @Field(() => VisitWhereInput, {nullable:true})
    where?: VisitWhereInput;
}

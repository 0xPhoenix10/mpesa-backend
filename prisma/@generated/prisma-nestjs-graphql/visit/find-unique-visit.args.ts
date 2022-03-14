import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';

@ArgsType()
export class FindUniqueVisitArgs {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;
}

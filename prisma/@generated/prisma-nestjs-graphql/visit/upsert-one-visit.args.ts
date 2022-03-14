import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitCreateInput } from './visit-create.input';
import { VisitUpdateInput } from './visit-update.input';

@ArgsType()
export class UpsertOneVisitArgs {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitCreateInput, {nullable:false})
    create!: VisitCreateInput;

    @Field(() => VisitUpdateInput, {nullable:false})
    update!: VisitUpdateInput;
}

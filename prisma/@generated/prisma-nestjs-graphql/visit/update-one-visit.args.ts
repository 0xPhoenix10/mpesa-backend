import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitUpdateInput } from './visit-update.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';

@ArgsType()
export class UpdateOneVisitArgs {

    @Field(() => VisitUpdateInput, {nullable:false})
    data!: VisitUpdateInput;

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;
}

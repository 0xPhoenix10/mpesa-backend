import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitCreateInput } from './visit-create.input';

@ArgsType()
export class CreateOneVisitArgs {

    @Field(() => VisitCreateInput, {nullable:false})
    data!: VisitCreateInput;
}

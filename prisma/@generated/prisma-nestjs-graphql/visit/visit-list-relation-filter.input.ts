import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereInput } from './visit-where.input';

@InputType()
export class VisitListRelationFilter {

    @Field(() => VisitWhereInput, {nullable:true})
    every?: VisitWhereInput;

    @Field(() => VisitWhereInput, {nullable:true})
    some?: VisitWhereInput;

    @Field(() => VisitWhereInput, {nullable:true})
    none?: VisitWhereInput;
}

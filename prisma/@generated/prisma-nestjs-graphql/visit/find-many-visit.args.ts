import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VisitWhereInput } from './visit-where.input';
import { VisitOrderByWithRelationInput } from './visit-order-by-with-relation.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VisitScalarFieldEnum } from './visit-scalar-field.enum';

@ArgsType()
export class FindManyVisitArgs {

    @Field(() => VisitWhereInput, {nullable:true})
    where?: VisitWhereInput;

    @Field(() => [VisitOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VisitOrderByWithRelationInput>;

    @Field(() => VisitWhereUniqueInput, {nullable:true})
    cursor?: VisitWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VisitScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VisitScalarFieldEnum>;
}

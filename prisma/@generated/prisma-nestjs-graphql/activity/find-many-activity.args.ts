import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';
import { ActivityOrderByWithRelationInput } from './activity-order-by-with-relation.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityScalarFieldEnum } from './activity-scalar-field.enum';

@ArgsType()
export class FindManyActivityArgs {

    @Field(() => ActivityWhereInput, {nullable:true})
    where?: ActivityWhereInput;

    @Field(() => [ActivityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityOrderByWithRelationInput>;

    @Field(() => ActivityWhereUniqueInput, {nullable:true})
    cursor?: ActivityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActivityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActivityScalarFieldEnum>;
}

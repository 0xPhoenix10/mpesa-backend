import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereInput } from './badge-where.input';
import { BadgeOrderByWithRelationInput } from './badge-order-by-with-relation.input';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BadgeScalarFieldEnum } from './badge-scalar-field.enum';

@ArgsType()
export class FindFirstBadgeArgs {

    @Field(() => BadgeWhereInput, {nullable:true})
    where?: BadgeWhereInput;

    @Field(() => [BadgeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BadgeOrderByWithRelationInput>;

    @Field(() => BadgeWhereUniqueInput, {nullable:true})
    cursor?: BadgeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BadgeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BadgeScalarFieldEnum>;
}

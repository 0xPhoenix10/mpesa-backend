import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereInput } from './blacklist-where.input';
import { BlacklistOrderByWithRelationInput } from './blacklist-order-by-with-relation.input';
import { BlacklistWhereUniqueInput } from './blacklist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlacklistScalarFieldEnum } from './blacklist-scalar-field.enum';

@ArgsType()
export class FindManyBlacklistArgs {

    @Field(() => BlacklistWhereInput, {nullable:true})
    where?: BlacklistWhereInput;

    @Field(() => [BlacklistOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlacklistOrderByWithRelationInput>;

    @Field(() => BlacklistWhereUniqueInput, {nullable:true})
    cursor?: BlacklistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlacklistScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlacklistScalarFieldEnum>;
}

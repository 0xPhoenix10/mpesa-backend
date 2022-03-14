import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class VisitWhereInput {

    @Field(() => [VisitWhereInput], {nullable:true})
    AND?: Array<VisitWhereInput>;

    @Field(() => [VisitWhereInput], {nullable:true})
    OR?: Array<VisitWhereInput>;

    @Field(() => [VisitWhereInput], {nullable:true})
    NOT?: Array<VisitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    visitedBy?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    visitedByReference?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    whenVisitTookPlace?: DateTimeNullableFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    visited?: UserRelationFilter;
}

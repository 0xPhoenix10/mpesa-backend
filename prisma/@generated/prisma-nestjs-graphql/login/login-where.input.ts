import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class LoginWhereInput {

    @Field(() => [LoginWhereInput], {nullable:true})
    AND?: Array<LoginWhereInput>;

    @Field(() => [LoginWhereInput], {nullable:true})
    OR?: Array<LoginWhereInput>;

    @Field(() => [LoginWhereInput], {nullable:true})
    NOT?: Array<LoginWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    qrKey?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    jwt?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}

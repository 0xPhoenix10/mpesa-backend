import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LoginScalarWhereInput {

    @Field(() => [LoginScalarWhereInput], {nullable:true})
    AND?: Array<LoginScalarWhereInput>;

    @Field(() => [LoginScalarWhereInput], {nullable:true})
    OR?: Array<LoginScalarWhereInput>;

    @Field(() => [LoginScalarWhereInput], {nullable:true})
    NOT?: Array<LoginScalarWhereInput>;

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
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class BlacklistWhereInput {

    @Field(() => [BlacklistWhereInput], {nullable:true})
    AND?: Array<BlacklistWhereInput>;

    @Field(() => [BlacklistWhereInput], {nullable:true})
    OR?: Array<BlacklistWhereInput>;

    @Field(() => [BlacklistWhereInput], {nullable:true})
    NOT?: Array<BlacklistWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    taxId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;
}

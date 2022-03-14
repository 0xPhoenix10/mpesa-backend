import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ReferenceNumberWhereInput {

    @Field(() => [ReferenceNumberWhereInput], {nullable:true})
    AND?: Array<ReferenceNumberWhereInput>;

    @Field(() => [ReferenceNumberWhereInput], {nullable:true})
    OR?: Array<ReferenceNumberWhereInput>;

    @Field(() => [ReferenceNumberWhereInput], {nullable:true})
    NOT?: Array<ReferenceNumberWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    prefix?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    lastReference?: IntNullableFilter;
}

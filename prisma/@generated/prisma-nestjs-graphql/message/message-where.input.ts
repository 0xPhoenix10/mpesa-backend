import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumSlicesEnumNullableListFilter } from '../prisma/enum-slices-enum-nullable-list-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumlanguageFilter } from '../prisma/enumlanguage-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    messageId?: StringFilter;

    @Field(() => EnumSlicesEnumNullableListFilter, {nullable:true})
    installmentSlices?: EnumSlicesEnumNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    SMS?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pushNotificationTitle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pushNotificationBody?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => EnumlanguageFilter, {nullable:true})
    language?: EnumlanguageFilter;
}

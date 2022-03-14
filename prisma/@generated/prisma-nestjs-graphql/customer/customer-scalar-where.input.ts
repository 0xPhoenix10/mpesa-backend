import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CustomerScalarWhereInput {

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    AND?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    OR?: Array<CustomerScalarWhereInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    NOT?: Array<CustomerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    customerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    vendorId?: StringFilter;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereUniqueInput } from './blacklist-where-unique.input';
import { BlacklistCreateInput } from './blacklist-create.input';
import { BlacklistUpdateInput } from './blacklist-update.input';

@ArgsType()
export class UpsertOneBlacklistArgs {

    @Field(() => BlacklistWhereUniqueInput, {nullable:false})
    where!: BlacklistWhereUniqueInput;

    @Field(() => BlacklistCreateInput, {nullable:false})
    create!: BlacklistCreateInput;

    @Field(() => BlacklistUpdateInput, {nullable:false})
    update!: BlacklistUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistCreateInput } from './blacklist-create.input';

@ArgsType()
export class CreateOneBlacklistArgs {

    @Field(() => BlacklistCreateInput, {nullable:false})
    data!: BlacklistCreateInput;
}

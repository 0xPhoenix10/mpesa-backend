import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustCreateInput } from './trust-create.input';

@ArgsType()
export class CreateOneTrustArgs {

    @Field(() => TrustCreateInput, {nullable:false})
    data!: TrustCreateInput;
}

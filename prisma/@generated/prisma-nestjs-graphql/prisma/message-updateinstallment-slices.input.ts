import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';

@InputType()
export class MessageUpdateinstallmentSlicesInput {

    @Field(() => [SlicesEnum], {nullable:true})
    set?: Array<keyof typeof SlicesEnum>;

    @Field(() => [SlicesEnum], {nullable:true})
    push?: Array<keyof typeof SlicesEnum>;
}

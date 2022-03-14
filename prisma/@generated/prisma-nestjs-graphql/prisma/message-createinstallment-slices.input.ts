import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';

@InputType()
export class MessageCreateinstallmentSlicesInput {

    @Field(() => [SlicesEnum], {nullable:false})
    set!: Array<keyof typeof SlicesEnum>;
}

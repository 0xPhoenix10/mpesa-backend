import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EcommercePlatformEnum } from './ecommerce-platform.enum';

@InputType()
export class NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput {

    @Field(() => EcommercePlatformEnum, {nullable:true})
    set?: keyof typeof EcommercePlatformEnum;
}

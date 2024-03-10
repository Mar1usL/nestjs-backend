import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePropertyInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    title: string;

    @Field()
    @IsNotEmpty()
    price: number;

    @Field()
    @IsNotEmpty()
    location: string;

    @Field()
    @IsNotEmpty()
    numberOfGuests: number;
}

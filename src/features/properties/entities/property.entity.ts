import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Property {
    @Field()
    id: number;

    @Field()
    title: string;

    @Field()
    price: number;

    @Field()
    location: string;

    @Field()
    numberOfGuests: number;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

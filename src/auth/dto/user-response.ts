import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.entity';

@ObjectType()
export class UserResponse {
    @Field(() => User)
    user: User;
}

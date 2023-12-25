import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/signup-input';
import { SignResponse } from './dto/sign-response';
import { SignInInput } from './dto/signin-input';

@Resolver(() => Auth)
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => SignResponse)
    signup(@Args('signUpInput') signUpInput: SignUpInput) {
        return this.authService.signup(signUpInput);
    }

    @Mutation(() => SignResponse)
    signIn(@Args('signInInput') signInInput: SignInInput) {
        return this.authService.signIn(signInInput);
    }

    @Query(() => Auth, { name: 'auth' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.authService.findOne(id);
    }

    @Mutation(() => Auth)
    removeAuth(@Args('id', { type: () => Int }) id: number) {
        return this.authService.remove(id);
    }
}

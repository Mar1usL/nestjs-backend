import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
    providers: [AuthResolver, AuthService, JwtService, ConfigService, AccessTokenStrategy],
})
export class AuthModule {}

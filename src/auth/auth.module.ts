import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
    providers: [AuthResolver, AuthService, JwtService, ConfigService],
})
export class AuthModule {}

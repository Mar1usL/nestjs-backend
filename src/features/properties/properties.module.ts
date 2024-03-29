import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesResolver } from './properties.resolver';

@Module({
    providers: [PropertiesResolver, PropertiesService],
})
export class PropertiesModule {}

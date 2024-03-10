import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PropertiesService } from './properties.service';
import { Property } from './entities/property.entity';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';

@Resolver(() => Property)
export class PropertiesResolver {
    constructor(private readonly propertiesService: PropertiesService) {}

    @Mutation(() => Property)
    createProperty(@Args('createPropertyInput') createPropertyInput: CreatePropertyInput) {
        return this.propertiesService.create(createPropertyInput);
    }

    @Query(() => [Property], { name: 'properties' })
    findAll() {
        return this.propertiesService.findAll();
    }

    @Query(() => Property, { name: 'property' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.propertiesService.findOne(id);
    }

    @Mutation(() => Property)
    updateProperty(@Args('updatePropertyInput') updatePropertyInput: UpdatePropertyInput) {
        return this.propertiesService.update(updatePropertyInput.id, updatePropertyInput);
    }

    @Mutation(() => Property)
    removeProperty(@Args('id', { type: () => Int }) id: number) {
        return this.propertiesService.remove(id);
    }
}

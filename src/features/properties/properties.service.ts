import { Injectable } from '@nestjs/common';
import { CreatePropertyInput } from './dto/create-property.input';
import { UpdatePropertyInput } from './dto/update-property.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createPropertyInput: CreatePropertyInput) {
        const { title, price, location, numberOfGuests } = createPropertyInput;

        const createdProperty = await this.prisma.property.create({
            data: {
                title,
                price,
                location,
                numberOfGuests,
            },
        });

        console.log('CreatedProperty', createdProperty);

        return createdProperty;
    }

    findAll() {
        return `This action returns all properties`;
    }

    findOne(id: number) {
        return `This action returns a #${id} property`;
    }

    update(id: number, updatePropertyInput: UpdatePropertyInput) {
        return `This action updates a #${id} property`;
    }

    remove(id: number) {
        return `This action removes a #${id} property`;
    }
}

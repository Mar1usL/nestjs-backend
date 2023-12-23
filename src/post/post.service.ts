import { Injectable } from '@nestjs/common';
import { CreatePostInput, UpdatePostInput } from '../types/graphql';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
    constructor(private readonly prisma: PrismaService) {}
    create({ name }: CreatePostInput) {
        return this.prisma.post.create({
            data: { name },
        });
    }

    findAll() {
        return this.prisma.post.findMany();
    }

    findOne(id: number) {
        return this.prisma.post.findUnique({
            where: { id },
            select: { name: true, id: true },
        });
    }

    update(id: number, { name }: UpdatePostInput) {
        return this.prisma.post.update({
            where: { id },
            data: {
                name,
            },
        });
    }

    remove(id: number) {
        return this.prisma.post.delete({
            where: { id },
        });
    }
}

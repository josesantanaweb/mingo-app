import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { Tag } from '@mingo/database';
import type { TagInput } from './dto/tag.input';

@Injectable()
export class TagsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered tags.
   */
  async findAll(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  /**
   * Finds a tag by its identifier.
   * @param id Unique tag identifier.
   */
  async findById(id: string): Promise<Tag | null> {
    return this.prisma.tag.findUnique({ 
      where: { id } 
    });
  }

  /**
   * Creates a new tag.
   * @param input Tag creation data.
   */
  async create(input: TagInput): Promise<Tag> {
    return this.prisma.tag.create({ 
      data: input 
    });
  }

  /**
   * Updates a tag by its id.
   * @param id Tag identifier.
   * @param input New tag data.
   */
  async update(id: string, input: TagInput): Promise<Tag> {
    return this.prisma.tag.update({ 
      where: { id }, 
      data: input 
    });
  }

  /**
   * Deletes a tag by its identifier.
   * @param id Tag identifier.
   */
  async delete(id: string): Promise<Tag> {
    return this.prisma.tag.delete({ 
      where: { id } 
    });
  }
}

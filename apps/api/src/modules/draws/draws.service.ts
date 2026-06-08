import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import type { Draw } from '@mingo/database';
import type { DrawInput } from '@/modules/draws/dto/draw.input';

@Injectable()
export class DrawsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lists all registered draws.
   */
  async findAll(): Promise<Draw[]> {
    return this.prisma.draw.findMany();
  }

  /**
   * Finds a draw by its identifier.
   * @param id Unique draw identifier.
   */
  async findById(id: string): Promise<Draw | null> {
    return this.prisma.draw.findUnique({
      where: { id }
    });
  }

  /**
   * Creates a new draw.
   * @param input draw creation data.
   */
  async create(input: DrawInput): Promise<Draw> {
    return this.prisma.draw.create({
      data: input
    });
  }

  /**
   * Updates a draw by its id.
   * @param id draw identifier.
   * @param input New draw data.
   */
  async update(id: string, input: DrawInput): Promise<Draw> {
    return this.prisma.draw.update({
      where: { id },
      data: input
    });
  }

  /**
   * Deletes a draw by its identifier.
   * @param id draw identifier.
   */
  async delete(id: string): Promise<Draw> {
    return this.prisma.draw.delete({
      where: { id }
    });
  }
}

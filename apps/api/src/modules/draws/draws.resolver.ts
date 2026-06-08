import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DrawsService } from '@/modules/draws/draws.service';
import { Draw } from '@/modules/draws/entities/draw.entity';
import { DrawInput } from '@/modules/draws/dto/draw.input';

@Resolver(() => Draw)
export class DrawsResolver {
  constructor(private readonly drawsService: DrawsService) {}

  /**
   * Retrieves all registered draws.
   */
  @Query(() => [Draw], { name: 'draws' })
  async findAll(): Promise<Draw[]> {
    return this.drawsService.findAll();
  }

  /**
   * Finds a draw by its identifier.
   * @param id Unique draw identifier.
   */
  @Query(() => Draw, { name: 'draw', nullable: true })
  async findById(@Args('id') id: string): Promise<Draw | null> {
    return this.drawsService.findById(id);
  }

  /**
   * Creates a new draw.
   * @param input Data required to create the draw.
   */
  @Mutation(() => Draw, { name: 'createDraw' })
  async create(@Args('input') input: DrawInput): Promise<Draw> {
    return this.drawsService.create(input);
  }

  /**
   * Updates an existing draw.
   * @param id Draw identifier.
   * @param input New draw data.
   */
  @Mutation(() => Draw, { name: 'updateDraw' })
  async update(@Args('id') id: string, @Args('input') input: DrawInput): Promise<Draw> {
    return this.drawsService.update(id, input);
  }

  /**
   * Deletes a draw by its id.
   * @param id Identifier of the draw to delete.
   */
  @Mutation(() => Draw, { name: 'deleteDraw' })
  async delete(@Args('id') id: string): Promise<Draw> {
    return this.drawsService.delete(id);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';
import { TagInput } from './dto/tag.input';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  /**
   * Retrieves all registered tags.
   */
  @Query(() => [Tag], { name: 'tags' })
  async findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  /**
   * Finds a tag by its identifier.
   * @param id Unique tag identifier.
   */
  @Query(() => Tag, { name: 'tag', nullable: true })
  async findById(@Args('id') id: string): Promise<Tag | null> {
    return this.tagsService.findById(id);
  }

  /**
   * Creates a new tag.
   * @param input Data required to create the tag.
   */
  @Mutation(() => Tag, { name: 'createTag' })
  async create(@Args('input') input: TagInput): Promise<Tag> {
    return this.tagsService.create(input);
  }

  /**
   * Updates an existing tag.
   * @param id Tag identifier.
   * @param input New tag data.
   */
  @Mutation(() => Tag, { name: 'updateTag' })
  async update(@Args('id') id: string, @Args('input') input: TagInput): Promise<Tag> {
    return this.tagsService.update(id, input);
  }

  /**
   * Deletes a tag by its id.
   * @param id Identifier of the tag to delete.
   */
  @Mutation(() => Tag, { name: 'deleteTag' })
  async delete(@Args('id') id: string): Promise<Tag> {
    return this.tagsService.delete(id);
  }
}

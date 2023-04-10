import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from '../entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getAll(): Promise<PostEntity[]> {
    return this.postService.getAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: number) {
    return this.postService.getPostById(id);
  }

  @Post()
  createPost(@Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.createPost(post);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: number,
    @Body() post: PostEntity,
  ): Promise<PostEntity> {
    return await this.postService.updatePost(id, post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<PostEntity> {
    return await this.postService.deletePost(id);
  }
}

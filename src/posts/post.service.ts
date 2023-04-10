import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as PostEntity } from '../entities/post.entity';
import { Comment as CommentEntity } from '../entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
  ) {}

  getAll(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  getPostById(id: number): Promise<PostEntity> {
    return this.postsRepository.findOne({ where: { id } });
  }
  createPost(post: PostEntity): Promise<PostEntity> {
    return this.postsRepository.save(post);
  }

  async updatePost(id: number, post: PostEntity): Promise<PostEntity> {
    const existingPost = await this.postsRepository.findOne({ where: { id } });

    const updatedPost = {
      ...existingPost,
      ...post,
    };

    return this.postsRepository.save(updatedPost);
  }

  async deletePost(id: number) {
    const postToDelete = await this.postsRepository.findOne({ where: { id } });
    await this.commentsRepository.delete({ post: postToDelete });
    return await this.postsRepository.remove(postToDelete);
  }
}

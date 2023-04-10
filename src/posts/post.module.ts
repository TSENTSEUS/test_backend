import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post as PostEntity } from '../entities/post.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Comment as CommentEntity } from '../entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, CommentEntity])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}

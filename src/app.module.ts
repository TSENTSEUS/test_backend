import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { PostController } from './posts/post.controller';
import { PostService } from './posts/post.service';
import { Post } from './entities/post.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './entities/user.entity';
import { CommentController } from './comments/comment.controller';
import { CommentService } from './comments/comment.service';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Post, User, Comment]),
  ],
  controllers: [
    AppController,
    PostController,
    UserController,
    CommentController,
  ],
  providers: [AppService, PostService, UserService, CommentService],
})
export class AppModule {}

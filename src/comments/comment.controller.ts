import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment as CommentEntity } from '../entities/comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}
  @Post()
  async addComment(@Body() comment: CommentEntity): Promise<CommentEntity> {
    try {
      return await this.commentService.addComment(comment);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}

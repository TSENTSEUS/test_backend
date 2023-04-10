import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment as CommentEntity } from '../entities/comment.entity';
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  addComment(comment: CommentEntity): Promise<CommentEntity> {
    return this.commentRepository.save(comment);
  }
}

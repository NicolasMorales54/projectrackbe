import { Task } from 'src/tasks/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { SubtasksController } from './subtasks.controller';
import { SubtasksService } from './subtasks.service';
import { Subtask } from './entities/subtask.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Subtask])],
  controllers: [SubtasksController],
  providers: [SubtasksService],
  exports: [SubtasksService],
})
export class SubtasksModule {}

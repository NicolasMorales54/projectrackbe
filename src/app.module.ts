import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { TimeRegister } from './time-register/entities/time-register.entity';
import { Notification } from './notifications/entities/notification.entity';
import { NotificationsModule } from './notifications/notifications.module';
import { TimeRegisterModule } from './time-register/time-register.module';
import { Subtask } from './subtasks/entities/subtask.entity';
import { Project } from './projects/entities/project.entity';
import { SubtasksModule } from './subtasks/subtasks.module';
import { ProjectsModule } from './projects/projects.module';
import { Email } from './emails/entities/email.entity';
import { EmailsModule } from './emails/emails.module';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    ProjectsModule,
    TasksModule,
    SubtasksModule,
    TimeRegisterModule,
    NotificationsModule,
    EmailsModule,
    AuthModule,
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://neondb_owner:npg_4gbwNcCnWt8F@ep-royal-waterfall-a8jwo6by-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
      autoLoadEntities: true,
      synchronize: false,
      entities: [User, Task, Project],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

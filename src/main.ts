import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.enableCors({
    origin: ['http://localhost:4200', 'https://projectrack.vercel.app'],
    methods: 'GET,POST,PUT,DELETE, PATCH, OPTIONS',
    credentials: true,
  });

  app.use(
    session({
      secret: 'supersecret', // 🔐 requerido por express-session
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();

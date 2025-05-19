import { IsInt } from 'class-validator';

export class CreateAsignacionTareaDto {
  @IsInt()
  tareaId: number;

  @IsInt()
  usuarioId: number;
}

import { Module } from '@nestjs/common';
import { InscricoesModule } from './inscricoes/inscricoes.module';

@Module({
  imports: [InscricoesModule],
})
export class AppModule {}

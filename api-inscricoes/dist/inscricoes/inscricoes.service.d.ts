import { CreateInscricaoDto } from './dto/create-inscricao.dto';
type ArquivoRecebido = {
    nomeOriginal: string;
    tipo: string;
    tamanho: number;
};
type Inscricao = CreateInscricaoDto & {
    id: number;
    criadaEm: string;
    comprovante?: ArquivoRecebido;
};
export declare class InscricoesService {
    private inscricoes;
    criar(dados: CreateInscricaoDto): Inscricao;
    criarComArquivo(dados: CreateInscricaoDto, comprovante: Express.Multer.File): Inscricao;
    listar(): Inscricao[];
}
export {};

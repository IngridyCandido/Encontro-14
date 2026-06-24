import { CreateInscricaoDto } from './dto/create-inscricao.dto';
import { InscricoesService } from './inscricoes.service';
export declare class InscricoesController {
    private readonly inscricoesService;
    constructor(inscricoesService: InscricoesService);
    criar(body: CreateInscricaoDto): CreateInscricaoDto & {
        id: number;
        criadaEm: string;
        comprovante?: {
            nomeOriginal: string;
            tipo: string;
            tamanho: number;
        };
    };
    criarComArquivo(body: CreateInscricaoDto, comprovante: Express.Multer.File): CreateInscricaoDto & {
        id: number;
        criadaEm: string;
        comprovante?: {
            nomeOriginal: string;
            tipo: string;
            tamanho: number;
        };
    };
    listar(): (CreateInscricaoDto & {
        id: number;
        criadaEm: string;
        comprovante?: {
            nomeOriginal: string;
            tipo: string;
            tamanho: number;
        };
    })[];
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricoesService = void 0;
const common_1 = require("@nestjs/common");
let InscricoesService = class InscricoesService {
    inscricoes = [];
    criar(dados) {
        const novaInscricao = {
            id: this.inscricoes.length + 1,
            ...dados,
            criadaEm: new Date().toISOString(),
        };
        this.inscricoes.push(novaInscricao);
        return novaInscricao;
    }
    criarComArquivo(dados, comprovante) {
        const novaInscricao = {
            id: this.inscricoes.length + 1,
            ...dados,
            comprovante: {
                nomeOriginal: comprovante.originalname,
                tipo: comprovante.mimetype,
                tamanho: comprovante.size,
            },
            criadaEm: new Date().toISOString(),
        };
        this.inscricoes.push(novaInscricao);
        return novaInscricao;
    }
    listar() {
        return this.inscricoes;
    }
};
exports.InscricoesService = InscricoesService;
exports.InscricoesService = InscricoesService = __decorate([
    (0, common_1.Injectable)()
], InscricoesService);
//# sourceMappingURL=inscricoes.service.js.map
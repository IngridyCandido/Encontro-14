"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscricoesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_inscricao_dto_1 = require("./dto/create-inscricao.dto");
const inscricoes_service_1 = require("./inscricoes.service");
const TAMANHO_MAXIMO_COMPROVANTE = 2 * 1024 * 1024;
let InscricoesController = class InscricoesController {
    inscricoesService;
    constructor(inscricoesService) {
        this.inscricoesService = inscricoesService;
    }
    criar(body) {
        return this.inscricoesService.criar(body);
    }
    criarComArquivo(body, comprovante) {
        return this.inscricoesService.criarComArquivo(body, comprovante);
    }
    listar() {
        return this.inscricoesService.listar();
    }
};
exports.InscricoesController = InscricoesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscricao_dto_1.CreateInscricaoDto]),
    __metadata("design:returntype", void 0)
], InscricoesController.prototype, "criar", null);
__decorate([
    (0, common_1.Post)('com-arquivo'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('comprovante', {
        limits: {
            fileSize: TAMANHO_MAXIMO_COMPROVANTE,
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: /^(application\/pdf|image\/png|image\/jpeg)$/,
    })
        .addMaxSizeValidator({
        maxSize: TAMANHO_MAXIMO_COMPROVANTE,
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscricao_dto_1.CreateInscricaoDto, Object]),
    __metadata("design:returntype", void 0)
], InscricoesController.prototype, "criarComArquivo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InscricoesController.prototype, "listar", null);
exports.InscricoesController = InscricoesController = __decorate([
    (0, common_1.Controller)('inscricoes'),
    __metadata("design:paramtypes", [inscricoes_service_1.InscricoesService])
], InscricoesController);
//# sourceMappingURL=inscricoes.controller.js.map
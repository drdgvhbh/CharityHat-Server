"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const invoice_services_1 = require("./invoice.services");
const invoice_controller_1 = require("./invoice.controller");
let InvoiceModule = class InvoiceModule {
};
InvoiceModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [invoice_controller_1.InvoiceController],
        providers: [invoice_services_1.InvoiceService],
    })
], InvoiceModule);
exports.InvoiceModule = InvoiceModule;
//# sourceMappingURL=invoice.module.js.map
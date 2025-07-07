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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TripsService = class TripsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.trip.findMany({
            include: { participants: true },
        });
    }
    async findOne(id) {
        return this.prisma.trip.findUnique({
            where: { id },
            include: { participants: true, activities: true, links: true },
        });
    }
    async createFullTrip(data) {
        const { destination, starts_at, ends_at, participants } = data;
        const trip = await this.prisma.trip.create({
            data: {
                destination,
                starts_at,
                ends_at,
                participants: {
                    createMany: {
                        data: participants.map((p) => ({
                            name: p.name,
                            email: p.email,
                            is_owner: p.is_owner ?? false,
                            is_confirmed: p.is_owner === true,
                        })),
                    },
                },
            },
            include: { participants: true },
        });
        return trip;
    }
    async update(id, updateDto) {
        return this.prisma.trip.update({
            where: { id },
            data: updateDto,
        });
    }
    async remove(id) {
        return this.prisma.trip.delete({
            where: { id },
        });
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TripsService);
//# sourceMappingURL=trips.service.js.map
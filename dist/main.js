"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const nestjs_api_reference_1 = require("@scalar/nestjs-api-reference");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: false,
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('PlannTrip documentatio API')
        .setDescription('Documentation')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environment')
        .addTag('Your API Tag')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use('/reference', (0, nestjs_api_reference_1.apiReference)({
        content: document,
        theme: 'purple',
    }));
    app.enableCors({
        origin: ['http://localhost:5173', 'https://planntrip.netlify.app/'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    app.use((0, helmet_1.default)());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
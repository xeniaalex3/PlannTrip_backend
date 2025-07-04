"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('PlannTrip documentatio API')
        .setDescription('Documentation')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environment')
        .addServer('https://staging.yourapi.com/', 'Staging')
        .addServer('https://production.yourapi.com/', 'Production')
        .addTag('Your API Tag')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
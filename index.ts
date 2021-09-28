import express, { Express, Request, Response, NextFunction } from 'express';
import * as http from 'http';
import next, { NextApiHandler } from 'next';
import * as socketio from 'socket.io';
import swaggerUi from 'swagger-ui-express';
import * as OpenApiValidator from 'express-openapi-validator';
import path from 'path';
import { RegisterRoutes } from './server/routes/routes';
import { ValidateError } from 'tsoa';

const port: number = parseInt(process.env.PORT || '3000', 10);
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler: NextApiHandler = nextApp.getRequestHandler();
nextApp.prepare().then(async () => {
    const app: Express = express();
    const server: http.Server = http.createServer(app);
    const io: socketio.Server = new socketio.Server();
    const swaggerDocument = require('./server/openapi/swagger.json');
    app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss: '.swagger-ui .curl-command {display:none;}' }));
    // app.use(
    //     OpenApiValidator.middleware({
    //         apiSpec: './server/openapi/swagger.json',
    //         validateRequests: true,
    //         validateResponses: false,
    //         ignoreUndocumented: true
    //     })
    // );
    io.attach(server);

    RegisterRoutes(app);
    app.get('/api/ooo', async (_: Request, res: Response) => {
        console.log('hello world1');
        res.send('Hello World');
    });

    app.use(function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): Response | void {
        if (err instanceof ValidateError) {
            console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
            return res.status(422).json({
                message: 'Validation Failed',
                details: err?.fields
            });
        }
        if (err instanceof Error) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        next();
    });
    io.on('connection', (socket: socketio.Socket) => {
        console.log('connection');
        socket.emit('status', 'Hello from Socket.io');

        socket.on('disconnect', () => {
            console.log('client disconnected');
        });
    });

    app.all('*', (req: any, res: any) => nextHandler(req, res));

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});

import { Get, Route, Controller, Tags } from '@tsoa/runtime';

@Route('ping')
@Tags('Health')
export class PingController extends Controller {
    @Get('/')
    public async getPong(): Promise<{ ping: 'pong' }> {
        return {
            ping: 'pong'
        };
    }
}

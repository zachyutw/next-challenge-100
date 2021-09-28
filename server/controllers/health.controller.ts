import { Get, Route, Controller, Tags, Query } from '@tsoa/runtime';

@Route('health')
@Tags('Health')
export class HealthController extends Controller {
    @Get('/')
    public async getHealth(@Query() name: string): Promise<{ status: 'ok'; name: string }> {
        return { status: 'ok', name };
    }
}

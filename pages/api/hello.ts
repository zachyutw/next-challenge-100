import { NextApiRequest, NextApiResponse } from 'next';
export default function helloHandler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'hello world' });
}

import { Space, Typography } from 'antd';
import appInfo from '../../package.json';
export default function DotEnvConfig(props: any) {
    return (
        <Space>
            <Space direction='vertical'>
                <Typography.Title level={1}>Read Environment Value from dotenv</Typography.Title>
                <Typography.Title> {props.NEXT_APP_NAME} </Typography.Title>
            </Space>
        </Space>
    );
}

export async function getStaticProps() {
    return {
        props: {
            NEXT_APP_NAME: process.env.NEXT_APP_NAME || appInfo.name
        }
    };
}

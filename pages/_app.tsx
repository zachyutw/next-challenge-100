import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'antd/dist/antd.min.css';
import '../styles/antdstyles.less';
import Link from 'next/link'
import BasicFooter from '../components/Layout/BasicFooter';
import {HomeFilled} from '@ant-design/icons'
import NavigationBar from '../components/Layout/NavigationBar'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3'
    }
};

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <GlobalStyle />
            <NavigationBar />
            <div style={{ minHeight: '90vh' }}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </div>
            <BasicFooter />
        </>
    );
}

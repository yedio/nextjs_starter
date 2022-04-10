import Layout from '../components/Layout';
import '../styles/globals.css';

interface Props {
  Component: any;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

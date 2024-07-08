import { Card } from '@monkey/components';
import Head from 'next/head';
// import { Card } from '@monkey/components';

export default function Index(props) {
  console.log('Props - ', props);
  return (
    <div>
      <Head>
        <title>Tribekya</title>
      </Head>

      <Card>
        <h1>Hola mundo</h1>
      </Card>
    </div>
  );
}

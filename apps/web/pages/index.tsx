import Head from 'next/head';

import dynamic from 'next/dynamic';

const DashboardApp = dynamic(() => import('monkey_dashboard/App'), { ssr: false });

export default function Index(props) {
  return (
    <div>
      <Head>
        <title>Tribekya</title>
      </Head>

      <div
        style={{
          margin: '2rem',
          border: '5px dotted',
          borderRadius: '10px',
          width: '70vw',
          height: '70vw',
          backgroundColor: 'rgba(199, 0, 255, 0.46)',
          display: 'grid',
          placeItems: 'center',
          textAlign: 'center',
          letterSpacing: '1px',
          fontWeight: '500',
          fontSize: '2rem',
        }}
      >
        [dashboard frontend (nextjs@13.4.11)]
        <DashboardApp>Hola desde web!!!</DashboardApp>
      </div>
    </div>
  );
}

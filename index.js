import Head from 'next/head';
import Link from 'next/link';

function IndexPage(){
  return(
    <>
      <Head>
        <title> Welcome to my Next.js website </title>
      </Head>
      <div>
        <Link href="/about" passHref>
          About us
        </Link>
      </div>
    </>
  );
}

export default IndexPage;



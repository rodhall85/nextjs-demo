import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getTreatments } from '../lib/treatments'

export async function getStaticProps() {
  const treatments = await getTreatments()
  return {
    props: {
      treatments
    }
  }
}

export default function Home({ treatments }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello fuckers, I am Rodders init</p>
        <p>
          (This is a shit site that I made using next.js{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {treatments.map(({fields: { id, name, fromDate }}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/treatments/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {fromDate}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

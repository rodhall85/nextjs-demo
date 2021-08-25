import Head from 'next/head'
import Date from '../../components/date'
import Layout from "../../components/layout";
import { getAllTreatmentIds, getTreatmentsData } from "../../lib/treatments";

import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    console.log('params',params);
    const treatmentData = await getTreatmentsData(params.id);
    console.log('treatmentData',treatmentData);
    return {
        props:{
            treatmentData
        }
    }
}

export async function getStaticPaths() {
    const paths = await getAllTreatmentIds();
    console.log('p', paths);
    return {
        paths,
        fallback: false
    }
}

export default function Treatment({ treatmentData: { fields: { name, fromDate, price, description } } }) {
    return (
        <Layout>
            <Head>
                <title>{name}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>&pound;{price}</h1>
                <div className={utilStyles.lightText}>
                    {fromDate}
                </div>
                <h3>{name}</h3>
                <h4>{description}</h4>
            </article>
        </Layout>
    );
}

import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Sou engenheiro de computação formado pela Unicamp em 2006. Trabalho
          com desenvolvimento de software desde 2004. Durante a faculdade me
          envolvi em diversas atividades extra-curriculares ligadas a
          programação. Trabalhei no laboratório UNISIM da faculdade de
          Engenharia Mecânica com modelagem e simulação de poços de petróleo
          para a Petrobras, e no LAS (hoje LASCA) com a criação de uma
          distribuição Linux baseada em Gentoo para a Itautec. Também trabalhei
          na empresa júnior da computação, a CONPEC, com especificação de
          sistemas web.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

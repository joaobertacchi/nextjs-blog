import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostPaths, getPostData } from '../../lib/posts';
import Date from '../../components/date';

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article></article>
    <h1 className={utilStyles.headingXL}>{postData.title}</h1>
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

export default Post;

export const getStaticPaths = async () => ({
  paths: getAllPostPaths(),
  fallback: false,
});

export const getStaticProps = async ({ params }) => ({
  props: {
    postData: await getPostData(params.id),
  },
});

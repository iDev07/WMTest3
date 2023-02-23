import React from "react";
import { getPosts } from "../../../services";
import { getPostDetails } from "../../../services";
import { useTranslation } from "react-i18next";
import Head from "next/head";
export default function Slug({ post }) {
  console.log(post);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>
          {i18n.language === "uz"
            ? post.heading_uz
            : i18n.language === "ru"
            ? post.heading_ru
            : post.heading_en}
          {post.slug}
        </title>
      </Head>
    </>
  );
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPosts(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

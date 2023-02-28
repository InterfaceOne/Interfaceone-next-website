import React from "react";
import * as S from "../../components/common//blogsPage/blogs.styles";
import Parallax from "parallax-js";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import Navbar from "../../components/common/navbar/navbar";
import Link from "next/link";
import Head from "next/head";
import AnimatedButton from "@/components/common/button/animatedButton";
import { useRouter } from "next/router";
import { Footer } from "@/components/common/footer";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

const BlogsPage = (props) => {
  const data = props.blogs;

  React.useEffect(() => {
    var scene = document.getElementById("blogsPage");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Explore our Blogs : Interone Technologies</title>
        <meta
          name="og:description"
          content=" We expertise in MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack : Interone Technologies"
        />
        <meta
          name="keywords"
          content="Interone, Interone Technologies, blogs, interone, Mobile App, Web Development,MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack & Digital Transformation services"
        />
        <link rel="canonical" href="https://interone.io/blogs/cards" />
      </Head>
      <S.Main>
        <Navbar />
        <S.Container>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="blogsPage">
                <S.FirstHeadLayer data-depth="0.6"> Blogs</S.FirstHeadLayer>
              </S.Head>
              <S.SecHeadLayer strings={["Blogs"]}></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>

          <>
            <S.CardWrapper>
              {data &&
                data?.map((blog, index) => {
                  return <BlogCard key={index} blog={blog} />;
                })}
            </S.CardWrapper>
          </>
        </S.Container>
      </S.Main>
      <S.QuestionButton>
        <S.QuestionWrapper>
          <S.Question>
            <S.QuestionText>
              <p> Have A Question ? We Are Happy to Help</p>
            </S.QuestionText>
            <S.RouteButton
              onClick={() => router.push("/", "/contact-us", { shallow: true })}
            >
              <AnimatedButton buttonname="Contact Us">
                Contact Us
              </AnimatedButton>
            </S.RouteButton>
          </S.Question>
        </S.QuestionWrapper>
      </S.QuestionButton>
      <Footer marginLeftZero />
    </>
  );
};

export default BlogsPage;

export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // cache: new InMemoryCache(),
      body: JSON.stringify({
        query: `
        query {
            blogCollection {
              items {
                title
                description {
                  json
                }
                image {
                  title
                  url
                }
                slugUrl
              }
            }
          }
          `,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const blogs = data?.blogCollection?.items;

  return {
    props: {
      blogs,
    },
  };
}

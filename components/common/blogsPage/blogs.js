import React from "react";
import * as S from "./blogs.styles";
import Parallax from "parallax-js";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import BlogCard from "../BlogCard/BlogCard";
import Navbar from "../navbar/navbar";
import Link from "next/link";
import AnimatedButton from "../button/animatedButton";
import Head from "next/head";

const mainQuery = gql`
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
`;

const BlogsPage = (props) => {
  React.useEffect(() => {
    var scene = document.getElementById("blogsPage");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);
  const { loading, data } = useQuery(mainQuery);

  return (
    <>
      <Head>
        <title>Explore our Blogs : Interone Technologies</title>
        <meta
          name="description"
          content=" We expertise in MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack : Interone Technologies"
        />
        <meta
          name="keywords"
          content="Interone, Interone Technologies, blogs, interone, Mobile App, Web Development,MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack & Digital Transformation services"
        />
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

          {loading ? (
            <div className="w-full h-full flex justify-center items-center p-10">
              {/* <Loading /> */}
            </div>
          ) : (
            <>
              <S.CardWrapper>
                {data?.blogCollection?.items &&
                  data?.blogCollection?.items.map((blog, index) => {
                    return <BlogCard key={index} blog={blog} />;
                  })}
              </S.CardWrapper>
            </>
          )}
        </S.Container>
      </S.Main>
      <S.QuestionButton>
        <S.QuestionWrapper>
          <S.Question>
            <S.QuestionText>
              <p> Have A Question ? We Are Happy to Help</p>
            </S.QuestionText>
            <Link to={`/#contact`}>
              <AnimatedButton buttonname="Contact Us">
                Contact Us
              </AnimatedButton>
            </Link>
          </S.Question>
        </S.QuestionWrapper>
      </S.QuestionButton>
    </>
  );
};

export default BlogsPage;

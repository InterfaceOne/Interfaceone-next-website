import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { useRouter } from "next/router";
import Link from "next/link";
import AnimatedButton from "../button/animatedButton";
import { FacebookIcon, Twitter, LinkedIn } from "../../../public/svgicon/svgIcons";
// import "../blogs/BlogCard/BlogCard.css";
import * as S from "./blogDetails.styles";
// import { Navbar, Footer } from "../../components/common";
import Head from "next/head";
import { Footer } from "../footer";

const BlogDetails = (props) => {
  const [slugUrl, setSlugUrl] = React.useState(props.match.params.slugUrl);
  const { pathname } = useRouter();

  React.useEffect(() => {
    setSlugUrl(props.match.params.slugUrl);
  }, [props.match.params.slugUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mainQuery = gql`
    query ($slugUrl: String) {
      blogCollection(
        limit: 1
        order: sys_publishedAt_ASC
        where: { slugUrl: $slugUrl }
      ) {
        items {
          title
          description {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  title
                  description
                  url
                }
              }
            }
          }
          image {
            title
            url
          }
          sys {
            publishedAt
          }
          authorName
          authorImage {
            title
            url
          }
        }
      }
    }
  `;
  const { loading, data } = useQuery(mainQuery, {
    variables: { slugUrl: slugUrl },
  });

  const titleForHelmet = data?.blogCollection?.items[0].title;

  function renderOptions(links) {
    const assetMap = new Map();
    for (const asset of links.assets.block) {
      assetMap.set(asset.sys.id, asset);
    }

    return {
      renderMark: {
        [MARKS.BOLD]: (text) => <S.BoldText>{text}</S.BoldText>,
        [MARKS.CODE]: (text) => (
          <pre className="bg-gold w-full p-4 text-black   rounded ">
            <code className="w-full text-sm ">{text}</code>
          </pre>
        ),
      },

      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => {
          return (
            <>
              <S.Heading2>{children}</S.Heading2>
              <br />
            </>
          );
        },
        [BLOCKS.UL_LIST]: (node, children) => {
          return (
            <S.UL>
              {children}
              <br />
            </S.UL>
          );
        },
        [BLOCKS.OL_LIST]: (node, children) => {
          return (
            <S.OL>
              {children}
              <br />
            </S.OL>
          );
        },

        [BLOCKS.PARAGRAPH]: (node, children) => {
          return (
            <>
              <S.Paragraph>{children}</S.Paragraph>
              <br />
            </>
          );
        },

        [INLINES.HYPERLINK]: (node, children) => {
          return <S.HyperLink href={node.data.uri}>{children}</S.HyperLink>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          // find the asset in the assetMap by ID
          const asset = assetMap.get(node.data.target.sys.id);

          // render the asset accordingly
          return (
            <S.EmbeddedAssetImageWrapper>
              <S.EmbeddedAssetImage src={asset.url} alt={asset.title} />
              <S.Source href={asset.description} target="blank">
                Source
              </S.Source>
            </S.EmbeddedAssetImageWrapper>
          );
        },
      },
    };
  }

  return (
    <>
      <div>
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center p-10">
            {/* <Loading /> */}
            {/* <img style={{ width: "20rem" }} src={Loader} alt=""></img> */}
          </div>
        ) : (
          <>
            <Navbar />
            <S.Container>
              <Head>
                <title>{titleForHelmet} : Interone Technologies</title>
                <meta
                  name="description"
                  content=" We expertise in MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack : Interone Technologies"
                />
                <meta
                  property="og:title"
                  content={`${titleForHelmet} : Interone Technologies`}
                />
                <link
                  rel="canonical"
                  href={`https://interone.io/blogs/${slugUrl}`}
                />
                <meta
                  name="image"
                  property="og:image"
                  content={`${data?.blogCollection?.items[0].image.url}`}
                  data-react-helmet="true"
                />
                <meta
                  property="og:image:secure_url"
                  content={`${data?.blogCollection?.items[0].image.url}`}
                />
                {/* <meta
                  property="og:image:alt"
                  content={`${data?.blogCollection?.items[0].image.title}`}
                /> */}
                {/* <meta data-rh="true" property="og:image:width" content="1200" />
                <meta data-rh="true" property="og:image:height" content="630" /> */}
                <meta
                  name="description"
                  property="og:description"
                  data-react-helmet="true"
                  content="We expertise in ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
                />
                <meta data-rh="true" property="og:locale" content="en_US" />
                <meta
                  data-rh="true"
                  property="og:site_name"
                  content="Interone Technologies"
                />
                <meta
                  name="keywords"
                  content={`${slugUrl}: Interone , Interone Technologies, blogs, interone, Mobile App, Web Development,MERN,MEAN,RoR,Javascript Development,ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack & Digital Transformation services`}
                />
                <meta property="fb:app_id" content="1336266720493586" />
                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content={`https://interone.io/blogs/${slugUrl}`}
                />
                <meta
                  property="twitter:card"
                  content={`${data?.blogCollection?.items[0].image.title}`}
                />
                <meta
                  property="twitter:url"
                  content={`https://interone.io/blogs/${slugUrl}`}
                />
                <meta
                  property="twitter:title"
                  content="Interone Technologies : Mobile App | Javascript Development Company in USA | India."
                />
                <meta
                  property="twitter:description"
                  content={`${data?.blogCollection?.items[0].image.title}`}
                />
                <meta
                  property="twitter:image"
                  content={`${data?.blogCollection?.items[0].image.url}`}
                />
              </Head>
              <S.BlogWrapper>
                <S.Title>{data?.blogCollection?.items[0].title}</S.Title>
                <S.LikeShare>
                  <iframe
                    title="Interone Technologies"
                    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Finterone.io%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=1336266720493586"
                    style={{
                      width: "120",
                      height: "65",
                      border: "none",
                      overflow: "hidden",
                      scrolling: "no",
                      frameborder: "0",
                      allowfullscreen: "true",
                      allow:
                        "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                    }}
                  ></iframe>
                </S.LikeShare>
                <S.ProfileWrapper>
                  <S.SocialMedia>
                    <S.Icon>
                      <Link
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://interone.io/blogs/${slugUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkedIn />
                      </Link>
                    </S.Icon>
                    <S.Icon>
                      <Link
                        href={`https://www.facebook.com/sharer.php?u=https://interone.io/blogs/${slugUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FacebookIcon />
                      </Link>
                    </S.Icon>
                    <S.Icon>
                      <Link
                        href={`https://twitter.com/intent/tweet?url=https://interone.io/blogs/${slugUrl}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Twitter />
                      </Link>
                    </S.Icon>
                  </S.SocialMedia>
                </S.ProfileWrapper>
                <S.ImageWrapper className="border border-gold rounded-lg p-2">
                  <S.Image
                    src={data?.blogCollection?.items[0].image.url}
                    alt={data?.blogCollection?.items[0].image.title}
                  />
                </S.ImageWrapper>
                <S.Content>
                  {documentToReactComponents(
                    data?.blogCollection?.items[0].description.json,
                    renderOptions(
                      data?.blogCollection?.items[0].description.links
                    )
                  )}
                </S.Content>
              </S.BlogWrapper>
              <S.QuestionWrapper>
                <S.Question>
                  <S.QuestionText>
                    <p> Have A Question ? We Are Happy to Help</p>
                  </S.QuestionText>
                  <S.RouteButton onClick={() => router.push("/", "/contact-us", { shallow: true })}>
                    <AnimatedButton buttonname="Contact Us">
                      Contact Us
                    </AnimatedButton>
                  </S.RouteButton>
                </S.Question>
              </S.QuestionWrapper>

              <Footer marginLeftZero />
            </S.Container>
          </>
        )}
      </div>
    </>
  );
};
export default BlogDetails;

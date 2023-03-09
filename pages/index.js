import * as S from "../components/navbar.styles";
import { useState } from "react";
import IOIcon from "../public/images/io-icon.webp";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

import Service from "./service/index";
import Industries from "./industry";
import Technologies from "./technology";
import Blogs from "./blogs/index";
import Hero from "./home";
import Contact from "./contact-us";
import Customers from "./customer";
import Image from "next/image";
import { InMemoryCache } from "@apollo/client";

const Index = (props) => {
  const [nav, setNav] = useState(false);
  const service = props.services;
  const hero = props.hero;
  const industry = props.industries;
  const customer = props.customers;
  const custData = props.custTechnologies;
  const blog = props.blogs;
  const contact = props.contact;
  const footerData = props.footer;

  const {
    home,
    services,
    industries,
    customers,
    technologies,
    contactUs,
    careers,
    blogs,
  } = props.navbar;

  const handleClick = (e) => setNav(!nav);
  const router = useRouter();

  const handleSectionRoute = (id) => {
    router.push("/", `/${id}`, { shallow: true });
    // router.replace({ pathname: `/${id}` });
    setNav({ nav: false });
    var access = document.getElementById(id);
    access.scrollIntoView({ behavior: "smooth" }, true);
  };

  return (
    <>
      <Head>
        <title>
          Interone Technologies : Mobile App | Javascript Development Company in
          USA | India.
        </title>
        <link rel="canonical" href="https://interone.io/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://interone.io/logo192.png" />
        <meta property="og:site_name" content="Interone Technologies" />
        <meta
          name="description"
          content="Interone Technologies:Leading Mobile & Web app development company in USA and India. Expertise in MEAN,MERN,UI/UX,ROR,DevOps & Digital Transformation services."
        />
        <meta
          property="og:title"
          content="Interone Technologies: Mobile & Web Development Services Company in India and USA"
        />
        <meta
          property="og:description"
          content="Interone Technologies:Leading mobile & web app development company in USA and India. Expertise in MEAN,MERN,UI/UX,ROR,DevOps & Digital Transformation services."
        />
        <meta property="og:url" content="https://interone.io/" />
        <meta
          name="keywords"
          content="Interone,MERN,MEAN,RoR,javascript,complete software development,mobile app development,services,customers,Interone Technologies,technology, blogs,software web development company,advanced web apps,interone bangalore,digital transformation services,full stack web development"
        />
      </Head>
      <div className="relative">
        <S.Container id="myMenu" className="fixed top-0 left-0 flex text-white">
          <div data-menuanchor="hello">
            <S.LogoWrapper1>
              <a href="/">
                <Image
                  src={IOIcon}
                  width={45}
                  height={85}
                  alt="interone"
                  unoptimized={true}
                  priority
                />
              </a>
            </S.LogoWrapper1>
          </div>

          <div data-menuanchor="hello">
            <S.LogoWrapper2>
              <a href="/">
                <Image
                  src={IOIcon}
                  width={30}
                  height={53}
                  alt="interone"
                  unoptimized={true}
                  priority
                />
              </a>
            </S.LogoWrapper2>
          </div>
          <S.NavLinksWrapper nav={nav} onClick={(e) => handleClick(e)}>
            <S.MenuList data-menuanchor="home" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("home");
                }}
              >
                {home}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="service" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("service");
                }}
              >
                {services}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="industry" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("industry");
                }}
              >
                {industries}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="customer" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("customer");
                }}
              >
                {customers}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="technology" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("technology");
                }}
              >
                {technologies}
              </S.NavLink>
            </S.MenuList>

            <S.MenuList data-menuanchor="blogs" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("blogs");
                }}
              >
                {blogs}
              </S.NavLink>
            </S.MenuList>
            <S.MenuList data-menuanchor="careers" className="active">
              <S.NavLink
                href="https://interfaceone.grovehr.com/careers/job?id=620619f560ed7100262021ce"
                target="_blank"
                onClick={(e) => {
                  setNav({ nav: false });
                }}
              >
                {careers}
              </S.NavLink>
            </S.MenuList>
            <S.MenuList data-menuanchor="contact-us" className="active">
              <S.NavLink
                onClick={() => {
                  handleSectionRoute("contact-us");
                }}
              >
                {contactUs}
              </S.NavLink>
            </S.MenuList>
          </S.NavLinksWrapper>
          <S.NavLinkContainer
            onMouseEnter={() => {}}
            onClick={(e) => {
              handleClick();
            }}
            onTouchStart={(e) => {
              handleClick(e);
            }}
            onTouchEnd={(e) => {
              handleClick(e);
            }}
          >
            <S.HanburgerIcon
              nav={nav}
              onClick={(e) => {
                handleClick(e);
              }}
              onTouchStart={(e) => {
                handleClick(e);
              }}
              onTouchEnd={(e) => {
                handleClick(e);
              }}
            ></S.HanburgerIcon>
          </S.NavLinkContainer>
        </S.Container>
        <div className="nextContainer">
          <S.Hero className="section" id="home">
            <Hero data={hero} />
          </S.Hero>

          <S.Service className="section" id="service">
            <Service data={service} />
          </S.Service>
          <S.Industry className="section" id="industry">
            <Industries data={industry} />
          </S.Industry>
          <S.Customers className="section" id="customer">
            <Customers data={customer} />
          </S.Customers>
          <S.Technology className="section" id="technology">
            <Technologies data1={custData} />
          </S.Technology>
          <S.Blogs className="section" id="blogs">
            <Blogs data={blog} />
          </S.Blogs>
          <S.Contact className="section" id="contact-us">
            <Contact data={contact} footerData={footerData} />
          </S.Contact>
        </div>
      </div>
    </>
  );
};
export default Index;

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
            navigationBarCollection {
              items {
                home
                services
                industries
                customers
                technologies
                blogs
                careers
                contactUs
              }
            }
            blogCollection(limit: 12) {
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
            customeTechnologyCollection {
              items {
                title1
                icon1 {
                  url
                }
                title1Content
                title1Image1 {
                  url
                }
                title1Image2 {
                  url
                }
                title1Image3 {
                  url
                }
                title1Image4 {
                  url
                }
                title1Image5 {
                  url
                }
                title2
                title2Content
                icon2 {
                  url
                }
                title2Image1 {
                  url
                }
                title2Image2 {
                  url
                }
                title2Image3 {
                  url
                }
                title3
                title3Content
                icon3 {
                  url
                }
                title3Image1 {
                  url
                }
                title3Image2 {
                  url
                }
                title3Image3 {
                  url
                }
                title4
                title4Content
                icon4 {
                  url
                }
                title4Image1 {
                  url
                }
                title4Image2 {
                  url
                }
                title4Image3 {
                  url
                }
              }
            }
            servicesCollection {
              items {
                sys {
                  id
                }
                icon {
                  description
                  url
                }
                heading
                description
                content
                title
              }
            }
            technologiesCollection {
              items {
                heading
                about
                language1 {
                  url
                  title
                }
                language2 {
                  url
                  title
                }
                language3 {
                  url
                  title
                }
                language4 {
                  url
                  title
                }
                language5 {
                  url
                  title
                }
              }
            }
            heroPageCollection {
              items {
                heading
                heading2
                heading3
                caption
                subtext
                border {
                  description
                  url
                }
                yellowbackground {
                  description
                  url
                }
                laptop {
                  description
                  url
                }
                smallborder {
                  description
                  url
                }
                smallyellowbackground {
                  description
                  url
                }
                smalllaptop {
                  description
                  url
                }
              }
            }
            customIndustriesCollection {
              items {
                bignumber
                smallnumber
                image {
                  title
                  description
                  contentType
                  fileName
                  size
                  url
                  width
                  height
                }
                title
                description
              }
            }
            contactCollection {
              items {
                heading
                addresstitle
                address
                contacttitle
                phonenumber
                email
                callbackTitle
              }
            }
            customCustomersCollection {
              items {
                heading
                customContent
                projects
                backImages
                frontImages
                customers
              }
            }
            footerCollection {
              items {
                facebook {
                  description
                  url
                }
                instagram {
                  description
                  url
                }
                twitter {
                  description
                  url
                }
                copyright
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
  const services = data?.servicesCollection?.items;
  const hero = data?.heroPageCollection?.items[0];
  const industries = data?.customIndustriesCollection?.items;
  const customers = data?.customCustomersCollection?.items[0];
  const technologies = data?.technologiesCollection?.items;
  const custTechnologies = data?.customeTechnologyCollection?.items[0];
  const blogs = data?.blogCollection?.items;
  const contact = data?.contactCollection?.items[0];
  const footer = data?.footerCollection?.items;
  const navbar = data?.navigationBarCollection?.items[0];

  return {
    props: {
      services,
      footer,
      hero,
      industries,
      customers,
      technologies,
      custTechnologies,
      blogs,
      contact,
      navbar,
    },
  };
}

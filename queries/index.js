import { gql } from "@apollo/client";

const mainQuery = gql`
  query {
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

    customEcommerceCollection {
      items {
        title1
        title1Content
        title1Cont1
        title2Image {
          url
        }
        title2
        title2Json
        title3
        title3Json
      }
    }

    custMpbileAppCollection {
      items {
        headding1
        image1 {
          url
        }
        title2
        title2Content
        title2Cont1
        title3
        imageKey {
          url
        }
        title4
        title4Content
        title5
        title5Content
        mobileappJson
        title6
        title6Content
        title6Cont1
        title7
        title7Image {
          url
        }
        title8
        title8Content
        title8Image {
          url
        }
      }
    }
    customeWebDevelopmentCollection {
      items {
        title1
        title1Content
        title1Image {
          url
        }
        title2
        title2Content
      }
    }
    custTestingServiceCollection {
      items {
        title1
        title1Content
        title2
        title2SubContent
        title2Content
        title3
        title3Content
        title3SubContent
        testingCard
        testingImage {
          url
        }
      }
    }
    customDevopsCollection {
      items {
        title1
        title1Content
        title1Image {
          url
        }
        title2
        title2Content
        title2Content1
        title2Image {
          url
        }
        title3
        title3Image {
          url
        }
        title4
        title4Content
        title4Card
        title5
        title5H1
        title5Content
        title5Image {
          url
        }
        title6
        title6Content
        title6Content1
        title6Image {
          url
        }
        title7
        title7Content
        title7Image {
          url
        }
        title8
        title8Content
        title8Image {
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
    customServiceCollection {
      items {
        uiTitle
        uiContent
        methodology
        methodologyContent
        uiCards
        uximage {
          title
          url
        }
        methodologyImage {
          title
          url
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
    industriesCollection {
      items {
        title
        image {
          description
          url
        }
      }
    }
    customersCollection {
      items {
        heading
        content
        buttonname
        image {
          description
          url
        }
        borderimage {
          description
          url
        }
        smallimage {
          description
          url
        }
        smallborderimage {
          description
          url
        }
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
    blogCollection(limit: 4) {
      items {
        title
        description {
          json
        }
        image {
          title
          url
        }
      }
    }
  }
`;

const testingService = gql`
  query ($params: String!) {
    custTestingServiceCollection(where: { title: $params }) {
      items {
        title1
        title1Content
        title2
        title2SubContent
        title2Content
        title3
        title3Content
        title3SubContent
        testingCard
        testingImage {
          url
        }
      }
    }
  }
`;

const eCommerce = gql`
  query ($params: String!) {
    customEcommerceCollection(where: { title: $params }) {
      items {
        title1
        title1Content
        title1Cont1
        title2Image {
          url
        }
        title2
        title2Json
        title3
        title3Json
      }
    }
  }
`;
const webDevelopment = gql`
  query ($params: String!) {
    customeWebDevelopmentCollection(where: { title: $params }) {
      items {
        title1
        title1Content
        title1Image {
          url
        }
        title2
        title2Content
      }
    }
  }
`;
const serviceContent = gql`
  query ($params: String!) {
    servicesCollection(where: { title: $params }) {
      items {
        title
        header
        content
      }
    }
  }
`;

const customService = gql`
  query ($params: String!) {
    customServiceCollection(where: { title: $params }) {
      items {
        uiTitle
        uiContent
        methodology
        methodologyContent
        uiCards
        uximage {
          title
          url
        }
        methodologyImage {
          title
          url
        }
      }
    }
  }
`;
const devopsService = gql`
  query ($params: String!) {
    customDevopsCollection(where: { title1: $params }) {
      items {
        title1
        title1Content
        title1Image {
          url
        }
        title2
        title2Content
        title2Content1
        title2Image {
          url
        }
        title3
        title3Image {
          url
        }
        title4
        title4Content
        title4Card
        title5
        title5H1
        title5Content
        title5Image {
          url
        }
        title6
        title6Content
        title6Content1
        title6Image {
          url
        }
        title7
        title7Content
        title7Image {
          url
        }
        title8
        title8Content
        title8Image {
          url
        }
      }
    }
  }
`;

const customerContent = gql`
  query {
    customersCollection {
      items {
        content
        image {
          title
          url
        }
      }
    }
  }
`;

const detailedServices = gql`
  query ($params: String!) {
    servicesCollection(where: { title: $params }) {
      items {
        title
        header
        details
        describe
      }
    }
  }
`;
const detailedTechnology = gql`
  query ($params: String!) {
    technologiesCollection(where: { heading: $params }) {
      items {
        heading
        about
        benifits
        reasons
        main
        language
      }
    }
  }
`;
const mobileDevelopment = gql`
  query ($params: String!) {
    custMpbileAppCollection(where: { title: $params }) {
      items {
        headding1
        image1 {
          url
        }
        title2
        title2Content
        title2Cont1
        title3
        imageKey {
          url
        }
        title4
        title4Content
        title5
        title5Content
        mobileappJson
        title6
        title6Content
        title6Cont1
        title7
        title7Image {
          url
        }
        title8
        title8Content
        title8Image {
          url
        }
      }
    }
  }
`;

const blogSlug=gql`
query ($slugUrl: String) {
  blogCollection(
    limit: 12
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
`

export {
  blogSlug,
  customService,
  eCommerce,
  mobileDevelopment,
  testingService,
  mainQuery,
  serviceContent,
  customerContent,
  detailedServices,
  detailedTechnology,
  devopsService,
  webDevelopment,
};

import UiWebPage from "@/components/common/UIpage";
import createApolloClient from "@/lib/apolloClient";
import { mainQuery } from "@/queries";

const ServiceId = (props) => {
  const data = props.service;
  const data1 = props.custService;
  const data2 = props.webTech;
  const data3 = props.testing;
  const data4 = props.devops;
  const data5 = props.mobile;
  const data6 = props.ecom;
  return (
    <>
      <UiWebPage
        data={data}
        data1={data1}
        data2={data2}
        data3={data3}
        data4={data4}
        data5={data5}
        data6={data6}
      />
    </>
  );
};
export default ServiceId;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "Testing Services" },
      },
      {
        params: { id: "E-Commerce Services" },
      },
      {
        params: { id: "DevOps Services" },
      },
      {
        params: { id: "Mobile Development" },
      },
      {
        params: { id: "Web Development" },
      },
      {
        params: { id: "UI & UX Design" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = createApolloClient();
  const { data } = await client.query({
    query: mainQuery,
    variables: { params: params.id },
  });
  const service = data?.servicesCollection?.items;
  const custService = data?.customServiceCollection?.items[0];
  const webTech = data?.customeWebDevelopmentCollection?.items[0];
  const testing = data?.custTestingServiceCollection?.items[0];
  const devops = data?.customDevopsCollection?.items[0];
  const mobile = data?.custMpbileAppCollection?.items[0];
  const ecom = data?.customEcommerceCollection?.items[0];

  return {
    props: {
      service,
      custService,
      testing,
      webTech,
      devops,
      mobile,
      ecom,
    },
  };
}

import { gql, useQuery } from "@apollo/client";
import React from "react";
import * as S from "./footer.styles";
function Footer({ marginLeftZero }) {
  const mainQuery = gql`
    query {
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
  `;
  const { loading, data } = useQuery(mainQuery);
  return (
    <>
      {loading ? (
        <h1 className="text-white ">Loading Footer Data</h1>
      ) : (
        <S.Container>
          {/* <S.IconWrapper marginLeftZero={marginLeftZero}>
            <S.SvgIcon>
              <a
                href="https://www.facebook.com/Interfaceone.io"
                target="blank"
                rel="noreferrer"
              >
                <img
                  src={data?.footerCollection?.items[0]?.facebook?.url}
                  alt={data?.footerCollection?.items[0]?.facebook?.description}
                />
              </a>
            </S.SvgIcon>

            <S.SvgIcon>
              <a
                href="https://twitter.com/interfaceone"
                target="blank"
                rel="noreferrer"
              >
                <img
                  src={data?.footerCollection?.items[0]?.twitter?.url}
                  alt={data?.footerCollection?.items[0]?.twitter?.description}
                />
              </a>
            </S.SvgIcon>
            <S.SvgIcon>
              <img
                src={data?.footerCollection?.items[0]?.instagram?.url}
                alt={data?.footerCollection?.items[0]?.instagram?.description}
              />
            </S.SvgIcon>
          </S.IconWrapper> */}
          <S.Rights>
            &#169;&nbsp;{new Date().getFullYear()}&nbsp;
            {data?.footerCollection?.items[0]?.copyright}
          </S.Rights>
        </S.Container>
      )}
    </>
  );
}

export default Footer;

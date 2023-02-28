import React from "react";
import * as S from "./BlogCard.styles";
import Link from "next/link";
import Image from "next/image";

const BlogCard = (props) => {
  const { blog } = props;


  return (
    <Link
      className="link"
      href={`/blogs/${blog.slugUrl}`}
      target="_self"
      style={{ minWidth: "14%", maxHeight: "100%" }}
    >
      <S.Card>
        <S.ImageWrapper>
          <Image src={blog?.image?.url} alt={blog?.image?.title} width={500} height={500}/>
        </S.ImageWrapper>
        <S.Details>
          <S.Title>{blog.title}</S.Title>
          <S.Description>
            {blog?.description.json.content[0].content[0].value}
          </S.Description>
        </S.Details>
      </S.Card>
    </Link>
  );
};

export default BlogCard;

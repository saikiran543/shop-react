import React from "react";
import styled from "styled-components";
import { categories } from "../pages/Data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../Responsive";
const Container = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  background-color: #f9f1f1;
  ${mobile({ paddingTop: "0px", flexDirection: "column" })};
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

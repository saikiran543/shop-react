import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 350px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div`
  opacity:0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.2);
  cursor:pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity:1;
    transform: scale(1.1);
    width:90%;
    height:90%;
    border-radius:30%;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

import React from "react";
import styled from "styled-components";
import ContentContainer from "../../containers/pages/Home/ContentContainer";
import { Header } from "../../layout";

const WholeWrapper = styled.div`
  height:auto;
  width:  100%;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  /* border : 3px blue solid; */
`


const Main = ({
    user,
    setUser
}) => {
    return (
        <>

            <WholeWrapper>
                <Header ></Header>
                <ContentContainer user={user} setUser={setUser} />

            </WholeWrapper>
        </>
    )
};

export default Main;

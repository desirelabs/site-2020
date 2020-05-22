import React from "react";
import Grid from "@material-ui/core/Grid";
import { Wrapper } from "./ui/Section";
import styled from "styled-components";

const SlideWrapper = styled.div`
  flex-grow: 1;
  max-width: 1170px;
  min-height: calc(100vh - 75px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Align = "center" | "left" | "right";

const Side = styled.div<{ align?: Align }>`
  @media screen and (max-width: 700px) {
    ${({ align }) => align && `text-align: ${align}`};
  }
`;

export const Left = ({ children, align }: { children: any; align?: Align }) => (
  <Side align={align}>{children}</Side>
);

export const Right = ({
  children,
  align
}: {
  children: any;
  align?: Align;
}) => <Side align={align}>{children}</Side>;

export const Slide = ({ children }) => {
  return (
    <SlideWrapper>
      <Grid container alignItems="center" justify="center">
        <Grid item md={6} xs={12}>
          <Wrapper>
            {React.Children.map(children, (child, i) => {
              return (
                child.type === Left && React.cloneElement(child, { key: i })
              );
            })}
          </Wrapper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Wrapper>
            {React.Children.map(children, (child, i) => {
              return (
                child.type === Right && React.cloneElement(child, { key: i })
              );
            })}
          </Wrapper>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
};
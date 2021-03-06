import React from "react";
import { Text } from "../components/ui/Text";
import { Illustration } from "../components/ui/Illustration";
import { Layout } from "../components/ui/Layout";
import { PageTitle } from "../components/ui/Title";
import { Slide, Left, Right } from "../components/Slide";
import { Link } from "gatsby";
import { H3Light } from "../components/ui/Headings";

export default () => (
  <Layout isClear={false}>
    <Slide>
      <Left>
        <PageTitle>Oups !</PageTitle>
        <H3Light>La page demandée n’existe pas…</H3Light>
        <Text>
          Pas de panique ! Vous pouvez toujours jeter un œil sur les pages
          suivantes :
          <ul>
            <li>
              <Link to="/">
                <a>Accueil</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a>Nos services</a>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <a>Articles</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          {/* <p>Ou bien effectuer une recherche :</p>
          <SearchTool /> */}
        </Text>
      </Left>
      <Right>
        <Illustration
          src="/img/404.svg"
          width="100%"
          alt="Page de site e-commerce"
        />
      </Right>
    </Slide>
  </Layout>
);

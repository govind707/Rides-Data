/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HPage/index';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Rides Modifying App"
        defaultTitle="Rides Modifying App"
      >
        <meta name="description" content="Rides Modifying application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/adminpanel/homepage" component={HomePage} />
        <Route path="/adminpanel/drivers" component={HomePage} />
        <Route path="/adminpanel/riders" component={HomePage} />
        <Route path="/adminpanel/rides" component={HomePage} />
        <Route path="/adminpanel/addrides" component={HomePage} />
        <Route path="/adminpanel/addrider" component={HomePage} />
        <Route path="/adminpanel/adddriver" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}

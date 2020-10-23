import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// page component
import Loading from './views/LoadingPage/LoadingPage'
import HeaderSection from './views/Header/HeaderSection';
import LandingPage from './views/Landing/LandingPage'
import SmartKeywordPage from './views/ProductSelectionAndDevelopment/SmartKeyword/SmartKeywordPage';
import KeywordSearchPage from './views/ProductSelectionAndDevelopment/KeywordSearch/KeywordSearchPage';
import FooterSection from './views/Footer/FooterSection';

function App() {
  return (
    <Suspense fallback={(<Loading />)}>
      <HeaderSection />
      <div className="contentContainer">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/smartkeyword" component={SmartKeywordPage} />
          <Route exact path="/keyword" component={KeywordSearchPage} />
        </Switch>
      </div>
      <FooterSection />
    </Suspense>
  );
}

export default App;

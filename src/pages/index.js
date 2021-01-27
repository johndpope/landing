import * as React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Hero from '../components/Hero';

const IndexPage = () => {
  return (
    <main>
      <SEO 
        title="Welcome"
        keywords={['web3', 'advertising', 'marketplace', 'webxr']}
      />
      <Header />
      <Hero />
    </main>
  );
}

export default IndexPage;

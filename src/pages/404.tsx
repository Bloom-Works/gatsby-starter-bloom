import React from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { Content } from '../types/siteMetadata';

import content from './index.content.yml';

export default function NotFoundPage() {
  return (
     <Layout content={content as Content}>
      <Seo title="404: Not found" />
      <div>
        <h2>404</h2>
        <p>Not found</p>
      </div>
    </Layout>
  );
}

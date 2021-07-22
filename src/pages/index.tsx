import React from 'react';
import Layout from '../components/layout/Layout';
import { Content } from '../types/siteMetadata';

import content from './index.content.yml';

export default function IndexPage() {
  return (
    <Layout content={content as Content}>
      <h1>Dashboard</h1>
    </Layout>
  );
}

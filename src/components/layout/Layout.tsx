import React, { ReactNode } from 'react';
import { Content } from '../../types/siteMetadata';

import Header from '../header/Header';
import SEO from '../seo/Seo';

type LayoutProps = {
  children: ReactNode;
  content?: Content;
};

export default function Layout({ children, content }: LayoutProps) {
  return (
    <div>
      <SEO title="Dashboard" />
      <Header siteTitle={content?.home?.title ?? ''} />
      <main>{children}</main>
    </div>
  );
}

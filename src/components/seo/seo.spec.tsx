import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import Seo from './Seo';

describe('SEO component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: 'Dashboard',
          description: 'Testing description',
          author: 'foo',
        },
      },
    });
  });

  it('renders the tests correctly', () => {
    const mockTitle = 'All posts | Dashboard';
    const mockDescription = 'Testing description';

    render(<Seo title="All posts" />);
    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags.length).toBe(8);
  });
});

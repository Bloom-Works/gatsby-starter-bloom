import React from 'react';
import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import Seo from './Seo';
import { mockStaticData } from '../../../test/test-utils';
import { SiteData } from '../../types/siteMetadata';

describe('SEO component', () => {
  beforeAll(() => {
    mockStaticData<SiteData>({
      site: {
        siteMetadata: {
          title: 'Dashboard',
        },
      },
    });
  });

  it('renders the tests correctly', () => {
    const mockTitle = 'All posts | Dashboard';

    render(<Seo title="All posts" />);
    const { title, metaTags } = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags.length).toBe(8);
  });
});

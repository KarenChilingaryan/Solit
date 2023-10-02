// pages/sitemap.xml.js

import { create } from 'xmlbuilder2';

const generateSitemapXml = (pages) => {
  const urlset = create({
    version: '1.0',
    encoding: 'UTF-8',
  }, {
    urlset: {
      '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: pages.map(page => ({
        loc: `https://solit-llc.com${page.path}`,
        lastmod: page.lastmod,
      })),
    },
  });

  return urlset.end({ prettyPrint: true });
};

const Sitemap = () => null;

const getRoutes = (element, name) => {
  let pages = [];
  for (let j = 0; j < element.length; j++) {
    const rout = element[j];
    pages.push({ path: `/${name}/${rout}`, lastmod: '2023-04-30' })
  }
  return pages
}

export async function getServerSideProps({ res }) {
  // Define your pages and last modification dates
  let pages = [
    { path: '/', lastmod: '2023-06-02' },
    { path: '/what-we-do', lastmod: '2023-04-30' },
    { path: '/services', lastmod: '2023-04-30' },
    { path: '/about-us', lastmod: '2023-04-30' },
    { path: '/careers', lastmod: '2023-04-30' },
    { path: '/blog', lastmod: '2023-04-30' },
    { path: '/contact-us', lastmod: '2023-04-30' },
    { path: '/discuss-project', lastmod: '2023-04-30' },
    { path: '/discuss-project-stack', lastmod: '2023-04-30' },
  ];

  const data = await fetch('https://whispering-fortress-66675-0103fc0f3dc9.herokuapp.com/api/v1/slug_list/');
  const dynamicRoutes = await data.json();
  
  const project_from_portfolio_slug = dynamicRoutes.project_from_portfolio_slug.replaceAll('[', '').replaceAll(']', '').replaceAll("'", '').split(', ')
  const what_we_do_detail_slug = dynamicRoutes.what_we_do_detail_slug.replaceAll('[', '').replaceAll(']', '').replaceAll("'", '').split(', ')
  const service_detail_slug = dynamicRoutes.service_detail_slug.replaceAll('[', '').replaceAll(']', '').replaceAll("'", '').split(', ')
  const blog_detail_slug = dynamicRoutes.blog_detail_slug.replaceAll('[', '').replaceAll(']', '').replaceAll("'", '').split(', ')
  const current_job_opening_detail_slug = dynamicRoutes.current_job_opening_detail_slug.replaceAll('[', '').replaceAll(']', '').replaceAll("'", '').split(', ')
  
  pages = [...pages, ...getRoutes(project_from_portfolio_slug, 'portfolio')]
  pages = [...pages, ...getRoutes(what_we_do_detail_slug, 'what-we-do')]
  pages = [...pages, ...getRoutes(service_detail_slug, 'services')]
  pages = [...pages, ...getRoutes(blog_detail_slug, 'blog')]
  pages = [...pages, ...getRoutes(current_job_opening_detail_slug, 'careers')]

  const xml = generateSitemapXml(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;

import ResourcesPage from '../src/pages/resources/ResourcesPage';

// Enable static generation with incremental static regeneration
// This ensures the page is built at build time and revalidated periodically
export async function getStaticProps() {
  return {
    props: {},
    // Revalidate every 60 seconds in production (ISR)
    revalidate: 60,
  };
}

export default ResourcesPage;

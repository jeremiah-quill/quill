const features = [
  { name: "feature 1", slug: "1" },
  { name: "feature 2", slug: "2" },
  { name: "feature 3", slug: "3" },
];

export default function featurePage({ feature }) {
  return (
    <div>
      <h1>{feature.name}</h1>
      <p>Feature</p>
    </div>
  );
}

export async function getStaticPaths() {
  // const features = fetch("/data/features.json").then((res) => res.json());

  const paths = features.map((feature) => ({
    params: { slug: feature.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const features = fetch("/data/features.json").then((res) => res.json());

  const feature = features.find((feature) => feature.slug === params.slug);

  return {
    props: {
      feature,
    },
  };
}

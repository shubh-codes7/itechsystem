import ServiceDetailClient from './ServiceDetailClient';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/services/${slug}`);
  const service = await res.json();
  
  return {
    title: service?.seo?.title || service?.title || "Service",
    description: service?.seo?.description || service?.fullDescription || "",
    keywords: service?.seo?.keywords || service?.title || "",
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  
  return <ServiceDetailClient slug={slug} />;
}
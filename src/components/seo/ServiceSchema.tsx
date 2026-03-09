import { JsonLd } from "./JsonLd";

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string[];
}

const DEFAULT_AREAS = ["Lévis", "Saint-Nicolas", "Charny", "Breakeyville", "Saint-Jean-Chrysostome", "Saint-Romuald"];

export const ServiceSchema = ({
  name,
  description,
  provider = "Entretien JCG",
  areaServed,
}: ServiceSchemaProps) => {
  const areas = areaServed ?? DEFAULT_AREAS;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
          "@type": "LocalBusiness",
          name: provider,
        },
        areaServed: areas.map((area) => ({
          "@type": "City",
          name: area,
        })),
      }}
    />
  );
};

import { JsonLd } from "./JsonLd";

export const LocalBusinessSchema = () => {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Entretien JCG",
        telephone: "+14182346807",
        url: "https://entretienjcg.ca",
        address: {
          "@type": "PostalAddress",
          streetAddress: "8965 boul. Guillaume-Couture",
          addressLocality: "Lévis",
          addressRegion: "QC",
          postalCode: "G6V 9G9",
          addressCountry: "CA",
        },
        areaServed: [
          { "@type": "City", name: "Lévis" },
          { "@type": "City", name: "Saint-Nicolas" },
          { "@type": "City", name: "Charny" },
          { "@type": "City", name: "Breakeyville" },
          { "@type": "City", name: "Saint-Jean-Chrysostome" },
          { "@type": "City", name: "Saint-Romuald" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "16:00",
          },
        ],
      }}
    />
  );
};

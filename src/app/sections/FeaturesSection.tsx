import Image from "next/image";
import { Benefits } from "./Benefits";

type ChildSections = {
  icon: string;
  title: string;
  description: string;
  image: string;
  features: Features[];
};

type Features = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesSectionProps = {
  title: string;
  description: string;
  childSections: ChildSections[];
};

export const FeaturesSection = ({ title, description, childSections }: FeaturesSectionProps) => {
  return (
    <main className="flex flex-col items-start">
      <header className="w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4" aria-label={title}>{title}</h1>
        <p className="text-gray-600 mb-8" aria-label={description}>{description}</p>
      </header>
      <article className="flex flex-col lg:flex-row items-start w-full justify-around">
        <aside className="max-w-xl p-5">
          <Benefits features={childSections[0].features} description={childSections[0].description} title={childSections[0].title} />
        </aside>
        <aside className="w-full lg:w-1/2 relative min-h-[320px] md:h-[50vh]">
          <Image
            src={childSections[0].image}
            alt={description}
            aria-label={description}
            fill
            className="object-contain"
          />
        </aside>
      </article>
      <article className="flex flex-col lg:flex-row items-end w-full justify-around">
        <aside className="w-full lg:w-1/3 relative min-h-[320px] md:h-[50vh]">
          <Image
            src={childSections[1].image}
            alt={description}
            aria-label={description}
            fill
            className="object-contain"
          />
        </aside>
        <aside className="max-w-xl p-5">
          <Benefits features={childSections[1].features} description={childSections[1].description} title={childSections[1].title} />
        </aside>

      </article>
    </main>
  );
};

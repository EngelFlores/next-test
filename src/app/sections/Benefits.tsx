import Image from "next/image";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type BenefitsProps = {
  description: string,
  title: string,
  features: Feature[];
};

export const Benefits = ({ features, title, description }: BenefitsProps) => {
  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" aria-label={title}>{title}</h2>
      <p className="text-gray-600 mb-8" aria-label={description}>{description}</p>

      <ul className="space-y-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="bg-[#6366F1] p-2 rounded-lg shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                aria-label={feature.title}
                width={24}
                height={24}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900" aria-label={feature.title}>{feature.title}</h3>
              <p className="text-gray-600" aria-label={feature.description}>{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

import { Button } from "../components/Button";
import { Input } from "../components/Input";

type NewsletterSectionProps = {
  title: string;
  description: string;
  formContent: {
    fieldLabel: string;
    ctaLabel: string;
    notice: string;
  };
};

export const NewsletterSection = ({ title, description, formContent }: NewsletterSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-around px-5 p-7">
      <div className="lg:max-w-xl mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-base text-gray-600">{description}</p>
      </div>

      <form className="w-full max-w-md lg:ml-8">
        <div className="flex gap-2 flex-col lg:flex-row">
          <Input type="email" tabIndex={0} placeholder={formContent.fieldLabel} required={true} />
          <Button tabIndex={0} type="submit" variant="dark">
            {formContent.ctaLabel}
          </Button>
        </div>
        <p
          className="mt-2 text-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: formContent.notice }}
        />
      </form>
    </section>
  );
};

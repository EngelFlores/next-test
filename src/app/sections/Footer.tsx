import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { InlineLink } from "../components/InlineLink";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { LinkedIn } from "../icons/LinkedIn";

type Options = {
  name: string;
  link: string;
};

type Newsletter = {
  title: string;
  description: string;
  form: {
    fieldLabel: string;
    ctaLabel: string;
  };
};

type Links = {
  name: string;
  link: string;
};

type NavMenus = {
  title: string;
  links: Links[];
};

type SocialLinks = {
  facebook: string;
  instagram: string;
  linkedin: string;
};

type FooterProps = {
  languageTitle: string,
  currencies: Options[],
  languages: Options[],
  newsletter: Newsletter,
  navMenus: NavMenus[],
  socialLinks: SocialLinks,
};

export const Footer: React.FC<FooterProps> = ({ currencies, languages, languageTitle, newsletter, navMenus, socialLinks }) => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-700 p-10">
        {navMenus?.map((menu, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-400 uppercase mb-4">{menu.title}</h4>
            <ul className="space-y-2">
              {menu.links.map((link, index) => (
                <li key={index}><InlineLink variant="dark" href={link.link} >{link.name}</InlineLink></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4 w-full max-w-xs col-span-2 sm:col-span-3 md:col-span-1">
          <h4 className="font-semibold text-gray-400 uppercase mb-4">{languageTitle}</h4>
          <Select options={languages}></Select>
          <Select options={currencies}></Select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 border-b border-gray-700 p-10">
        <div>
          <h4 className="font-semibold text-gray-400 uppercase">{newsletter.title}</h4>
          <p className="text-gray-400 mb-4">{newsletter.description}</p>
        </div>
        <form className="flex w-full max-w-md gap-2 flex-col md:flex-row">
          <Input type="email" tabIndex={0} placeholder={newsletter.form.fieldLabel} className="bg-white" />
          <Button tabIndex={0}>{newsletter.form.ctaLabel}</Button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs p-10">
        <p>© 2020 Workflow, Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href={socialLinks.facebook}><span className="sr-only">Facebook</span><Facebook /></a>
          <a href={socialLinks.instagram}><span className="sr-only">Instagram</span><Instagram /></a>
          <a href={socialLinks.linkedin}><span className="sr-only">LinkedIn</span><LinkedIn /></a>
        </div>
      </div>
    </footer>
  );
};

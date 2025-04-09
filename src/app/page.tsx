import { headers } from 'next/headers';
import { Navbar } from "./components/NavBar"
import { HeroSection } from "./sections/Hero"
import { ClientsSection } from "./sections/ClientsSection"
import { WhatYouNeedSection } from "./sections/WhatYouNeed"
import { FeaturesSection } from "./sections/FeaturesSection"
import { NewsletterSection } from "./sections/Newsletter"
import { Footer } from "./sections/Footer"
import { getItems } from "./services/getItems"

export async function generateMetadata() {
  const items = await getItems();
  const seo = items.seo;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    },
    openGraph: {
      title: seo.og?.title,
      description: seo.og?.description,
      url: seo.canonical,
      images: [
        {
          url: seo.og?.image,
          width: 1200,
          height: 630,
          alt: seo.og?.title,
        },
      ],
    },
    twitter: {
      title: seo.twitter?.title,
      description: seo.twitter?.description,
      images: [seo.twitter?.image],
    },
  };
}

export default async function Home() {
  const items = await getItems()
  const headersList = headers();
  const pathname = headersList.get('x-current-path') || '/';
  console.log(items)

  return (
    <div className="">
      <Navbar
        navItems={items.header.nav.links}
        signInLink={items.header.signInLink}
        signUpLink={items.header.signUpLink}
        pathname={pathname}
      />
      <HeroSection
        src={items.hero.backgroundImage}
        title={items.hero.title}
        description={items.hero.description}
        buttons={items.hero.ctas}
      />
      <ClientsSection
        title={items.clientsSection.title}
        clients={items.clientsSection.clients}
      />
      <WhatYouNeedSection
        title={items.whatYouNeedSection.title}
        description={items.whatYouNeedSection.description}
        items={items.whatYouNeedSection.items}
      />
      <FeaturesSection
        title={items.featuresSection.title}
        description={items.featuresSection.description}
        childSections={items.featuresSection.childSections}
      />
      <NewsletterSection
        title={items.newsletterSection.title}
        description={items.newsletterSection.description}
        formContent={items.newsletterSection.form}
      />
      <Footer
        currencies={items.footer.languagesAndCurrencies.currencies}
        languages={items.footer.languagesAndCurrencies.languages}
        languageTitle={items.footer.languagesAndCurrencies.title}
        newsletter={items.footer.newsletter}
        navMenus={items.footer.navMenus}
        socialLinks={items.footer.socialLinks}
      />
    </div>
  );
}

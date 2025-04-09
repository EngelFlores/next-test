import { LogoCard } from "../components/LogoCard"

interface ClientLogo {
  logo: string
  name: string
}

interface ClientsSectionProps {
  clients: ClientLogo[],
  title: string,
}

export function ClientsSection({ clients, title }: ClientsSectionProps) {
  return (
    <section className="py-12 px-4 lg:px-20">
      <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8" aria-label={title}>{title}</p>

      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {clients.map((client, index) => (
          <LogoCard key={index} iconUrl={client.logo} label={client.name} ariaLabel={client.name} />
        ))}
      </div>
    </section>
  )
}

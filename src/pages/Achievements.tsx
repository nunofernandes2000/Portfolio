import { Award, Briefcase, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';

const experience = [
  {
    role: 'Técnico de Informática (Voluntariado)',
    organisation: 'Município de Alter do Chão',
    place: 'Alter do Chão, Portugal',
    period: 'Julho 2025 - Agosto 2025, Agosto 2026',
    description: 'Manutenção preventiva e suporte técnico ao parque informático municipal, diagnóstico de hardware/software, instalação de sistemas operativos e apoio direto aos utilizadores.'
  },
  {
    role: 'Operador / Vigilante na Rede Nacional de Postos de Vigia',
    organisation: 'GNR - Guarda Nacional Republicana',
    place: 'Alter Pedroso, Alter do Chão',
    period: 'Julho 2025 - Outubro 2025',
    description: 'Prevenção e deteção de incêndios florestais, monitorização contínua de áreas florestais, comunicação rádio com centrais de comando e emissão de relatórios.'
  },
  {
    role: 'Full-Stack Developer e Técnico de Suporte Informático',
    organisation: 'A MatosCar',
    place: 'Portalegre, Portugal',
    period: 'Fevereiro 2023 - Julho 2023',
    description: 'Desenvolvimento de aplicações web full-stack internas e suporte técnico operacional a equipamentos, infraestruturas de rede local e utilizadores.'
  }
];

const education = [
  {
    title: 'Licenciatura em Engenharia Informática',
    institution: 'Instituto Politécnico de Portalegre (ESTGD - IPP)',
    place: 'Portalegre, Portugal',
    period: 'Outubro 2023 - Previsto 2026',
    description: 'Finalista, com projeto final em curso.'
  },
  {
    title: 'Erasmus+ Blended Intensive Programme',
    institution: 'HELHa - Haute École Louvain en Hainaut',
    place: 'Bélgica',
    period: 'Março 2025',
    description: 'Tangible Interfaces for VR Applications.'
  },
  {
    title: 'CTeSP em Desenvolvimento para a Web e Dispositivos Móveis',
    institution: 'Instituto Politécnico de Portalegre (ESTGD - IPP)',
    place: 'Portalegre, Portugal',
    period: 'Setembro 2021 - Outubro 2023',
    description: 'Formação especializada em desenvolvimento de aplicações web e dispositivos móveis.'
  },
  {
    title: 'Ensino Secundário - Ciências e Tecnologias',
    institution: 'Escola Básica e Secundária Padre Manuel Álvares',
    place: 'Ribeira Brava, Portugal',
    period: 'Concluído em 2019',
    description: 'Curso Científico-Humanístico de Ciências e Tecnologias.'
  }
];

function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 border-b border-gray-700 pb-4">
      <span className="text-blue-400">{icon}</span>
      <h2 className="text-2xl font-bold">{children}</h2>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">Percurso</p>
          <h1 className="text-4xl font-bold md:text-5xl">Experiência, formação e distinções</h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Um resumo organizado do meu percurso profissional e académico, das certificações e das distinções alcançadas.
          </p>
        </header>

        <div className="space-y-16">
          <section>
            <SectionHeading icon={<Briefcase className="h-6 w-6" />}>Experiência profissional</SectionHeading>
            <div className="space-y-6 border-l border-gray-700 pl-6 md:pl-8">
              {experience.map((item) => (
                <article key={item.role} className="relative rounded-lg bg-gray-900 p-6">
                  <span className="absolute -left-[33px] top-7 h-3 w-3 rounded-full border-2 border-gray-900 bg-blue-400 md:-left-[41px]" />
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-medium text-blue-300">{item.organisation}</p>
                      <p className="text-sm text-gray-500">{item.place}</p>
                    </div>
                    <p className="shrink-0 text-sm text-gray-400 md:text-right">{item.period}</p>
                  </div>
                  <p className="mt-4 leading-relaxed text-gray-400">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading icon={<GraduationCap className="h-6 w-6" />}>Educação e formação académica</SectionHeading>
            <div className="grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <article key={item.title} className="rounded-lg border border-gray-700 bg-gray-900/70 p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <GraduationCap className="h-6 w-6 shrink-0 text-emerald-400" />
                    <p className="text-right text-sm text-gray-400">{item.period}</p>
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 font-medium text-blue-300">{item.institution}</p>
                  <p className="text-sm text-gray-500">{item.place}</p>
                  <p className="mt-4 text-gray-400">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading icon={<Award className="h-6 w-6" />}>Certificações e distinções</SectionHeading>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-lg bg-gray-900 p-6">
                <ShieldCheck className="mb-4 h-7 w-7 text-blue-400" />
                <h3 className="text-xl font-bold">Cisco Networking Academy: CCNA</h3>
                <p className="mt-3 leading-relaxed text-gray-400">Introduction to Networks, Switching, Routing and Wireless Essentials, Enterprise Networking, Security and Automation.</p>
              </article>
              <article className="rounded-lg bg-gray-900 p-6">
                <Trophy className="mb-4 h-7 w-7 text-amber-400" />
                <h3 className="text-xl font-bold">Prémio Ilustratown</h3>
                <p className="mt-3 leading-relaxed text-gray-400">Melhor Aluno Diplomado do CTeSP em Desenvolvimento para a Web e Dispositivos Móveis, no ano letivo 2022/2023.</p>
              </article>
            </div>
            <div className="mt-5 rounded-lg border border-gray-700 p-6">
              <h3 className="text-lg font-bold">Formação complementar</h3>
              <p className="mt-3 leading-relaxed text-gray-400">IA Generativa, Cyber Security Incident Response, Boas Práticas de Cibersegurança, Introdução à Blockchain, Técnicas de Desenvolvimento de Software, Princípios de Programação, Fundamentos de Programação e Masterclass YOLO e Visão Computacional (IPP).</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
  UserRound
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { TechStack } from '../components/TechStack';
import myPhoto from '../assets/my-photo.jpeg';

const heroHeadline = 'Construo software com curiosidade e intenção.';

const highlights = [
  { value: '2026', label: 'Licenciatura prevista' },
  { value: '3+', label: 'Experiências profissionais' },
  { value: '5', label: 'Projetos em destaque' }
];

const focusAreas = [
  'Aplicações web full-stack',
  'Arquitetura de software',
  'Sistemas móveis e redes'
];

export function Home() {
  const [typedHeadline, setTypedHeadline] = useState('');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedHeadline(heroHeadline);
      return;
    }

    let characterIndex = 0;
    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedHeadline(heroHeadline.slice(0, characterIndex));

      if (characterIndex === heroHeadline.length) {
        window.clearInterval(typingTimer);
      }
    }, 55);

    return () => window.clearInterval(typingTimer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <section className="relative container mx-auto px-4 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Disponível para novos desafios
            </div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              <Terminal className="h-4 w-4" /> Engenharia Informática · Full-Stack
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              <span aria-label={heroHeadline}>
                {typedHeadline.includes('curiosidade') ? (
                  <>
                    {typedHeadline.split('curiosidade')[0]}
                    <span className="text-blue-400">curiosidade</span>
                    {typedHeadline.split('curiosidade')[1]}
                  </>
                ) : (
                  typedHeadline
                )}
                <span aria-hidden="true" className="ml-1 inline-block h-[0.9em] w-1 animate-pulse bg-blue-400 align-[-0.08em]" />
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Sou Nuno da Costa Fernandes, estudante finalista de Engenharia Informática e developer focado em transformar problemas reais em experiências digitais claras, robustas e úteis.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/cv/CV_Nuno_2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <FileText className="h-4 w-4" />
                Ver currículo
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/cv/CV_Nuno_2026.pdf"
                download="CV_Nuno_2026.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-3 font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Download className="h-4 w-4" />
                Descarregar CV
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-400" /> Alter do Chão, Portugal</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-400" /> ticnunofernandes@gmail.com</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div className="absolute -inset-3 rounded-2xl border border-blue-400/20" />
            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900/90 p-3 shadow-2xl shadow-blue-950/30">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 pb-3 text-xs text-slate-500">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> nuno-fernandes.tsx</span>
                <span>01</span>
              </div>
              <div className="p-3">
                <img src={myPhoto} alt="Nuno da Costa Fernandes" className="aspect-[4/5] w-full object-cover object-center grayscale-[15%]" />
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-slate-800 p-3 text-sm">
                <div>
                  <p className="text-slate-500">Base</p>
                  <p className="mt-1 font-medium text-slate-200">Portalegre, PT</p>
                </div>
                <div>
                  <p className="text-slate-500">Stack</p>
                  <p className="mt-1 font-medium text-slate-200">Java · React · SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-slate-800 py-6 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="border-slate-800 px-5 py-3 first:pl-0 sm:border-r last:border-0">
              <p className="text-3xl font-bold text-white">{highlight.value}</p>
              <p className="mt-1 text-sm text-slate-500">{highlight.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-slate-800 bg-slate-950/45">
        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              <Sparkles className="h-4 w-4" /> Perfil
            </p>
            <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">Código que liga pessoas, sistemas e ideias.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-400">
              Entre o desenvolvimento de aplicações e o suporte técnico, procuro perceber o problema antes de escolher a tecnologia. Gosto de aprender depressa, colaborar e entregar soluções que se conseguem manter.
            </p>
            <a href="/achievements" className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-300 transition-colors hover:text-blue-200">
              Conhecer o meu percurso <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div key={area} className="group border-l border-slate-700 pl-5 transition-colors hover:border-blue-400">
                <span className="text-sm text-slate-600">0{index + 1}</span>
                <h3 className="mt-12 text-lg font-semibold leading-snug text-slate-200 group-hover:text-white">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300"><UserRound className="h-4 w-4" /> Ferramentas</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">A minha caixa de ferramentas</h2>
          </div>
          <a href="/projects" className="inline-flex items-center gap-2 font-semibold text-slate-300 transition-colors hover:text-white">Explorar projetos <ArrowUpRight className="h-4 w-4" /></a>
        </div>
        <TechStack />
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Vamos conversar</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Tem um problema interessante para resolver?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:ticnunofernandes@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 font-semibold text-slate-900 transition-colors hover:bg-blue-50"><Mail className="h-4 w-4" /> Enviar email</a>
            <a href="https://www.linkedin.com/in/nuno-fernandes-164910238/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-md border border-blue-300/30 px-4 py-2.5 font-semibold text-blue-100 transition-colors hover:border-blue-200 hover:bg-blue-400/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="https://github.com/nunofernandes2000" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 rounded-md border border-blue-300/30 px-4 py-2.5 font-semibold text-blue-100 transition-colors hover:border-blue-200 hover:bg-blue-400/10"><Github className="h-4 w-4" /> GitHub</a>
            <a href="tel:+351961448430" aria-label="Telefone" className="inline-flex items-center gap-2 rounded-md border border-blue-300/30 px-4 py-2.5 font-semibold text-blue-100 transition-colors hover:border-blue-200 hover:bg-blue-400/10"><Phone className="h-4 w-4" /> Telefone</a>
          </div>
        </div>
      </section>
    </div>
  );
}

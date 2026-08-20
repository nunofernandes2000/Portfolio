import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { Achievement } from '../components/Achievement';

export function Achievements() {
  const achievements = [
    {
      title: "Técnico de Informática (Voluntariado)",
      description: "Município de Alter do Chão · Julho 2025 - Agosto 2025, Agosto 2026. Manutenção preventiva, suporte técnico, diagnóstico de hardware/software, instalação de sistemas operativos e apoio aos utilizadores.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Operador / Vigilante na RNPV",
      description: "GNR - Guarda Nacional Republicana · Alter Pedroso, Alter do Chão · Julho 2025 - Outubro 2025. Monitorização de áreas florestais, comunicação rádio e emissão de relatórios sob coordenação da GNR.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Full-Stack Developer e Técnico de Suporte Informático",
      description: "A MatosCar · Portalegre · Fevereiro 2023 - Julho 2023. Desenvolvimento de aplicações web full-stack internas e suporte a equipamentos, infraestruturas de rede local e utilizadores.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Licenciatura em Engenharia Informática",
      description: "Instituto Politécnico de Portalegre · Portalegre · Outubro 2023 - Previsto 2026. Finalista, com projeto final em curso.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Erasmus+ BIP: Interfaces Tangíveis para Aplicações de Realidade Virtual",
      description: "HELHa - Haute École Louvain en Hainaut · Bélgica · Março 2025.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "CTeSP em Desenvolvimento para a Web e Dispositivos Móveis",
      description: "Instituto Politécnico de Portalegre · Portalegre · Setembro 2021 - Outubro 2023.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Certificação CCNA",
      description: "Cisco Networking Academy: Introduction to Networks, Switching, Routing and Wireless Essentials, Enterprise Networking, Security and Automation.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Prémio Ilustratown",
      description: "Melhor Aluno Diplomado do CTeSP em Desenvolvimento para a Web e Dispositivos Móveis · Ano letivo 2022/2023.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Percurso profissional e académico</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
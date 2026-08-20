import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { Achievement } from '../components/Achievement';

export function Achievements() {
  const achievements = [
    {
      title: "IT Technician | Municipality of Alter do Chao",
      description: "Jul 2025 - Aug 2026. Hardware and software diagnosis, operating-system installation, network support, and assistance to service users.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Operator | National Road Patrol Network",
      description: "Jul 2025 - Oct 2025. Monitored forest-fire incidents and coordinated communications with emergency and field teams.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Full-Stack Developer & IT Support",
      description: "Feb 2023 - Jul 2023 at A MatosCar, developing internal web applications and providing technical support for network equipment and users.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "CTeSP in Web & Mobile Development",
      description: "Instituto Politecnico de Portalegre, completed in 2023, focused on web application development and mobile devices.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Cisco Networking Academy: CCNA",
      description: "Training in networking fundamentals, switching, routing, wireless essentials, enterprise networking, security, and automation.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience & Qualifications</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}
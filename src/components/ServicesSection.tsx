import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  HeadphonesIcon, 
  GraduationCap, 
  CloudUpload,
  Users,
  Clock
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: "Instalação e Configuração",
      description: "Instalação completa dos sistemas, configuração inicial e testes de funcionamento.",
      features: ["Visita técnica", "Instalação no local", "Configuração personalizada", "Testes completos"]
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico 24/7",
      description: "Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana.",
      features: ["WhatsApp", "Telefone", "Acesso remoto", "Chat online"]
    },
    {
      icon: GraduationCap,
      title: "Treinamento de Equipe",
      description: "Capacitação completa da sua equipe para utilizar todos os recursos do sistema.",
      features: ["Treinamento presencial", "Videoaulas", "Manual digital", "Certificação"]
    },
    {
      icon: CloudUpload,
      title: "Backup e Segurança",
      description: "Serviços de backup automático e soluções de segurança para proteger seus dados.",
      features: ["Backup na nuvem", "Criptografia", "Recuperação rápida", "Monitoramento"]
    },
    {
      icon: Users,
      title: "Consultoria Empresarial",
      description: "Análise dos processos e consultoria para otimização da operação comercial.",
      features: ["Análise de processos", "Relatórios", "Recomendações", "Acompanhamento"]
    },
    {
      icon: Clock,
      title: "Manutenção Preventiva",
      description: "Manutenção regular dos equipamentos para garantir funcionamento perfeito.",
      features: ["Visitas programadas", "Limpeza técnica", "Atualizações", "Relatórios técnicos"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Suporte completo para garantir que sua operação funcione perfeitamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de Suporte Técnico?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para ajudar você a resolver qualquer problema e otimizar sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Falar com Suporte
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Agendar Visita Técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
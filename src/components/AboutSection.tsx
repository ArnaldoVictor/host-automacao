import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, MapPin } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clientes Atendidos" },
    { icon: Clock, number: "10+", label: "Anos de Experiência" },
    { icon: Award, number: "24/7", label: "Suporte Disponível" },
    { icon: MapPin, number: "3", label: "Estados Atendidos" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4">Sobre a Host Automação</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformando Negócios com
              <span className="text-primary"> Tecnologia</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Host Automação é uma empresa especializada em soluções de automação comercial, 
                oferecendo sistemas completos para supermercados, lojas e estabelecimentos comerciais 
                de todos os portes.
              </p>
              <p>
                Nossa missão é modernizar e otimizar a operação dos nossos clientes através de 
                tecnologia de ponta, oferecendo sistemas de PDV, gestão empresarial, integração 
                de pagamentos e suporte técnico especializado.
              </p>
              <p>
                Com mais de 10 anos de experiência no mercado, já atendemos centenas de clientes, 
                sempre com foco na qualidade, inovação e excelência no atendimento.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <Card className="p-4 bg-gradient-to-br from-card to-accent/10">
                <h4 className="font-semibold text-foreground mb-2">Nossa Missão</h4>
                <p className="text-sm text-muted-foreground">
                  Fornecer soluções tecnológicas que transformem e otimizem a operação comercial dos nossos clientes.
                </p>
              </Card>
              <Card className="p-4 bg-gradient-to-br from-card to-accent/10">
                <h4 className="font-semibold text-foreground mb-2">Nossa Visão</h4>
                <p className="text-sm text-muted-foreground">
                  Ser a principal referência em automação comercial, reconhecida pela inovação e qualidade.
                </p>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6 text-center bg-gradient-to-br from-card to-accent/10 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Certificações e Parcerias
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <Badge variant="outline" className="text-sm">Certificado Receita Federal</Badge>
            <Badge variant="outline" className="text-sm">Partner Microsoft</Badge>
            <Badge variant="outline" className="text-sm">Homologado SEFAZ</Badge>
            <Badge variant="outline" className="text-sm">ISO 9001</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
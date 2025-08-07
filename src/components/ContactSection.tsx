import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890",
      description: "Seg a Sex, 8h às 18h"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "(11) 98765-4321",
      description: "Atendimento 24h"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@hostautomacao.com.br",
      description: "Resposta em até 2h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Tecnologia, 123",
      description: "São Paulo, SP"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar a melhor solução para seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para esclarecer suas dúvidas e apresentar as melhores 
                soluções em automação comercial para seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-4 bg-gradient-to-br from-card to-accent/10 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-sm">
                          {info.title}
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {info.content}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/10">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
                <p className="text-primary font-medium">Suporte de emergência: 24h</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-gradient-to-br from-card to-accent/10">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interesse</Label>
                  <Input id="interest" placeholder="Ex: Sistema PDV para supermercado" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva suas necessidades e como podemos ajudar..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
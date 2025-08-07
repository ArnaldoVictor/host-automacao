import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/10 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Automação Completa para{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Seu Negócio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sistemas de automação, produtos e suporte técnico especializado para supermercados, 
              lojas e estabelecimentos comerciais. Modernize sua operação com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-3">
                Conhecer Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up">
            <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sistema PDV</h3>
              <p className="text-muted-foreground">
                Caixas registradoras com leitura de código de barras, emissão de cupons fiscais e gestão completa.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pagamentos</h3>
              <p className="text-muted-foreground">
                Integração com máquinas de cartão, PIX e todas as formas de pagamento modernas.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gestão</h3>
              <p className="text-muted-foreground">
                Controle de estoque, relatórios de vendas e análises para otimizar sua operação.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
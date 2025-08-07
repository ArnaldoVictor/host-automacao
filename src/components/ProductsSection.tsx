import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Smartphone, 
  Printer, 
  Wifi, 
  Shield, 
  Zap,
  Check
} from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Monitor,
      title: "Terminal PDV Completo",
      description: "Sistema completo com tela touch, leitor de código de barras, gaveta de dinheiro e impressora térmica integrada.",
      features: ["Tela Touch 15\"", "Leitor 2D", "Gaveta Automática", "Impressora 80mm"],
      price: "A partir de R$ 2.899",
      badge: "Mais Vendido"
    },
    {
      icon: Smartphone,
      title: "PDV Mobile",
      description: "Solução móvel para vendas com tablet ou smartphone, ideal para delivery e vendas externas.",
      features: ["App Android/iOS", "Leitor Bluetooth", "Impressora Portátil", "4G/WiFi"],
      price: "A partir de R$ 899",
      badge: "Novidade"
    },
    {
      icon: Printer,
      title: "Impressoras Fiscais",
      description: "Impressoras térmicas e matriciais homologadas pela Receita Federal para emissão de cupons fiscais.",
      features: ["SAT Fiscal", "Guilhotina", "USB/Ethernet", "Garantia 2 anos"],
      price: "A partir de R$ 699",
      badge: null
    },
    {
      icon: Wifi,
      title: "Sistema de Gestão",
      description: "Software completo de gestão empresarial com controle de estoque, vendas e relatórios gerenciais.",
      features: ["Cloud/Local", "Multi-lojas", "Relatórios", "Backup Auto"],
      price: "A partir de R$ 299/mês",
      badge: "Premium"
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Certificados digitais, antivírus empresarial e soluções de backup para proteger seus dados.",
      features: ["Certificado A1/A3", "Antivírus", "Backup Cloud", "Suporte 24h"],
      price: "A partir de R$ 199/mês",
      badge: null
    },
    {
      icon: Zap,
      title: "Automação Comercial",
      description: "Soluções personalizadas de automação para otimizar processos e aumentar a produtividade.",
      features: ["Projeto Custom", "Integração API", "Treinamento", "Suporte VIP"],
      price: "Sob Consulta",
      badge: "Personalizado"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em automação comercial para modernizar e otimizar sua operação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/10">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{product.description}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-lg font-semibold text-primary mb-3">{product.price}</p>
                    <Button className="w-full" variant="outline">
                      Solicitar Orçamento
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
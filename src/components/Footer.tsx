import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Host Automação
            </h3>
            <p className="text-muted-foreground text-sm">
              Soluções completas em automação comercial para modernizar e otimizar sua operação empresarial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Início
              </a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Produtos
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Serviços
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Sobre
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contato
              </a>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Produtos</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Sistema PDV
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                PDV Mobile
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Impressoras Fiscais
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Sistema de Gestão
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Automação Comercial
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(11) 98765-4321</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contato@hostautomacao.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Rua da Tecnologia, 123<br />
                  São Paulo, SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Host Automação. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
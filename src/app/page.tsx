"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Laptop, Server, Smartphone } from "lucide-react";

export default function Home() {

  const handleClick = () => {
    window.location.href = "https://github.com/pedrinnirdep/ivory-devops";
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">IndianSolutions</h1>
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#devops" className="hover:underline">
                  DevOps
                </a>
              </li>
              <li>
                <a href="#mobile-first" className="hover:underline">
                  Mobile-First
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
            <Button variant="outline" className="md:hidden">
              Menu
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section
          id="hero"
          className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Teste estágio DevOps – IVORYIT
            </h2>
            <p className="text-xl mb-8">
              Fluxo de CI/CD utilizando Next.Js - Sonar Cloud - Github Actions - Github Pages
            </p>
            <Button onClick={() => handleClick()} size="lg">Acessar Github</Button>
          </div>
        </section>

        <section id="sobre" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nós</h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              Somos especialistas em desenvolvimento de soluções tecnológicas
              modernas, focando em práticas de DevOps e design Mobile-First para
              entregar produtos de alta qualidade e eficiência.
            </p>
          </div>
        </section>

        <section id="devops" className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">DevOps</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Server className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Integração Contínua
                </h3>
                <p>
                  Automatizamos o processo de integração de código para garantir
                  entregas rápidas e confiáveis.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Laptop className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Entrega Contínua</h3>
                <p>
                  Implementamos pipelines de entrega contínua para implantações
                  suaves e frequentes.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <Server className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Monitoramento</h3>
                <p>
                  Utilizamos ferramentas avançadas de monitoramento para
                  garantir o desempenho e a confiabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mobile-first" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Design Mobile-First
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="md:w-1/2">
                <Smartphone className="w-24 h-24 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Prioridade Mobile
                </h3>
                <p className="text-center">
                  Desenvolvemos pensando primeiro nos dispositivos móveis,
                  garantindo uma experiência perfeita em todas as telas.
                </p>
              </div>
              <div className="md:w-1/2">
                <ul className="list-disc pl-6">
                  <li className="mb-2">
                    Design responsivo para todos os dispositivos
                  </li>
                  <li className="mb-2">
                    Otimização de performance para conexões móveis
                  </li>
                  <li className="mb-2">
                    Interfaces intuitivas e fáceis de usar
                  </li>
                  <li>Adaptação perfeita para diferentes tamanhos de tela</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Entre em Contato
            </h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Seu nome" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Seu e-mail" />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 IndianSolutions. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

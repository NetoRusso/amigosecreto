# Gerador de Amigo Secreto Online

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSEU_USUARIO%2FAMIGO_SECRETO) ![Next](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![StyledComponents](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)



Organize seu amigo secreto de forma fácil e divertida com este gerador online!

![Image](https://github.com/user-attachments/assets/46e5eb9d-f34c-4d16-a1e8-c53b53967d17)

[Acesse](https://amigosecreto-blue-iota.vercel.app/)

![Image](https://github.com/user-attachments/assets/e0865db1-8594-41bf-a7e8-02881b50c43f)

## Funcionalidades

*   **Criação de Grupos:** Defina o nome do seu grupo de amigos.
*   **Cadastro de Participantes:** Adicione os participantes com nome, telefone e e-mail.
*   **Definição de Valor do Presente:** Estabeleça um valor mínimo e máximo para os presentes.
*   **Sorteio Automático:** O sistema realiza o sorteio de forma aleatória, garantindo que ninguém tire a si mesmo.
*   **Envio de E-mails:** Notificação automática para cada participante com o nome do seu amigo secreto.
*   **Validação de Domínio:** Garante que os e-mails inseridos sejam válidos.
*   **Interface Intuitiva:** Design moderno e fácil de usar.

## Tecnologias Utilizadas

*   [Next.js](https://nextjs.org/) - Framework React para produção.
*   [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
*   [Styled Components](https://styled-components.com/) - Para estilização com CSS-in-JS.
*   [Nodemailer](https://nodemailer.com/) - Módulo para envio de e-mails.
*   [validateDomain] - Validação de MX para os dominios de recebimento de email.
*   [Date-fns](https://date-fns.org/) - Biblioteca para manipulação de datas.
*   [Typescript](https://www.typescriptlang.org/) - Superset do javascript com tipagem estática.

## Como Rodar Localmente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/NetoRusso/amigosecreto.git
    ```
2.  Instale as dependências:
    ```bash
    cd AMIGO_SECRETO
    npm install
    ```
3.  Configure as variáveis de ambiente:
    *   Crie um arquivo `.env.local` na raiz do projeto.
    *   Adicione suas credenciais do Gmail (ou outro serviço de e-mail):
        ```
        EMAIL_USER=seu_email@gmail.com
        EMAIL_PASS=sua_senha
        ```
    *   **Importante:** Ative na sua conta Google (se estiver usando Gmail) uma senha de aplicativo.
4.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5.  Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Roadmap Completo para o Projeto "Gerador de Amigo Secreto Online"

Este roadmap detalha as etapas para o desenvolvimento, otimização e lançamento bem-sucedido do seu projeto "Gerador de Amigo Secreto Online". Ele abrange desde a estrutura básica até o marketing e manutenção contínua.

**Fase 1: MVP - Produto Mínimo Viável (Concluída)**

*   [x] Estrutura básica do Next.js.
*   [x] Componentes de Step, Group, Participants, RangeValue, Date, ModalOpen (Contextos).
*   [x] Criação dos componentes: Titulo animado, Botoes estilizados e outros componentes
*   [x] Implementação das APIs de validação de domínio e envio de e-mail.
*   [x] Estilização básica com Styled Components.
*   [x] Fluxo básico de criação de grupo, adição de participantes e definição do valor do presente.
*   [x] Sorteio do amigo secreto (lógica principal).
*   [x] Envio de e-mails com Nodemailer.
*   [x] Validação básica de e-mail.

**Fase 2: Otimização SEO e Metadados**

*   [x] Implementação de metadados básicos (title, description, keywords) no `app/layout.tsx`.
*   [x] Geração e validação de imagens para Open Graph e Twitter Cards.
*   [x] Configuração do `Robots.txt`.
*   [x] Geração do `Sitemap.xml`.
*   [x] Integração do Google Analytics e/ou ferramentas de análise de tráfego.
*   [x] Implementação do SEO nos Componentes e Paginas

**Fase 3: Melhorias de UX/UI e Funcionalidades Adicionais**

*   [x] **Design Responsivo:** Garantir que o site seja totalmente responsivo em todos os dispositivos.
*   [x] **Acessibilidade:** Otimizar o site para acessibilidade (WCAG).
*   [x] **Validação de Formulários:** Validação mais robusta dos campos de formulário (nome, telefone, e-mail).
*   [x] **Confirmação de E-mail:** Adicionar um passo de confirmação de e-mail (double opt-in).
*   [ ] **Personalização de E-mail:** Permitir que os usuários personalizem o texto do e-mail (com um limite de caracteres).
*   [ ] **Opção de Compartilhamento Social:** Adicionar botões de compartilhamento para redes sociais.
*   [x] **Listagem dos Participantes:** Mostrar listagem dos participantes com detalhes
*   [x] **Edição do Participante:** Possibilitar a edição dos participantes
*   [x] **Exclusão do participante:** Possibilitar a exclusão do participante
    

## Futuras atualizações:

*  [ ] Implementação de testes do Frontend e de implementação.

*  [ ] Criação de dashboard com Cadastro e banco de dados

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor

Pensado, Criado e Desenvolvido por [Neto Russo](http://netorusso.onrender.com/)!

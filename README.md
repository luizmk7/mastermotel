# Mastermotel — publicação na Vercel

Site React + Vite exportado do AI Studio.

## Publicar

1. Extraia o ZIP no computador.
2. No repositório luizmk7/mastermotel, envie o conteúdo extraído para a branch main (Add file → Upload files).
3. package.json, package-lock.json, index.html, vercel.json e a pasta src precisam estar na raiz. Não envie somente o ZIP nem uma pasta envolvendo todo o projeto.
4. Confirme o commit. Na Vercel, confira a conexão com esse repositório e a branch main.
5. Em Settings → Build and Deployment, deixe Root Directory na raiz (campo vazio). vercel.json configura Vite, npm ci, npm run build e saída dist.
6. Aguarde a implantação do novo commit. Se não iniciar automaticamente, crie uma implantação do commit mais recente da main. Reexecutar um commit antigo continuará usando os arquivos antigos.

## Executar localmente

Use Node.js 22.12 ou superior compatível com as dependências.

```sh
npm ci
npm run build
npm run dev
```

O site atual não usa a API Gemini e não precisa de GEMINI_API_KEY para compilar.

## Dados do site

O conteúdo original mantém o nome Motel Lumière Premium. O destino de reservas em src/App.tsx é 5585999999999; substitua pelo WhatsApp real antes de receber clientes.

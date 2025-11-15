# 🚀 Guia de Deployment - Hospedagem Grátis

## ✅ Seu site está pronto para hospedar!

---

## 📦 O que você tem:

- ✅ Landing page profissional premium
- ✅ Formulário de contato funcionando com EmailJS
- ✅ Design responsivo (mobile/desktop)
- ✅ 100% GRÁTIS para hospedar

---

## 🌐 Opção 1: Netlify (RECOMENDADO - Mais Fácil)

### Passo a Passo:

1. **Criar conta no Netlify**
   - Acesse: https://www.netlify.com/
   - Clique em "Sign Up" (pode usar GitHub, Google ou Email)

2. **Fazer Deploy do Site**
   
   **Opção A: Drag & Drop (Mais Fácil)**
   - No seu computador, vá para `/app/frontend`
   - Execute: `yarn build`
   - Isso criará uma pasta `build`
   - No Netlify, arraste a pasta `build` para a área de deploy
   - Pronto! Seu site estará no ar em segundos

   **Opção B: Via Git (Recomendado)**
   - Crie um repositório no GitHub com seu código
   - No Netlify, clique em "New site from Git"
   - Conecte seu repositório GitHub
   - Configure:
     - **Base directory**: `frontend`
     - **Build command**: `yarn build`
     - **Publish directory**: `frontend/build`
   - Clique em "Deploy site"

3. **Configurar Variáveis de Ambiente**
   - No Netlify Dashboard, vá em: Site Settings → Environment Variables
   - Adicione as 3 variáveis:
     ```
     REACT_APP_EMAILJS_PUBLIC_KEY = bxg9A9yZYmD9BRRb1
     REACT_APP_EMAILJS_SERVICE_ID = service_h42p7j4
     REACT_APP_EMAILJS_TEMPLATE_ID = template_0zx56pk
     ```
   - Clique em "Redeploy" para aplicar as mudanças

4. **Configurar Domínio (Opcional)**
   - Netlify dá um domínio grátis: `seu-site.netlify.app`
   - Você pode customizar o nome em: Domain Settings
   - Ou conectar seu próprio domínio

**✅ Pronto! Seu site estará no ar!**

---

## 🌐 Opção 2: Vercel

### Passo a Passo:

1. **Criar conta no Vercel**
   - Acesse: https://vercel.com/
   - Clique em "Sign Up" (recomendo usar GitHub)

2. **Fazer Deploy**
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Configure:
     - **Framework Preset**: Create React App
     - **Root Directory**: `frontend`
     - **Build Command**: `yarn build`
     - **Output Directory**: `build`

3. **Adicionar Environment Variables**
   - Em Project Settings → Environment Variables
   - Adicione:
     ```
     REACT_APP_EMAILJS_PUBLIC_KEY = bxg9A9yZYmD9BRRb1
     REACT_APP_EMAILJS_SERVICE_ID = service_h42p7j4
     REACT_APP_EMAILJS_TEMPLATE_ID = template_0zx56pk
     ```

4. **Deploy**
   - Clique em "Deploy"
   - Seu site estará no ar em minutos!

**URL**: `seu-site.vercel.app`

---

## 🌐 Opção 3: GitHub Pages

### Passo a Passo:

1. **Preparar o código**
   - No seu repositório, adicione no `package.json`:
     ```json
     "homepage": "https://seu-usuario.github.io/seu-repositorio"
     ```

2. **Instalar gh-pages**
   ```bash
   cd /app/frontend
   yarn add gh-pages
   ```

3. **Adicionar scripts no package.json**
   ```json
   "scripts": {
     "predeploy": "yarn build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Build com variáveis de ambiente**
   - Crie arquivo `.env.production` na pasta `frontend`:
     ```
     REACT_APP_EMAILJS_PUBLIC_KEY=bxg9A9yZYmD9BRRb1
     REACT_APP_EMAILJS_SERVICE_ID=service_h42p7j4
     REACT_APP_EMAILJS_TEMPLATE_ID=template_0zx56pk
     ```

5. **Deploy**
   ```bash
   yarn deploy
   ```

6. **Ativar GitHub Pages**
   - No GitHub, vá em: Settings → Pages
   - Source: `gh-pages branch`
   - Save

**URL**: `https://seu-usuario.github.io/seu-repositorio`

---

## 📁 Estrutura de Arquivos para Deploy

```
seu-repositorio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── styles/
│   │   │   └── Home.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env (com as chaves EmailJS)
├── EMAILJS_SETUP_GUIDE.md
└── DEPLOYMENT_GUIDE.md
```

---

## 🔧 Antes de Fazer Deploy

### Checklist:

- ✅ EmailJS configurado e testado
- ✅ Todas as 3 variáveis de ambiente definidas
- ✅ Build funciona localmente (`yarn build`)
- ✅ Testou o formulário de contato
- ✅ Verificou que email chega em natamy.oliveira13@gmail.com

---

## 🌍 Domínio Personalizado (Opcional)

### Onde comprar domínio barato:

1. **Namecheap** - ~$8-10/ano
2. **GoDaddy** - ~$12/ano  
3. **Google Domains** - ~$12/ano

### Como conectar:

**No Netlify/Vercel:**
- Adicione o domínio nas configurações
- Configure os registros DNS fornecidos pelo provedor
- Espere 24-48h para propagação

---

## 📊 Monitoramento

### EmailJS Dashboard:
- Acesse: https://dashboard.emailjs.com/
- Veja quantos emails foram enviados
- Monitore sua quota (200 emails/mês grátis)
- Veja status de entrega

### Analytics (Opcional):
- Google Analytics (grátis)
- Hotjar (grátis até 35 sessões/dia)

---

## 🆘 Solução de Problemas

**Problema: Build falha no deploy**
- ✅ Verifique se todas as dependências estão no package.json
- ✅ Teste `yarn build` localmente primeiro
- ✅ Verifique os logs de build no provedor

**Problema: Formulário não envia emails**
- ✅ Confirme que as variáveis de ambiente estão corretas
- ✅ Verifique no console do browser se há erros
- ✅ Teste diretamente no dashboard do EmailJS

**Problema: Site não carrega CSS/imagens**
- ✅ Verifique o campo "homepage" no package.json
- ✅ Use caminhos relativos para assets
- ✅ Clear cache do browser

---

## 💰 Custos

### Totalmente GRÁTIS:
- ✅ Hospedagem: $0 (Netlify/Vercel/GitHub Pages)
- ✅ EmailJS: $0 (200 emails/mês)
- ✅ SSL Certificate: $0 (incluído)
- ✅ Bandwidth: Ilimitado

### Opcional:
- Domínio personalizado: ~$10-15/ano
- EmailJS Pro (se precisar mais emails): $7/mês

---

## 🎉 Próximos Passos

1. ✅ Escolha uma plataforma (Recomendo Netlify)
2. ✅ Faça o deploy seguindo o guia acima
3. ✅ Teste o formulário no site live
4. ✅ Compartilhe o link do seu site!
5. ✅ (Opcional) Compre domínio personalizado

---

## 📞 Links Úteis

- **Netlify**: https://www.netlify.com/
- **Vercel**: https://vercel.com/
- **EmailJS**: https://www.emailjs.com/
- **Seu site preview**: https://oliveira-portfolio.preview.emergentagent.com

---

## ✅ Tudo Pronto!

Seu site está profissional, funcional e pronto para hospedar gratuitamente! 🚀

Boa sorte com seu negócio de tráfego digital! 💼✨

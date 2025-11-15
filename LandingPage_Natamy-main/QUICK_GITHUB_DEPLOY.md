# 🚀 Deploy Rápido via GitHub + Netlify

## Passo 1: Criar Repositório no GitHub

1. Vá para: https://github.com/new
2. Nome: `natamy-landing-page`
3. **Public**
4. NÃO marque "Initialize with README"
5. Clique **"Create repository"**

## Passo 2: Fazer Upload do Código

Você tem 2 opções:

### Opção A: Via Terminal (Recomendado)

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Natamy Oliveira Landing Page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/natamy-landing-page.git
git push -u origin main
```

### Opção B: Via Interface do GitHub

1. Na página do repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste TODA a pasta `/app` (incluindo `frontend`, `netlify.toml`, etc)
3. Commit: "Initial commit"
4. Clique **"Commit changes"**

## Passo 3: Conectar ao Netlify

1. No Netlify, clique **"Add new site"** → **"Import an existing project"**
2. Escolha **"Deploy with GitHub"**
3. Autorize o Netlify
4. Selecione o repositório `natamy-landing-page`
5. O Netlify vai detectar automaticamente o `netlify.toml`
6. Clique **"Deploy site"**

## Passo 4: Adicionar Variáveis de Ambiente

1. Vá em **Site settings** → **Environment variables**
2. Adicione:

```
REACT_APP_EMAILJS_PUBLIC_KEY = bxg9A9yZYmD9BRRb1
REACT_APP_EMAILJS_SERVICE_ID = service_h42p7j4
REACT_APP_EMAILJS_TEMPLATE_ID = template_0zx56pk
```

3. Clique **"Save"**

## Passo 5: Refazer Deploy

1. Vá em **Deploys**
2. Clique **"Trigger deploy"** → **"Deploy site"**
3. Aguarde (1-3 minutos)

✅ **Pronto! Seu site estará no ar!**

---

## Se Ainda Der Erro

Envie-me o log completo do erro e eu ajudo a corrigir!

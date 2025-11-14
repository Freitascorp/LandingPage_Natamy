# ✅ SOLUÇÃO DEFINITIVA - Deploy Netlify

## O Problema
O Netlify não está encontrando o `package.json` porque precisa do arquivo `netlify.toml` na raiz do projeto.

## Solução Rápida (Via GitHub)

### 1. Baixar o Código Completo

Você precisa baixar TODO o conteúdo de `/app` incluindo:
- `/app/frontend` (pasta com código)
- `/app/netlify.toml` (arquivo de configuração - JÁ CRIADO)

### 2. Criar Repositório GitHub

1. Acesse: https://github.com/new
2. Nome: `natamy-landing-page`
3. **Public**
4. **NÃO** marque nada
5. Clique "Create repository"

### 3. Upload via GitHub Desktop (Mais Fácil)

**Se você não tem Git instalado:**

1. Na página do repositório, clique no botão verde **"Code"**
2. Escolha **"Upload files"**
3. Arraste estas pastas/arquivos:
   - `frontend` (pasta completa)
   - `netlify.toml` (arquivo)
   - `NETLIFY_DEPLOY_GUIDE.md`
4. Escreva: "Initial commit"
5. Clique **"Commit changes"**

### 4. Deletar o Site Atual no Netlify

1. No site problemático do Netlify
2. Vá em **Site settings** → **General** (final da página)
3. Clique **"Delete site"**
4. Digite o nome do site
5. Confirme

### 5. Criar Novo Site com GitHub

1. No Netlify, clique **"Add new site"**
2. Escolha **"Import an existing project"**
3. Clique **"Deploy with GitHub"**
4. Autorize o Netlify a acessar GitHub
5. Selecione `natamy-landing-page`
6. **NÃO MUDE NADA** (o netlify.toml já tem tudo configurado)
7. Clique **"Deploy site"**

### 6. Adicionar Variáveis de Ambiente

1. Enquanto faz o primeiro build, vá em **Site settings**
2. **Environment variables** → **Add a variable**
3. Adicione UMA POR VEZ:

```
Nome: REACT_APP_EMAILJS_PUBLIC_KEY
Valor: bxg9A9yZYmD9BRRb1
```

```
Nome: REACT_APP_EMAILJS_SERVICE_ID
Valor: service_h42p7j4
```

```
Nome: REACT_APP_EMAILJS_TEMPLATE_ID
Valor: template_0zx56pk
```

### 7. Refazer Deploy

1. Vá em **Deploys**
2. Clique **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Aguarde 2-3 minutos

---

## ✅ Deve Funcionar Porque:

- `netlify.toml` na raiz define `base = "frontend"`
- Netlify vai procurar `package.json` em `/frontend`
- Build command: `yarn build`
- Publish: `frontend/build`

---

## Se AINDA Der Erro

Me envie:
1. Screenshot do erro completo
2. Confirme que o arquivo `netlify.toml` está na RAIZ do repositório GitHub (não dentro de `frontend`)

---

## Alternativa: Build Local + Deploy Manual

Se GitHub não for opção:

```bash
# No seu computador
cd /app/frontend
yarn install
yarn build

# Isso cria a pasta 'build'
```

Depois:
1. Vá para Netlify → **"Add new site"** → **"Deploy manually"**
2. Arraste APENAS a pasta `/app/frontend/build`
3. Aguarde upload
4. Adicione as variáveis de ambiente
5. Como são variáveis de BUILD TIME, você precisa fazer novo upload da pasta build DEPOIS de adicionar as variáveis

**IMPORTANTE:** Com deploy manual, cada atualização precisa de novo build + upload.

---

## Minha Recomendação

Use **GitHub** porque:
- ✅ Deploy automático a cada mudança
- ✅ Histórico de versões
- ✅ Rollback fácil
- ✅ Configuração via `netlify.toml` funciona
- ✅ Não precisa fazer build local

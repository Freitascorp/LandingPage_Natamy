# 🚀 Guia Completo de Deploy no Netlify

## 📋 Pré-requisitos
- ✅ Conta no Netlify (gratuita)
- ✅ Código do projeto pronto
- ✅ Chaves do EmailJS (já configuradas)

---

## 🎯 Passo a Passo Completo

### **Método 1: Deploy via Drag & Drop (Mais Rápido)**

#### Passo 1: Fazer Build do Projeto

No terminal, execute:

```bash
cd /app/frontend
yarn build
```

Isso criará uma pasta `build` com os arquivos otimizados.

#### Passo 2: Acessar Netlify

1. Vá para: https://www.netlify.com/
2. Clique em **"Sign Up"** (se não tiver conta) ou **"Log In"**
3. Pode usar conta Google, GitHub ou Email

#### Passo 3: Fazer Deploy

1. No dashboard do Netlify, você verá uma área que diz:
   **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**

2. Abra a pasta `/app/frontend/build` no seu computador

3. **Arraste toda a pasta `build`** para a área de drop no Netlify

4. Aguarde o upload (geralmente 30-60 segundos)

5. ✅ **Pronto!** Seu site estará no ar!

#### Passo 4: Configurar Variáveis de Ambiente

**IMPORTANTE:** O formulário não funcionará até você configurar as variáveis do EmailJS!

1. No dashboard do Netlify, clique no seu site
2. Vá em: **Site settings** → **Environment variables**
3. Clique em **"Add a variable"**
4. Adicione as 3 variáveis (UMA POR VEZ):

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

5. Clique em **"Save"** em cada uma

#### Passo 5: Refazer Deploy com as Variáveis

Como você adicionou variáveis de ambiente, precisa fazer rebuild:

1. Vá em **Deploys** (no menu do site)
2. Clique em **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Aguarde o rebuild (1-2 minutos)

#### Passo 6: Testar o Site

1. Clique no link do seu site (algo como: `https://seu-site-123abc.netlify.app`)
2. Teste o formulário de contato
3. Verifique se o email chega em natamy.oliveira13@gmail.com

---

### **Método 2: Deploy via Git (Recomendado para Atualizações Futuras)**

#### Passo 1: Criar Repositório no GitHub

1. Vá para: https://github.com/
2. Clique em **"New repository"**
3. Nome: `natamy-oliveira-landing-page` (ou o que preferir)
4. Deixe como **Public** (ou Private, funciona em ambos)
5. NÃO marque "Initialize with README"
6. Clique em **"Create repository"**

#### Passo 2: Fazer Push do Código

No terminal, execute:

```bash
cd /app
git init
git add .
git commit -m "Initial commit - Landing page Natamy Oliveira"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/natamy-oliveira-landing-page.git
git push -u origin main
```

(Substitua `SEU-USUARIO` pelo seu username do GitHub)

#### Passo 3: Conectar ao Netlify

1. No Netlify, clique em **"Add new site"** → **"Import an existing project"**
2. Escolha **"GitHub"**
3. Autorize o Netlify a acessar seu GitHub
4. Selecione o repositório `natamy-oliveira-landing-page`
5. Configure as opções de build:

```
Base directory: frontend
Build command: yarn build
Publish directory: frontend/build
```

6. Clique em **"Deploy site"**

#### Passo 4: Adicionar Variáveis de Ambiente

Siga o mesmo processo do **Método 1 - Passo 4** acima.

#### Passo 5: Refazer Deploy

Netlify fará deploy automático. Se não, faça "Trigger deploy" como no Método 1.

---

## 🎨 Customizar o Nome do Site

Por padrão, Netlify dá um nome aleatório tipo: `random-name-123.netlify.app`

Para mudar:

1. Vá em **Site settings** → **General** → **Site details**
2. Clique em **"Change site name"**
3. Digite um nome único, por exemplo: `natamy-oliveira`
4. Seu site será: `https://natamy-oliveira.netlify.app`

---

## 🌐 Adicionar Domínio Personalizado (Opcional)

### Se você tem um domínio (ex: natamyoliveira.com):

1. Vá em **Site settings** → **Domain management**
2. Clique em **"Add custom domain"**
3. Digite seu domínio: `natamyoliveira.com`
4. Siga as instruções para configurar os registros DNS

**Registros DNS necessários (no seu provedor de domínio):**

```
Tipo: A
Nome: @
Valor: 75.2.60.5

Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
```

5. Aguarde propagação DNS (até 24-48h)
6. ✅ SSL (HTTPS) será ativado automaticamente!

---

## 🔧 Solução de Problemas

### Problema: "Page Not Found" ao acessar rotas

**Solução:** Criar arquivo `_redirects` na pasta `public`:

1. Crie o arquivo: `/app/frontend/public/_redirects`
2. Adicione esta linha:

```
/*    /index.html   200
```

3. Faça rebuild e redeploy

### Problema: Formulário não envia emails

**Checklist:**
- ✅ Variáveis de ambiente configuradas no Netlify?
- ✅ Fez rebuild após adicionar variáveis?
- ✅ Chaves do EmailJS estão corretas?
- ✅ Verificou spam no email natamy.oliveira13@gmail.com?

### Problema: Build falha

**Possíveis causas:**
- Dependências não instaladas
- Erro de sintaxe no código
- Caminho errado no build command

**Solução:**
1. Verifique os logs de build no Netlify
2. Teste `yarn build` localmente primeiro
3. Corrija os erros apontados

---

## 📊 Monitoramento

### Analytics (Opcional)

**Netlify Analytics (Pago):**
- $9/mês
- Privado, sem cookies
- Dados em tempo real

**Google Analytics (Grátis):**
1. Crie conta em: https://analytics.google.com/
2. Obtenha o ID de rastreamento (ex: G-XXXXXXXXXX)
3. Adicione no `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🚀 Atualizações Futuras

### Se usou Método 1 (Drag & Drop):
1. Faça as alterações no código
2. Execute `yarn build` novamente
3. Arraste a nova pasta `build` para o Netlify
4. Pronto!

### Se usou Método 2 (Git):
1. Faça as alterações no código
2. Commit e push:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```
3. Netlify fará deploy automático!
4. ✅ Pronto!

---

## 💰 Custos

### Netlify Free Tier (Inclui):
- ✅ 100 GB bandwidth/mês
- ✅ 300 minutos de build/mês
- ✅ SSL grátis
- ✅ Deploy ilimitados
- ✅ Domínio .netlify.app grátis

**Só paga se exceder os limites ou quiser recursos premium.**

---

## 📞 Links Úteis

- **Netlify Dashboard:** https://app.netlify.com/
- **Documentação:** https://docs.netlify.com/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Status do Site:** Veja no dashboard do Netlify

---

## ✅ Checklist Final

Antes de considerar completo:

- [ ] Site no ar e acessível
- [ ] Formulário de contato funcionando
- [ ] Email chegando em natamy.oliveira13@gmail.com
- [ ] QR Code do WhatsApp visível e correto
- [ ] Todas as páginas de serviços funcionando
- [ ] Design responsivo (teste no mobile)
- [ ] Links de navegação funcionando
- [ ] SSL ativo (https://)
- [ ] Nome do site customizado (opcional)

---

## 🎉 Parabéns!

Seu site profissional está no ar e pronto para gerar leads! 🚀

**Próximos passos sugeridos:**
1. Teste tudo no celular
2. Compartilhe o link nas redes sociais
3. Adicione o link na bio do Instagram
4. Use o link nas suas campanhas de tráfego pago

Boa sorte com seu negócio! 💼✨

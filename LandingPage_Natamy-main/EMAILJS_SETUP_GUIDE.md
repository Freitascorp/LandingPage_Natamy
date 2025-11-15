# EmailJS Setup Guide (FREE Email Integration)

## 🎯 What is EmailJS?
EmailJS is a free service that allows you to send emails directly from your website without a backend server. Perfect for contact forms!

## 📧 Free Tier Benefits:
- ✅ 200 emails per month
- ✅ No credit card required
- ✅ Works with any hosting (Netlify, Vercel, GitHub Pages, etc.)
- ✅ No backend server needed

---

## 🚀 Step-by-Step Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (top right)
3. Create a free account (no credit card needed)

### Step 2: Add Email Service
1. After logging in, go to **Email Services** section
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the instructions to connect your email (natamy.oliveira13@gmail.com)
5. **Copy the SERVICE ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to **Email Templates** section
2. Click **"Create New Template"**
3. Set up your template:

**Template Settings:**
- **Template Name**: Contact Form Submission
- **Subject**: Nova Mensagem de Contato - {{from_name}}

**Email Content (Body):**
```
Nova mensagem recebida do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Enviado via formulário de contato do site Natamy Oliveira
```

4. Set the "To Email" field to: natamy.oliveira13@gmail.com
5. Click **"Save"**
6. **Copy the TEMPLATE ID** (you'll need this later)

### Step 4: Get Your Public Key
1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the PUBLIC KEY**

### Step 5: Configure Your Website
1. Open the file `/app/frontend/.env`
2. Add these lines (replace with your actual values):

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Example:**
```env
REACT_APP_EMAILJS_PUBLIC_KEY=abc123xyz789
REACT_APP_EMAILJS_SERVICE_ID=service_xyz123
REACT_APP_EMAILJS_TEMPLATE_ID=template_abc789
```

### Step 6: Restart Frontend
After adding the environment variables:
```bash
sudo supervisorctl restart frontend
```

---

## 📱 SMS Integration Option (Future)

Since free SMS services don't exist, here are your options:

### Option 1: Email-to-SMS (Recommended)
- Forward emails to +351915018559 using your phone carrier's email-to-SMS gateway
- Each carrier has a format like: phonenumber@carrier-gateway.com

### Option 2: Manual Process
- Check your email (natamy.oliveira13@gmail.com)
- Manually send SMS to client when you receive form submission

### Option 3: Paid SMS Service (Later)
- Use Twilio (pay as you go)
- Use MessageBird
- Use Vonage

---

## 🧪 Testing Your Setup

1. Fill out the contact form on your website
2. Click "Enviar Mensagem"
3. You should see a success message
4. Check natamy.oliveira13@gmail.com for the email
5. The email should contain all form data

---

## 🐛 Troubleshooting

**Issue**: "Failed to send email" error
- ✅ Check that all 3 environment variables are set correctly
- ✅ Verify your EmailJS service is connected and active
- ✅ Make sure you restarted the frontend after adding .env variables
- ✅ Check browser console for error messages

**Issue**: Email not received
- ✅ Check spam folder
- ✅ Verify "To Email" in EmailJS template is correct
- ✅ Check EmailJS dashboard for delivery status

**Issue**: Template variables not working
- ✅ Make sure template uses: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
- ✅ Variable names must match exactly

---

## 📊 Monitoring

- Check your EmailJS dashboard to see:
  - Number of emails sent
  - Remaining quota
  - Delivery success/failure rates

---

## 🌐 Deployment to Free Hosting

This landing page works perfectly with:

### Netlify (Recommended)
1. Connect your GitHub repo
2. Build command: `cd frontend && yarn build`
3. Publish directory: `frontend/build`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your project
2. Root directory: `frontend`
3. Build command: `yarn build`
4. Output directory: `build`
5. Add environment variables in Vercel dashboard

### GitHub Pages
1. Build the project: `cd frontend && yarn build`
2. Deploy the `build` folder to GitHub Pages
3. Note: Environment variables need to be set before build

---

## 💰 Cost Summary
- ✅ EmailJS: **FREE** (200 emails/month)
- ✅ Netlify/Vercel Hosting: **FREE**
- ✅ Domain (optional): ~$10-15/year
- ✅ **Total: $0 to get started!**

---

## 📞 Support

If you need help:
1. EmailJS Documentation: https://www.emailjs.com/docs/
2. Check the troubleshooting section above
3. Verify all setup steps were completed

Good luck with your landing page! 🚀
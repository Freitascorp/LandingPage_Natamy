import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  const sectionStyle = {
    fontSize: 'clamp(1rem, 1.6vw, 1.05rem)',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    fontFamily: 'Sora, sans-serif',
    marginBottom: '1.5rem'
  };

  const headingStyle = {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
    color: '#d4af37',
    marginTop: '2.5rem',
    marginBottom: '1rem',
    fontWeight: '600'
  };

  const subheadingStyle = {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    color: '#d4af37',
    marginTop: '2rem',
    marginBottom: '0.8rem',
    fontWeight: '500'
  };

  const listStyle = {
    marginBottom: '1.5rem',
    marginLeft: '1.5rem',
    listStyle: 'disc'
  };

  return (
    <div className="service-page">
      <header className="service-header">
        <div className="container">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="back-button"
          >
            <ArrowLeft className="mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      <section className="service-hero">
        <div className="container">
          <h1 className="service-title">Privacy Policy</h1>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '1rem' }}>
            Last updated November 14, 2025
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div>
            <p style={sectionStyle}>
              This Privacy Notice for NATAMY OLIVEIRA ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you:
            </p>
            
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>Download and use our Facebook application (NATAMY OLIVEIRA), or any other application of ours that links to this Privacy Notice</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>

            <p style={sectionStyle}>
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <strong>natamy.oliveira13@gmail.com</strong>.
            </p>

            <h2 style={headingStyle}>SUMMARY OF KEY POINTS</h2>
            
            <p style={sectionStyle}>
              <em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by using our table of contents below to find the section you are looking for.</em>
            </p>

            <p style={sectionStyle}>
              <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
            </p>

            <p style={sectionStyle}>
              <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
            </p>

            <p style={sectionStyle}>
              <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
            </p>

            <p style={sectionStyle}>
              <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </p>

            <p style={sectionStyle}>
              <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.
            </p>

            <p style={sectionStyle}>
              <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <p style={sectionStyle}>
              <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
            </p>

            <h2 style={headingStyle}>TABLE OF CONTENTS</h2>
            <ol style={{ ...listStyle, listStyle: 'decimal' }}>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>WHAT INFORMATION DO WE COLLECT?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>

            <h2 style={headingStyle}>1. WHAT INFORMATION DO WE COLLECT?</h2>
            
            <h3 style={subheadingStyle}>Personal information you disclose to us</h3>
            <p style={sectionStyle}>
              <em>In Short: We collect personal information that you provide to us.</em>
            </p>
            <p style={sectionStyle}>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p style={sectionStyle}>
              <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>names</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>phone numbers</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>email addresses</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>mailing addresses</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>job titles</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>usernames</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>contact preferences</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>contact or authentication data</li>
            </ul>

            <h3 style={subheadingStyle}>Sensitive Information</h3>
            <p style={sectionStyle}>
              We do not process sensitive information.
            </p>
            <p style={sectionStyle}>
              All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </p>

            <h3 style={subheadingStyle}>Information automatically collected</h3>
            <p style={sectionStyle}>
              <em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em>
            </p>
            <p style={sectionStyle}>
              We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
            </p>

            <h2 style={headingStyle}>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p style={sectionStyle}>
              <em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em>
            </p>
            <p style={sectionStyle}>
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To deliver and facilitate delivery of services to the user</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To respond to user inquiries/offer support to users</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To send administrative information to you</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To fulfil and manage your orders</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To send you marketing and promotional communications</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To identify usage trends</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To determine the effectiveness of our marketing and promotional campaigns</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}>To save or protect an individual's vital interest</li>
            </ul>

            <h2 style={headingStyle}>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
            <p style={sectionStyle}>
              <em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law.</em>
            </p>
            <p style={sectionStyle}>
              The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose.</li>
              <li style={{ marginBottom: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you.</li>
              <li style={{ marginBottom: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests.</li>
              <li style={{ marginBottom: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
              <li style={{ marginBottom: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
            </ul>

            <h2 style={headingStyle}>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
            <p style={sectionStyle}>
              <em>In Short: We may share information in specific situations described in this section.</em>
            </p>
            <p style={sectionStyle}>
              We may need to share your personal information in the following situations:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition.</li>
              <li style={{ marginBottom: '0.5rem', color: 'rgba(255, 255, 255, 0.85)' }}><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            </ul>

            <h2 style={headingStyle}>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p style={sectionStyle}>
              <em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em>
            </p>
            <p style={sectionStyle}>
              We may use cookies and similar tracking technologies to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
            </p>

            <h2 style={headingStyle}>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
            <p style={sectionStyle}>
              <em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em>
            </p>
            <p style={sectionStyle}>
              As part of our Services, we offer products, features, or tools powered by artificial intelligence (AI). These tools are designed to enhance your experience and provide you with innovative solutions.
            </p>
            <h3 style={subheadingStyle}>Our AI Products</h3>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>AI automation</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>AI bots</li>
            </ul>

            <h2 style={headingStyle}>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p style={sectionStyle}>
              <em>In Short: We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
            </p>
            <p style={sectionStyle}>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than 1 year.
            </p>

            <h2 style={headingStyle}>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p style={sectionStyle}>
              <em>In Short: We aim to protect your personal information through a system of organisational and technical security measures.</em>
            </p>
            <p style={sectionStyle}>
              We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h2 style={headingStyle}>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p style={sectionStyle}>
              <em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em>
            </p>
            <p style={sectionStyle}>
              We do not knowingly collect, solicit data from, or market to children under 18 years of age. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
            </p>

            <h2 style={headingStyle}>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p style={sectionStyle}>
              <em>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information.</em>
            </p>
            <p style={sectionStyle}>
              In some regions, you have certain rights under applicable data protection laws. These may include the right to:
            </p>
            <ul style={listStyle}>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>Request access and obtain a copy of your personal information</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>Request rectification or erasure</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>Restrict the processing of your personal information</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>Data portability</li>
              <li style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.85)' }}>Not to be subject to automated decision-making</li>
            </ul>

            <h2 style={headingStyle}>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p style={sectionStyle}>
              Most web browsers include a Do-Not-Track ('DNT') feature. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals.
            </p>

            <h2 style={headingStyle}>12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p style={sectionStyle}>
              <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
            </p>
            <p style={sectionStyle}>
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date at the top of this Privacy Notice.
            </p>

            <h2 style={headingStyle}>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p style={sectionStyle}>
              If you have questions or comments about this notice, you may email us at <strong>natamy.oliveira13@gmail.com</strong>.
            </p>

            <h2 style={headingStyle}>14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p style={{ ...sectionStyle, marginBottom: '3rem' }}>
              Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please contact us at <strong>natamy.oliveira13@gmail.com</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;

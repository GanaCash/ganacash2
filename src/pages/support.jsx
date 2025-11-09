import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageCircle,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  DollarSign,
  ArrowLeft,
  Shield,
  CreditCard,
  Users,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import LanguageSelector from '@/components/LanguageSelector';

const translations = {
  es: {
    backToHome: "Volver al Inicio",
    support247: "Soporte disponible 24/7",
    howCanWeHelp: "¿Cómo Podemos Ayudarte?",
    hereToHelp: "Estamos aquí para resolver todas tus dudas sobre GanaCash",
    email: "Email",
    emailAddress: "soporte@ganacash.com",
    emailResponse: "Respuesta en 24 horas",
    liveChat: "Chat en Vivo",
    availableInApp: "Disponible en la app",
    schedule: "Lun-Vie 9:00-18:00",
    whatsapp: "WhatsApp",
    whatsappNumber: "+34 XXX XXX XXX",
    quickResponse: "Respuesta rápida",
    contactForm: "Formulario de Contacto",
    sendMessage: "Envíanos un Mensaje",
    completeForm: "Completa el formulario y te responderemos lo antes posible",
    fullName: "Nombre Completo",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    subject: "Asunto",
    howCanWeHelpYou: "¿En qué podemos ayudarte?",
    message: "Mensaje",
    describeIssue: "Describe tu consulta o problema...",
    sendMessageBtn: "Enviar Mensaje",
    messageSent: "¡Mensaje Enviado!",
    weReceivedMessage: "Hemos recibido tu mensaje y te responderemos pronto.",
    helpCenter: "Centro de Ayuda",
    faq: "Preguntas Frecuentes",
    faqSubtitle: "Encuentra respuestas rápidas a las dudas más comunes",
    accountRegistration: "Cuenta y Registro",
    paymentsWithdrawals: "Pagos y Retiros",
    earning: "Ganar Dinero",
    security: "Seguridad",
    howCreateAccount: "¿Cómo creo una cuenta en GanaCash?",
    howCreateAccountA: "Descarga la aplicación desde Itch.io o GitHub, ábrela y sigue los pasos de registro. Solo necesitas tu email y crear una contraseña segura.",
    forgotPassword: "¿Olvidé mi contraseña, qué hago?",
    forgotPasswordA: "En la pantalla de inicio de sesión, haz clic en '¿Olvidaste tu contraseña?' y sigue las instrucciones que recibirás por email.",
    multipleAccounts: "¿Puedo tener múltiples cuentas?",
    multipleAccountsA: "No, solo se permite una cuenta por persona para mantener la equidad del sistema y prevenir abusos.",
    whenWithdraw: "¿Cuándo puedo retirar mi dinero?",
    whenWithdrawA: "Puedes solicitar un retiro una vez que alcances el mínimo requerido de 10€. Los pagos se procesan en 24-48 horas hábiles.",
    paymentMethods: "¿Qué métodos de pago están disponibles?",
    paymentMethodsA: "Ofrecemos transferencia bancaria, Bizum, PayPal y tarjetas regalo de Amazon, Steam, PlayStation, Xbox, Google Play y más.",
    withdrawalFees: "¿Hay comisiones por los retiros?",
    withdrawalFeesA: "No cobramos comisiones por retiros. El dinero que ganas es tuyo completamente.",
    paymentRejected: "¿Por qué se rechazó mi pago?",
    paymentRejectedA: "Los pagos pueden rechazarse si la información bancaria es incorrecta o si no se cumplen los requisitos mínimos. Revisa tu información y contacta con soporte si el problema persiste.",
    howMuchEarn: "¿Cuánto puedo ganar realmente?",
    howMuchEarnA: "Las ganancias varían según tu dedicación. Los usuarios activos ganan entre 50-200€ mensuales. Algunos usuarios muy activos superan esta cantidad.",
    noMoreTasks: "¿Por qué no recibo más tareas?",
    noMoreTasksA: "La disponibilidad de tareas depende de varios factores como tu ubicación, perfil demográfico y tareas ya completadas. Revisa la app regularmente para nuevas oportunidades.",
    howMuchTime: "¿Cuánto tiempo debo dedicar?",
    howMuchTimeA: "Tú decides. Algunos usuarios dedican 15-30 minutos diarios, otros más tiempo. No hay límites ni obligaciones.",
    isSecure: "¿Es seguro GanaCash?",
    isSecureA: "Sí, utilizamos encriptación SSL de nivel bancario y cumplimos con GDPR. Tus datos están protegidos y nunca compartimos tu información personal.",
    protectBankInfo: "¿Cómo protegen mi información bancaria?",
    protectBankInfoA: "Utilizamos procesadores de pago certificados PCI DSS. Nunca almacenamos tu información bancaria completa en nuestros servidores.",
    stillHaveQuestions: "¿Aún Tienes Dudas?",
    supportTeamReady: "Nuestro equipo de soporte está listo para ayudarte",
    startChat: "Iniciar Chat",
    sendEmail: "Enviar Email",
    ganacash: "GanaCash",
    allRightsReserved: "Todos los derechos reservados."
  },
  en: {
    backToHome: "Back to Home",
    support247: "Support available 24/7",
    howCanWeHelp: "How Can We Help You?",
    hereToHelp: "We're here to solve all your questions about GanaCash",
    email: "Email",
    emailAddress: "support@ganacash.com",
    emailResponse: "Response within 24 hours",
    liveChat: "Live Chat",
    availableInApp: "Available in app",
    schedule: "Mon-Fri 9:00-18:00",
    whatsapp: "WhatsApp",
    whatsappNumber: "+34 XXX XXX XXX",
    quickResponse: "Quick response",
    contactForm: "Contact Form",
    sendMessage: "Send Us a Message",
    completeForm: "Complete the form and we'll respond as soon as possible",
    fullName: "Full Name",
    yourName: "Your name",
    yourEmail: "you@email.com",
    subject: "Subject",
    howCanWeHelpYou: "How can we help you?",
    message: "Message",
    describeIssue: "Describe your question or issue...",
    sendMessageBtn: "Send Message",
    messageSent: "Message Sent!",
    weReceivedMessage: "We've received your message and will respond soon.",
    helpCenter: "Help Center",
    faq: "Frequently Asked Questions",
    faqSubtitle: "Find quick answers to common questions",
    accountRegistration: "Account and Registration",
    paymentsWithdrawals: "Payments and Withdrawals",
    earning: "Earning Money",
    security: "Security",
    howCreateAccount: "How do I create a GanaCash account?",
    howCreateAccountA: "Download the app from Itch.io or GitHub, open it and follow the registration steps. You only need your email and to create a secure password.",
    forgotPassword: "I forgot my password, what do I do?",
    forgotPasswordA: "On the login screen, click 'Forgot your password?' and follow the instructions you'll receive by email.",
    multipleAccounts: "Can I have multiple accounts?",
    multipleAccountsA: "No, only one account per person is allowed to maintain system fairness and prevent abuse.",
    whenWithdraw: "When can I withdraw my money?",
    whenWithdrawA: "You can request a withdrawal once you reach the required minimum of €10. Payments are processed within 24-48 business hours.",
    paymentMethods: "What payment methods are available?",
    paymentMethodsA: "We offer bank transfer, Bizum, PayPal and gift cards for Amazon, Steam, PlayStation, Xbox, Google Play and more.",
    withdrawalFees: "Are there fees for withdrawals?",
    withdrawalFeesA: "We don't charge fees for withdrawals. The money you earn is completely yours.",
    paymentRejected: "Why was my payment rejected?",
    paymentRejectedA: "Payments can be rejected if banking information is incorrect or minimum requirements aren't met. Review your information and contact support if the problem persists.",
    howMuchEarn: "How much can I really earn?",
    howMuchEarnA: "Earnings vary based on your dedication. Active users earn between €50-200 monthly. Some very active users exceed this amount.",
    noMoreTasks: "Why am I not receiving more tasks?",
    noMoreTasksA: "Task availability depends on various factors like your location, demographic profile and completed tasks. Check the app regularly for new opportunities.",
    howMuchTime: "How much time should I dedicate?",
    howMuchTimeA: "You decide. Some users dedicate 15-30 minutes daily, others more time. There are no limits or obligations.",
    isSecure: "Is GanaCash secure?",
    isSecureA: "Yes, we use bank-level SSL encryption and comply with GDPR. Your data is protected and we never share your personal information.",
    protectBankInfo: "How do you protect my banking information?",
    protectBankInfoA: "We use PCI DSS certified payment processors. We never store your complete banking information on our servers.",
    stillHaveQuestions: "Still Have Questions?",
    supportTeamReady: "Our support team is ready to help you",
    startChat: "Start Chat",
    sendEmail: "Send Email",
    ganacash: "GanaCash",
    allRightsReserved: "All rights reserved."
  },
  fr: {
    backToHome: "Retour à l'Accueil",
    support247: "Support disponible 24/7",
    howCanWeHelp: "Comment Pouvons-Nous Vous Aider?",
    hereToHelp: "Nous sommes là pour résoudre toutes vos questions sur GanaCash",
    email: "Email",
    emailAddress: "support@ganacash.com",
    emailResponse: "Réponse sous 24 heures",
    liveChat: "Chat en Direct",
    availableInApp: "Disponible dans l'app",
    schedule: "Lun-Ven 9:00-18:00",
    whatsapp: "WhatsApp",
    whatsappNumber: "+34 XXX XXX XXX",
    quickResponse: "Réponse rapide",
    contactForm: "Formulaire de Contact",
    sendMessage: "Envoyez-Nous un Message",
    completeForm: "Complétez le formulaire et nous vous répondrons dès que possible",
    fullName: "Nom Complet",
    yourName: "Votre nom",
    yourEmail: "vous@email.com",
    subject: "Sujet",
    howCanWeHelpYou: "Comment pouvons-nous vous aider?",
    message: "Message",
    describeIssue: "Décrivez votre question ou problème...",
    sendMessageBtn: "Envoyer le Message",
    messageSent: "Message Envoyé!",
    weReceivedMessage: "Nous avons reçu votre message et vous répondrons bientôt.",
    helpCenter: "Centre d'Aide",
    faq: "Questions Fréquentes",
    faqSubtitle: "Trouvez des réponses rapides aux questions courantes",
    accountRegistration: "Compte et Inscription",
    paymentsWithdrawals: "Paiements et Retraits",
    earning: "Gagner de l'Argent",
    security: "Sécurité",
    howCreateAccount: "Comment créer un compte GanaCash?",
    howCreateAccountA: "Téléchargez l'application depuis Itch.io ou GitHub, ouvrez-la et suivez les étapes d'inscription. Vous avez seulement besoin de votre email et de créer un mot de passe sécurisé.",
    forgotPassword: "J'ai oublié mon mot de passe, que faire?",
    forgotPasswordA: "Sur l'écran de connexion, cliquez sur 'Mot de passe oublié?' et suivez les instructions que vous recevrez par email.",
    multipleAccounts: "Puis-je avoir plusieurs comptes?",
    multipleAccountsA: "Non, un seul compte par personne est autorisé pour maintenir l'équité du système et prévenir les abus.",
    whenWithdraw: "Quand puis-je retirer mon argent?",
    whenWithdrawA: "Vous pouvez demander un retrait une fois que vous atteignez le minimum requis de 10€. Les paiements sont traités sous 24-48 heures ouvrables.",
    paymentMethods: "Quels modes de paiement sont disponibles?",
    paymentMethodsA: "Nous proposons virement bancaire, Bizum, PayPal et cartes cadeaux pour Amazon, Steam, PlayStation, Xbox, Google Play et plus.",
    withdrawalFees: "Y a-t-il des frais pour les retraits?",
    withdrawalFeesA: "Nous ne facturons pas de frais pour les retraits. L'argent que vous gagnez est entièrement le vôtre.",
    paymentRejected: "Pourquoi mon paiement a-t-il été rejeté?",
    paymentRejectedA: "Les paiements peuvent être rejetés si les informations bancaires sont incorrectes ou si les exigences minimales ne sont pas remplies. Vérifiez vos informations et contactez le support si le problème persiste.",
    howMuchEarn: "Combien puis-je vraiment gagner?",
    howMuchEarnA: "Les gains varient selon votre engagement. Les utilisateurs actifs gagnent entre 50-200€ par mois. Certains utilisateurs très actifs dépassent ce montant.",
    noMoreTasks: "Pourquoi ne reçois-je plus de tâches?",
    noMoreTasksA: "La disponibilité des tâches dépend de divers facteurs comme votre localisation, profil démographique et tâches déjà complétées. Consultez l'application régulièrement pour de nouvelles opportunités.",
    howMuchTime: "Combien de temps dois-je consacrer?",
    howMuchTimeA: "Vous décidez. Certains utilisateurs consacrent 15-30 minutes par jour, d'autres plus de temps. Il n'y a pas de limites ni d'obligations.",
    isSecure: "GanaCash est-il sécurisé?",
    isSecureA: "Oui, nous utilisons un cryptage SSL de niveau bancaire et sommes conformes au RGPD. Vos données sont protégées et nous ne partageons jamais vos informations personnelles.",
    protectBankInfo: "Comment protégez-vous mes informations bancaires?",
    protectBankInfoA: "Nous utilisons des processeurs de paiement certifiés PCI DSS. Nous ne stockons jamais vos informations bancaires complètes sur nos serveurs.",
    stillHaveQuestions: "Vous Avez Encore des Questions?",
    supportTeamReady: "Notre équipe de support est prête à vous aider",
    startChat: "Démarrer le Chat",
    sendEmail: "Envoyer un Email",
    ganacash: "GanaCash",
    allRightsReserved: "Tous droits réservés."
  },
  ar: {
    backToHome: "العودة إلى الصفحة الرئيسية",
    support247: "الدعم متاح 24/7",
    howCanWeHelp: "كيف يمكننا مساعدتك؟",
    hereToHelp: "نحن هنا لحل جميع أسئلتك حول GanaCash",
    email: "البريد الإلكتروني",
    emailAddress: "support@ganacash.com",
    emailResponse: "رد خلال 24 ساعة",
    liveChat: "دردشة مباشرة",
    availableInApp: "متاح في التطبيق",
    schedule: "الإثنين-الجمعة 9:00-18:00",
    whatsapp: "واتساب",
    whatsappNumber: "+34 XXX XXX XXX",
    quickResponse: "استجابة سريعة",
    contactForm: "نموذج الاتصال",
    sendMessage: "أرسل لنا رسالة",
    completeForm: "أكمل النموذج وسنرد في أقرب وقت ممكن",
    fullName: "الاسم الكامل",
    yourName: "اسمك",
    yourEmail: "you@email.com",
    subject: "الموضوع",
    howCanWeHelpYou: "كيف يمكننا مساعدتك؟",
    message: "الرسالة",
    describeIssue: "صف استفسارك أو مشكلتك...",
    sendMessageBtn: "إرسال الرسالة",
    messageSent: "تم إرسال الرسالة!",
    weReceivedMessage: "لقد تلقينا رسالتك وسنرد قريباً.",
    helpCenter: "مركز المساعدة",
    faq: "الأسئلة الشائعة",
    faqSubtitle: "ابحث عن إجابات سريعة للأسئلة الشائعة",
    accountRegistration: "الحساب والتسجيل",
    paymentsWithdrawals: "المدفوعات والسحوبات",
    earning: "كسب المال",
    security: "الأمان",
    howCreateAccount: "كيف أنشئ حساب GanaCash؟",
    howCreateAccountA: "قم بتنزيل التطبيق من Itch.io أو GitHub، افتحه واتبع خطوات التسجيل. تحتاج فقط إلى بريدك الإلكتروني وإنشاء كلمة مرور آمنة.",
    forgotPassword: "نسيت كلمة المرور، ماذا أفعل؟",
    forgotPasswordA: "في شاشة تسجيل الدخول، انقر على 'هل نسيت كلمة المرور؟' واتبع التعليمات التي ستتلقاها عبر البريد الإلكتروني.",
    multipleAccounts: "هل يمكنني الحصول على حسابات متعددة؟",
    multipleAccountsA: "لا، يُسمح بحساب واحد فقط لكل شخص للحفاظ على عدالة النظام ومنع الإساءة.",
    whenWithdraw: "متى يمكنني سحب أموالي؟",
    whenWithdrawA: "يمكنك طلب سحب بمجرد الوصول إلى الحد الأدنى المطلوب وهو 10 يورو. تتم معالجة المدفوعات خلال 24-48 ساعة عمل.",
    paymentMethods: "ما هي طرق الدفع المتاحة؟",
    paymentMethodsA: "نقدم التحويل البنكي وBizum وPayPal وبطاقات هدايا لـ Amazon وSteam وPlayStation وXbox وGoogle Play والمزيد.",
    withdrawalFees: "هل هناك رسوم على السحوبات؟",
    withdrawalFeesA: "لا نفرض رسوماً على السحوبات. الأموال التي تكسبها هي لك بالكامل.",
    paymentRejected: "لماذا تم رفض دفعتي؟",
    paymentRejectedA: "قد يتم رفض المدفوعات إذا كانت المعلومات المصرفية غير صحيحة أو إذا لم يتم استيفاء الحد الأدنى من المتطلبات. راجع معلوماتك واتصل بالدعم إذا استمرت المشكلة.",
    howMuchEarn: "كم يمكنني أن أكسب حقاً؟",
    howMuchEarnA: "تختلف الأرباح بناءً على تفانيك. يكسب المستخدمون النشطون ما بين 50-200 يورو شهرياً. يتجاوز بعض المستخدمين النشطين جداً هذا المبلغ.",
    noMoreTasks: "لماذا لا أتلقى المزيد من المهام؟",
    noMoreTasksA: "تعتمد توفر المهام على عوامل مختلفة مثل موقعك وملفك الديموغرافي والمهام المكتملة بالفعل. تحقق من التطبيق بانتظام للحصول على فرص جديدة.",
    howMuchTime: "كم من الوقت يجب أن أخصص؟",
    howMuchTimeA: "أنت تقرر. يخصص بعض المستخدمين 15-30 دقيقة يومياً، والبعض الآخر وقتاً أطول. لا توجد حدود أو التزامات.",
    isSecure: "هل GanaCash آمن؟",
    isSecureA: "نعم، نستخدم تشفير SSL على مستوى البنوك ونلتزم بـ GDPR. بياناتك محمية ولا نشارك معلوماتك الشخصية أبداً.",
    protectBankInfo: "كيف تحمون معلوماتي المصرفية؟",
    protectBankInfoA: "نستخدم معالجات دفع معتمدة من PCI DSS. لا نخزن معلوماتك المصرفية الكاملة على خوادمنا أبداً.",
    stillHaveQuestions: "ما زالت لديك أسئلة؟",
    supportTeamReady: "فريق الدعم لدينا جاهز لمساعدتك",
    startChat: "بدء الدردشة",
    sendEmail: "إرسال بريد إلكتروني",
    ganacash: "GanaCash",
    allRightsReserved: "جميع الحقوق محفوظة."
  }
};

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');

  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const faqs = [
    {
      category: t.accountRegistration,
      icon: Users,
      questions: [
        { q: t.howCreateAccount, a: t.howCreateAccountA },
        { q: t.forgotPassword, a: t.forgotPasswordA },
        { q: t.multipleAccounts, a: t.multipleAccountsA }
      ]
    },
    {
      category: t.paymentsWithdrawals,
      icon: CreditCard,
      questions: [
        { q: t.whenWithdraw, a: t.whenWithdrawA },
        { q: t.paymentMethods, a: t.paymentMethodsA },
        { q: t.withdrawalFees, a: t.withdrawalFeesA },
        { q: t.paymentRejected, a: t.paymentRejectedA }
      ]
    },
    {
      category: t.earning,
      icon: DollarSign,
      questions: [
        { q: t.howMuchEarn, a: t.howMuchEarnA },
        { q: t.noMoreTasks, a: t.noMoreTasksA },
        { q: t.howMuchTime, a: t.howMuchTimeA }
      ]
    },
    {
      category: t.security,
      icon: Shield,
      questions: [
        { q: t.isSecure, a: t.isSecureA },
        { q: t.protectBankInfo, a: t.protectBankInfoA }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: t.email,
      description: t.emailAddress,
      detail: t.emailResponse,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: t.liveChat,
      description: t.availableInApp,
      detail: t.schedule,
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: t.whatsapp,
      description: t.whatsappNumber,
      detail: t.quickResponse,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">{t.ganacash}</span>
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
              <Link to={createPageUrl('Home')}>
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {t.backToHome}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">{t.support247}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.howCanWeHelp}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {t.hereToHelp}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-700 font-medium mb-1">{method.description}</p>
                    <p className="text-sm text-gray-500">{method.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-none">
              <Send className="w-3 h-3 mr-1" />
              {t.contactForm}
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.sendMessage}
            </h2>
            <p className="text-gray-600">
              {t.completeForm}
            </p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.messageSent}
                  </h3>
                  <p className="text-gray-600">
                    {t.weReceivedMessage}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t.fullName}
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.yourName}
                        className="border-2 border-gray-200 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.yourEmail}
                        className="border-2 border-gray-200 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.howCanWeHelpYou}
                      className="border-2 border-gray-200 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.message}
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.describeIssue}
                      rows={6}
                      className="border-2 border-gray-200 focus:border-orange-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t.sendMessageBtn}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-none">
              <HelpCircle className="w-3 h-3 mr-1" />
              {t.helpCenter}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.faq}
            </h2>
            <p className="text-xl text-gray-600">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Card className="border-2 border-gray-200 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                          <h4 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                            <span className="text-orange-600 flex-shrink-0">Q:</span>
                            <span>{faq.q}</span>
                          </h4>
                          <p className={`text-gray-600 leading-relaxed ${isRTL ? 'pr-5' : 'pl-5'}`}>
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <AlertCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            {t.stillHaveQuestions}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t.supportTeamReady}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.startChat}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold"
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.sendEmail}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">{t.ganacash}</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 {t.ganacash}. {t.allRightsReserved}
          </p>
        </div>
      </footer>
    </div>
  );
}
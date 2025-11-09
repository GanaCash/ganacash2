
import React, { useState, useEffect } from 'react';
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { 
  Download, 
  Shield, 
  Star,
  Check,
  Gift,
  Users,
  DollarSign,
  Gamepad2,
  ClipboardCheck,
  ArrowRight,
  Github,
  FileText,
  Award,
  Lock,
  TrendingUp,
  CreditCard,
  Clock,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Play,
  Building2,
  Globe,
  Menu,
  X,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import LanguageSelector from '@/components/LanguageSelector';

const translations = {
  es: {
    verified: "Verificado",
    howItWorks: "Cómo Funciona",
    testimonials: "Testimonios",
    security: "Seguridad",
    support: "Soporte",
    download: "Descargar",
    platformVerified: "Plataforma Verificada y Segura",
    heroTitle: "Gana Dinero Real en tu Tiempo Libre",
    heroDescription: "Plataforma confiable para ganar dinero completando tareas simples, jugando o respondiendo encuestas. Más de 50,000 usuarios ya confían en nosotros.",
    free: "100% Gratis",
    fastPayments: "Pagos en 24-48h",
    noInvestment: "Sin inversión inicial",
    dataProtected: "Datos protegidos",
    downloadFrom: "Descarga desde tu plataforma preferida",
    recommended: "Recomendado",
    secureDownload: "Descarga segura y verificada",
    downloadNow: "Descargar ahora",
    directDownload: "Descarga directa del APK",
    downloadAPK: "Descargar APK",
    bothSafe: "Ambas opciones son seguras y oficiales. Elige la que prefieras.",
    earnedToday: "Ganado hoy",
    activeUsers: "Usuarios activos",
    totalPaid: "Total Pagado",
    rating: "Valoración",
    paymentTime: "Tiempo de Pago",
    thisMonth: "este mes",
    thisWeek: "esta semana",
    reviews: "reseñas",
    averageVerified: "Promedio verificado",
    simplifiedProcess: "Proceso Simplificado",
    howGanaCashWorks: "Cómo Funciona GanaCash",
    howItWorksDesc: "Empieza a ganar en 4 pasos simples. Todo el proceso toma menos de 5 minutos.",
    step1Title: "Descarga la App",
    step1Desc: "Elige tu método de descarga preferido. Instalación rápida en menos de 2 minutos.",
    step2Title: "Crea tu Cuenta",
    step2Desc: "Registro sencillo con tu email. Sin datos bancarios necesarios para empezar.",
    step3Title: "Empieza a Ganar",
    step3Desc: "Juega, completa encuestas o tareas simples. Tú decides cómo y cuándo ganar.",
    step4Title: "Retira tu Dinero",
    step4Desc: "Transferencia bancaria, Bizum o tarjetas regalo. Pagos procesados en 24-48h.",
    multipleWaysTitle: "Múltiples Formas de Ganar",
    multipleWaysDesc: "Elige la actividad que más te guste. Todas son fáciles y rentables.",
    playAndEarn: "Juega y Gana",
    playDesc: "Amplia variedad de juegos casuales entretenidos",
    gamesAvailable: "15+ juegos disponibles",
    quickSurveys: "Encuestas Rápidas",
    surveysDesc: "Comparte tu opinión en encuestas de 3-5 minutos",
    perSurvey: "5-10€ por encuesta",
    simpleTasks: "Tareas Simples",
    tasksDesc: "Completa misiones fáciles con grandes recompensas",
    dailyTasks: "Nuevas tareas diarias",
    verifiedTestimonials: "Testimonios Verificados",
    whatUsersSay: "Lo Que Dicen Nuestros Usuarios",
    realStories: "Historias reales de personas que están ganando dinero con GanaCash",
    totalEarned: "Total ganado",
    activeTime: "Tiempo activo",
    tasksCompleted: "Tareas completadas",
    months: "meses",
    maxSecurity: "Máxima Seguridad",
    securityPriority: "Tu Seguridad es Nuestra Prioridad",
    securityDesc: "Tecnología de encriptación de nivel bancario y certificaciones internacionales",
    dataProtectedTitle: "Datos Protegidos",
    dataProtectedDesc: "Encriptación SSL de nivel bancario",
    securePayments: "Pagos Seguros",
    securePaymentsDesc: "Procesamiento certificado PCI DSS",
    verification2FA: "Verificación 2FA",
    verification2FADesc: "Autenticación de dos factores opcional",
    verifiedCompany: "Empresa Verificada",
    verifiedCompanyDesc: "Registrados en Trustpilot y regulados",
    verifiedTrustpilot: "Verificado en Trustpilot",
    sslCertified: "Certificado SSL",
    gdprCompliant: "GDPR Compliant",
    registeredCompany: "Empresa Registrada",
    withdrawalOptions: "Múltiples Opciones de Retiro",
    withdrawalDesc: "Elige cómo quieres recibir tu dinero. Todos los métodos son seguros y rápidos.",
    popular: "Popular",
    transfer: "Transferencia",
    startEarningToday: "Empieza a Ganar Hoy Mismo",
    ctaDescription: "Únete a más de 50,000 personas que ya están ganando dinero extra de forma segura y confiable.",
    downloadFree: "Descargar Gratis",
    noHiddenCosts: "Sin costos ocultos",
    installation2min: "Instalación en 2 minutos",
    faqTitle: "Preguntas Frecuentes",
    faq1Q: "¿Es realmente gratis?",
    faq1A: "Sí, GanaCash es 100% gratuito. No hay costos de descarga, registro o uso. Solo ganas dinero.",
    faq2Q: "¿Cuánto puedo ganar?",
    faq2A: "Depende del tiempo que dediques. Los usuarios activos ganan entre €50-€200 mensuales.",
    faq3Q: "¿Cuándo recibo mi pago?",
    faq3A: "Los pagos se procesan en 24-48 horas una vez que solicitas el retiro.",
    footerTagline: "Tu tiempo vale dinero",
    terms: "Términos",
    privacy: "Privacidad",
    contact: "Contacto",
    allRights: "Todos los derechos reservados. Plataforma verificada y segura.",
    testimonial1: "Uso GanaCash en mi tiempo libre mientras viajo en metro. He ganado suficiente para pagar mi suscripción de Netflix y Spotify cada mes.",
    testimonial2: "Al principio era escéptico, pero después de recibir mi primer pago en menos de 48 horas, quedé convencido. Es legítimo y seguro.",
    testimonial3: "La app es muy intuitiva. Me ayuda a cubrir gastos pequeños del día a día. Lo recomiendo especialmente para estudiantes."
  },
  en: {
    verified: "Verified",
    howItWorks: "How It Works",
    testimonials: "Testimonials",
    security: "Security",
    support: "Support",
    download: "Download",
    platformVerified: "Verified and Secure Platform",
    heroTitle: "Earn Real Money in Your Free Time",
    heroDescription: "Trusted platform to earn money by completing simple tasks, playing games, or answering surveys. Over 50,000 users already trust us.",
    free: "100% Free",
    fastPayments: "Payments in 24-48h",
    noInvestment: "No initial investment",
    dataProtected: "Data protected",
    downloadFrom: "Download from your preferred platform",
    recommended: "Recommended",
    secureDownload: "Safe and verified download",
    downloadNow: "Download now",
    directDownload: "Direct APK download",
    downloadAPK: "Download APK",
    bothSafe: "Both options are safe and official. Choose your favorite.",
    earnedToday: "Earned today",
    activeUsers: "Active users",
    totalPaid: "Total Paid",
    rating: "Rating",
    paymentTime: "Payment Time",
    thisMonth: "this month",
    thisWeek: "this week",
    reviews: "reviews",
    averageVerified: "Verified average",
    simplifiedProcess: "Simplified Process",
    howGanaCashWorks: "How GanaCash Works",
    howItWorksDesc: "Start earning in 4 simple steps. The entire process takes less than 5 minutes.",
    step1Title: "Download the App",
    step1Desc: "Choose your preferred download method. Quick installation in less than 2 minutes.",
    step2Title: "Create Your Account",
    step2Desc: "Simple registration with your email. No banking details needed to start.",
    step3Title: "Start Earning",
    step3Desc: "Play, complete surveys, or simple tasks. You decide how and when to earn.",
    step4Title: "Withdraw Your Money",
    step4Desc: "Bank transfer, Bizum, or gift cards. Payments processed in 24-48h.",
    multipleWaysTitle: "Multiple Ways to Earn",
    multipleWaysDesc: "Choose the activity you like most. All are easy and profitable.",
    playAndEarn: "Play and Earn",
    playDesc: "Wide variety of entertaining casual games",
    gamesAvailable: "15+ games available",
    quickSurveys: "Quick Surveys",
    surveysDesc: "Share your opinion in 3-5 minute surveys",
    perSurvey: "€5-10 per survey",
    simpleTasks: "Simple Tasks",
    tasksDesc: "Complete easy missions with great rewards",
    dailyTasks: "New daily tasks",
    verifiedTestimonials: "Verified Testimonials",
    whatUsersSay: "What Our Users Say",
    realStories: "Real stories from people earning money with GanaCash",
    totalEarned: "Total earned",
    activeTime: "Active time",
    tasksCompleted: "Tasks completed",
    months: "months",
    maxSecurity: "Maximum Security",
    securityPriority: "Your Security is Our Priority",
    securityDesc: "Bank-level encryption technology and international certifications",
    dataProtectedTitle: "Protected Data",
    dataProtectedDesc: "Bank-level SSL encryption",
    securePayments: "Secure Payments",
    securePaymentsDesc: "PCI DSS certified processing",
    verification2FA: "2FA Verification",
    verification2FADesc: "Optional two-factor authentication",
    verifiedCompany: "Verified Company",
    verifiedCompanyDesc: "Registered on Trustpilot and regulated",
    verifiedTrustpilot: "Verified on Trustpilot",
    sslCertified: "SSL Certified",
    gdprCompliant: "GDPR Compliant",
    registeredCompany: "Registered Company",
    withdrawalOptions: "Multiple Withdrawal Options",
    withdrawalDesc: "Choose how you want to receive your money. All methods are safe and fast.",
    popular: "Popular",
    transfer: "Transfer",
    startEarningToday: "Start Earning Today",
    ctaDescription: "Join over 50,000 people already earning extra money safely and reliably.",
    downloadFree: "Download Free",
    noHiddenCosts: "No hidden costs",
    installation2min: "2-minute installation",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is it really free?",
    faq1A: "Yes, GanaCash is 100% free. There are no download, registration, or usage costs. You only earn money.",
    faq2Q: "How much can I earn?",
    faq2A: "It depends on the time you dedicate. Active users earn between €50-€200 monthly.",
    faq3Q: "When do I receive my payment?",
    faq3A: "Payments are processed within 24-48 hours once you request withdrawal.",
    footerTagline: "Your time is worth money",
    terms: "Terms",
    privacy: "Privacy",
    contact: "Contact",
    allRights: "All rights reserved. Verified and secure platform.",
    testimonial1: "I use GanaCash in my free time while traveling on the subway. I've earned enough to pay for my Netflix and Spotify subscriptions each month.",
    testimonial2: "At first I was skeptical, but after receiving my first payment in less than 48 hours, I was convinced. It's legitimate and safe.",
    testimonial3: "The app is very intuitive. It helps me cover small day-to-day expenses. I especially recommend it for students."
  },
  fr: {
    verified: "Vérifié",
    howItWorks: "Comment Ça Marche",
    testimonials: "Témoignages",
    security: "Sécurité",
    support: "Support",
    download: "Télécharger",
    platformVerified: "Plateforme Vérifiée et Sécurisée",
    heroTitle: "Gagnez de l'Argent Réel Pendant Votre Temps Libre",
    heroDescription: "Plateforme fiable pour gagner de l'argent en accomplissant des tâches simples, en jouant ou en répondant à des enquêtes. Plus de 50 000 utilisateurs nous font déjà confiance.",
    free: "100% Gratuit",
    fastPayments: "Paiements en 24-48h",
    noInvestment: "Sans investissement initial",
    dataProtected: "Données protégées",
    downloadFrom: "Téléchargez depuis votre plateforme préférée",
    recommended: "Recommandé",
    secureDownload: "Téléchargement sûr et vérifié",
    downloadNow: "Télécharger maintenant",
    directDownload: "Téléchargement direct de l'APK",
    downloadAPK: "Télécharger APK",
    bothSafe: "Les deux options sont sûres et officielles. Choisissez celle que vous préférez.",
    earnedToday: "Gagné aujourd'hui",
    activeUsers: "Utilisateurs actifs",
    totalPaid: "Total Payé",
    rating: "Évaluation",
    paymentTime: "Délai de Paiement",
    thisMonth: "ce mois",
    thisWeek: "cette semaine",
    reviews: "avis",
    averageVerified: "Moyenne vérifiée",
    simplifiedProcess: "Processus Simplifié",
    howGanaCashWorks: "Comment Fonctionne GanaCash",
    howItWorksDesc: "Commencez à gagner en 4 étapes simples. Le processus complet prend moins de 5 minutes.",
    step1Title: "Téléchargez l'App",
    step1Desc: "Choisissez votre méthode de téléchargement préférée. Installation rapide en moins de 2 minutes.",
    step2Title: "Créez Votre Compte",
    step2Desc: "Inscription simple avec votre email. Pas de coordonnées bancaires nécessaires pour commencer.",
    step3Title: "Commencez à Gagner",
    step3Desc: "Jouez, complétez des enquêtes ou des tâches simples. Vous décidez comment et quand gagner.",
    step4Title: "Retirez Votre Argent",
    step4Desc: "Virement bancaire, Bizum ou cartes cadeaux. Paiements traités en 24-48h.",
    multipleWaysTitle: "Plusieurs Façons de Gagner",
    multipleWaysDesc: "Choisissez l'activité qui vous plaît le plus. Toutes sont faciles et rentables.",
    playAndEarn: "Jouez et Gagnez",
    playDesc: "Grande variété de jeux casual divertissants",
    gamesAvailable: "15+ jeux disponibles",
    quickSurveys: "Enquêtes Rapides",
    surveysDesc: "Partagez votre opinion dans des enquêtes de 3-5 minutes",
    perSurvey: "5-10€ par enquête",
    simpleTasks: "Tâches Simples",
    tasksDesc: "Accomplissez des missions faciles avec de grandes récompenses",
    dailyTasks: "Nouvelles tâches quotidiennes",
    verifiedTestimonials: "Témoignages Vérifiés",
    whatUsersSay: "Ce Que Disent Nos Utilisateurs",
    realStories: "Histoires réelles de personnes qui gagnent de l'argent avec GanaCash",
    totalEarned: "Total gagné",
    activeTime: "Temps actif",
    tasksCompleted: "Tâches accomplies",
    months: "mois",
    maxSecurity: "Sécurité Maximale",
    securityPriority: "Votre Sécurité est Notre Priorité",
    securityDesc: "Technologie de cryptage de niveau bancaire et certifications internationales",
    dataProtectedTitle: "Données Protégées",
    dataProtectedDesc: "Cryptage SSL de niveau bancaire",
    securePayments: "Paiements Sécurisés",
    securePaymentsDesc: "Traitement certifié PCI DSS",
    verification2FA: "Vérification 2FA",
    verification2FADesc: "Authentification à deux facteurs optionnelle",
    verifiedCompany: "Entreprise Vérifiée",
    verifiedCompanyDesc: "Enregistrée sur Trustpilot et réglementée",
    verifiedTrustpilot: "Vérifié sur Trustpilot",
    sslCertified: "Certifié SSL",
    gdprCompliant: "Conforme RGPD",
    registeredCompany: "Entreprise Enregistrée",
    withdrawalOptions: "Plusieurs Options de Retrait",
    withdrawalDesc: "Choisissez comment vous voulez recevoir votre argent. Toutes les méthodes sont sûres et rapides.",
    popular: "Populaire",
    transfer: "Virement",
    startEarningToday: "Commencez à Gagner Aujourd'hui",
    ctaDescription: "Rejoignez plus de 50 000 personnes qui gagnent déjà de l'argent supplémentaire en toute sécurité et fiabilité.",
    downloadFree: "Télécharger Gratuitement",
    noHiddenCosts: "Sans frais cachés",
    installation2min: "Installation en 2 minutes",
    faqTitle: "Questions Fréquentes",
    faq1Q: "Est-ce vraiment gratuit?",
    faq1A: "Oui, GanaCash est 100% gratuit. Il n'y a pas de frais de téléchargement, d'inscription ou d'utilisation. Vous gagnez seulement de l'argent.",
    faq2Q: "Combien puis-je gagner?",
    faq2A: "Cela dépend du temps que vous y consacrez. Les utilisateurs actifs gagnent entre 50 et 200€ par mois.",
    faq3Q: "Quand est-ce que je reçois mon paiement?",
    faq3A: "Les paiements sont traités dans les 24-48 heures une fois que vous demandez le retrait.",
    footerTagline: "Votre temps vaut de l'argent",
    terms: "Conditions",
    privacy: "Confidentialité",
    contact: "Contact",
    allRights: "Tous droits réservés. Plateforme vérifiée et sécurisée.",
    testimonial1: "J'utilise GanaCash pendant mon temps libre en voyageant dans le métro. J'ai gagné assez pour payer mes abonnements Netflix et Spotify chaque mois.",
    testimonial2: "Au début, j'étais sceptique, mais après avoir reçu mon premier paiement en moins de 48 heures, j'ai été convaincu. C'est légitime et sûr.",
    testimonial3: "L'application est très intuitive. Elle m'aide à couvrir les petites dépenses quotidiennes. Je la recommande particulièrement aux étudiants."
  },
  ar: {
    verified: "موثق",
    howItWorks: "كيف يعمل",
    testimonials: "الشهادات",
    security: "الأمان",
    support: "الدعم",
    download: "تحميل",
    platformVerified: "منصة موثقة وآمنة",
    heroTitle: "اكسب المال الحقيقي في وقت فراغك",
    heroDescription: "منصة موثوقة لكسب المال من خلال إكمال المهام البسيطة أو اللعب أو الإجابة على الاستطلاعات. أكثر من 50,000 مستخدم يثقون بنا بالفعل.",
    free: "100٪ مجاني",
    fastPayments: "مدفوعات في 24-48 ساعة",
    noInvestment: "بدون استثمار أولي",
    dataProtected: "بيانات محمية",
    downloadFrom: "قم بالتنزيل من منصتك المفضلة",
    recommended: "موصى به",
    secureDownload: "تنزيل آمن وموثق",
    downloadNow: "تنزيل الآن",
    directDownload: "تنزيل APK مباشر",
    downloadAPK: "تنزيل APK",
    bothSafe: "كلا الخيارين آمن ورسمي. اختر ما تفضله.",
    earnedToday: "مكتسب اليوم",
    activeUsers: "المستخدمون النشطون",
    totalPaid: "إجمالي المدفوعات",
    rating: "التقييم",
    paymentTime: "وقت الدفع",
    thisMonth: "هذا الشهر",
    thisWeek: "هذا الأسبوع",
    reviews: "مراجعات",
    averageVerified: "متوسط موثق",
    simplifiedProcess: "عملية مبسطة",
    howGanaCashWorks: "كيف يعمل GanaCash",
    howItWorksDesc: "ابدأ الكسب في 4 خطوات بسيطة. العملية بأكملها تستغرق أقل من 5 دقائق.",
    step1Title: "قم بتنزيل التطبيق",
    step1Desc: "اختر طريقة التنزيل المفضلة لديك. تثبيت سريع في أقل من دقيقتين.",
    step2Title: "إنشاء حسابك",
    step2Desc: "تسجيل بسيط بالبريد الإلكتروني. لا حاجة لبيانات مصرفية للبدء.",
    step3Title: "ابدأ الكسب",
    step3Desc: "العب أو أكمل الاستطلاعات أو المهام البسيطة. أنت تقرر كيف ومتى تكسب.",
    step4Title: "اسحب أموالك",
    step4Desc: "تحويل بنكي أو Bizum أو بطاقات هدايا. تتم معالجة المدفوعات في 24-48 ساعة.",
    multipleWaysTitle: "طرق متعددة للكسب",
    multipleWaysDesc: "اختر النشاط الذي يعجبك أكثر. كلها سهلة ومربحة.",
    playAndEarn: "العب واكسب",
    playDesc: "مجموعة واسعة من الألعاب الترفيهية العادية",
    gamesAvailable: "+15 لعبة متاحة",
    quickSurveys: "استطلاعات سريعة",
    surveysDesc: "شارك رأيك في استطلاعات مدتها 3-5 دقائق",
    perSurvey: "5-10 يورو لكل استطلاع",
    simpleTasks: "مهام بسيطة",
    tasksDesc: "أكمل المهمات السهلة مع مكافآت رائعة",
    dailyTasks: "مهام يومية جديدة",
    verifiedTestimonials: "شهادات موثقة",
    whatUsersSay: "ماذا يقول مستخدمونا",
    realStories: "قصص حقيقية من أشخاص يكسبون المال مع GanaCash",
    totalEarned: "إجمالي المكتسب",
    activeTime: "الوقت النشط",
    tasksCompleted: "المهام المكتملة",
    months: "أشهر",
    maxSecurity: "الحد الأقصى من الأمان",
    securityPriority: "أمنك هو أولويتنا",
    securityDesc: "تقنية التشفير على مستوى البنوك والشهادات الدولية",
    dataProtectedTitle: "بيانات محمية",
    dataProtectedDesc: "تشفير SSL على مستوى البنوك",
    securePayments: "مدفوعات آمنة",
    securePaymentsDesc: "معالجة معتمدة من PCI DSS",
    verification2FA: "التحقق بخطوتين",
    verification2FADesc: "مصادقة ثنائية العوامل اختيارية",
    verifiedCompany: "شركة موثقة",
    verifiedCompanyDesc: "مسجلة في Trustpilot ومنظمة",
    verifiedTrustpilot: "موثق في Trustpilot",
    sslCertified: "معتمد SSL",
    gdprCompliant: "متوافق مع GDPR",
    registeredCompany: "شركة مسجلة",
    withdrawalOptions: "خيارات سحب متعددة",
    withdrawalDesc: "اختر كيف تريد استلام أموالك. جميع الطرق آمنة وسريعة.",
    popular: "شعبي",
    transfer: "تحويل",
    startEarningToday: "ابدأ الكسب اليوم",
    ctaDescription: "انضم إلى أكثر من 50,000 شخص يكسبون بالفعل أموالاً إضافية بأمان وموثوقية.",
    downloadFree: "تنزيل مجاني",
    noHiddenCosts: "بدون تكاليف خفية",
    installation2min: "تثبيت في دقيقتين",
    faqTitle: "الأسئلة المتكررة",
    faq1Q: "هل هو مجاني حقاً؟",
    faq1A: "نعم، GanaCash مجاني 100٪. لا توجد تكاليف للتنزيل أو التسجيل أو الاستخدام. أنت فقط تكسب المال.",
    faq2Q: "كم يمكنني أن أكسب؟",
    faq2A: "يعتمد ذلك على الوقت الذي تخصصه. المستخدمون النشطون يكسبون ما بين 50-200 يورو شهرياً.",
    faq3Q: "متى أستلم دفعتي؟",
    faq3A: "تتم معالجة المدفوعات في غضون 24-48 ساعة بمجرد طلب السحب.",
    footerTagline: "وقتك يستحق المال",
    terms: "الشروط",
    privacy: "الخصوصية",
    contact: "اتصل",
    allRights: "جميع الحقوق محفوظة. منصة موثقة وآمنة.",
    testimonial1: "أستخدم GanaCash في وقت فراغي أثناء السفر في المترو. لقد كسبت ما يكفي لدفع اشتراكاتي في Netflix و Spotify كل شهر.",
    testimonial2: "في البداية كنت متشككاً، لكن بعد استلام أول دفعة لي في أقل من 48 ساعة، اقتنعت. إنه شرعي وآمن.",
    testimonial3: "التطبيق بديهي للغاية. يساعدني في تغطية النفقات الصغيرة اليومية. أوصي به بشكل خاص للطلاب."
  }
};

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentLang, setCurrentLang] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang, isRTL]);

  const testimonials = [
    {
      name: currentLang === 'ar' ? 'مريم غونزاليس' : currentLang === 'fr' ? 'Marie González' : 'María González',
      location: currentLang === 'ar' ? 'مدريد' : 'Madrid',
      amount: "487",
      period: `3 ${t.months}`,
      avatar: "from-pink-400 to-pink-600",
      quote: t.testimonial1,
      rating: 5,
      verified: true,
      tasks: 342
    },
    {
      name: currentLang === 'ar' ? 'كارلوس رويز' : currentLang === 'fr' ? 'Charles Ruiz' : 'Carlos Ruiz',
      location: currentLang === 'ar' ? 'برشلونة' : 'Barcelona',
      amount: "623",
      period: `4 ${t.months}`,
      avatar: "from-blue-400 to-blue-600",
      quote: t.testimonial2,
      rating: 5,
      verified: true,
      tasks: 428
    },
    {
      name: currentLang === 'ar' ? 'آنا مارتينيز' : currentLang === 'fr' ? 'Anne Martínez' : 'Ana Martínez',
      location: currentLang === 'ar' ? 'فالنسيا' : 'Valencia',
      amount: "891",
      period: `5 ${t.months}`,
      avatar: "from-purple-400 to-purple-600",
      quote: t.testimonial3,
      rating: 5,
      verified: true,
      tasks: 567
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const downloadOptions = [
    {
      name: "Itch.io",
      url: "https://ganacash.itch.io/ganacash",
      icon: FileText,
      color: "pink-600",
      feature: currentLang === 'es' ? "Plataforma de confianza para desarrolladores indie" : 
               currentLang === 'en' ? "Trusted platform for indie developers" :
               currentLang === 'fr' ? "Plateforme de confiance pour les développeurs indépendants" :
               "منصة موثوقة للمطورين المستقلين",
      badge: t.recommended
    },
    {
      name: "GitHub",
      url: "https://github.com/GanaCash/Apk-ganacash/releases/download/GanaCash/GanaCash.apk",
      icon: Github,
      color: "gray-900",
      feature: currentLang === 'es' ? "Código abierto y transparente" : 
               currentLang === 'en' ? "Open source and transparent" :
               currentLang === 'fr' ? "Code ouvert et transparent" :
               "مفتوح المصدر وشفاف",
      badge: null
    },
    {
      name: "Upload.app",
      url: "https://upload.app/download/ganacash/com.ganacash.app/a2355f439569e060f948ff484f84df943da670672c3dc59e372904806ca5eac1",
      icon: Download,
      color: "blue-600",
      feature: currentLang === 'es' ? "Descarga directa sin intermediarios" : 
               currentLang === 'en' ? "Direct download without intermediaries" :
               currentLang === 'fr' ? "Téléchargement direct sans intermédiaires" :
               "تنزيل مباشر بدون وسطاء",
      badge: null
    },
    {
      name: "CDN GanaCash",
      url: "https://ganacash.caxespana.workers.dev",
      icon: Globe,
      color: "green-600",
      feature: currentLang === 'es' ? "Red de distribución ultrarrápida" : 
               currentLang === 'en' ? "Ultra-fast distribution network" :
               currentLang === 'fr' ? "Réseau de distribution ultra-rapide" :
               "شبكة توزيع فائقة السرعة",
      badge: null
    }
  ];

  const steps = [
    { number: "01", title: t.step1Title, description: t.step1Desc, icon: Smartphone, color: "from-blue-500 to-blue-600" },
    { number: "02", title: t.step2Title, description: t.step2Desc, icon: Users, color: "from-purple-500 to-purple-600" },
    { number: "03", title: t.step3Title, description: t.step3Desc, icon: TrendingUp, color: "from-orange-500 to-orange-600" },
    { number: "04", title: t.step4Title, description: t.step4Desc, icon: CreditCard, color: "from-green-500 to-green-600" }
  ];

  const features = [
    { icon: Gamepad2, title: t.playAndEarn, description: t.playDesc, stats: t.gamesAvailable, color: "blue" },
    { icon: ClipboardCheck, title: t.quickSurveys, description: t.surveysDesc, stats: t.perSurvey, color: "purple" },
    { icon: Gift, title: t.simpleTasks, description: t.tasksDesc, stats: t.dailyTasks, color: "orange" }
  ];

  const securityFeatures = [
    { icon: Shield, title: t.dataProtectedTitle, description: t.dataProtectedDesc },
    { icon: Lock, title: t.securePayments, description: t.securePaymentsDesc },
    { icon: Award, title: t.verification2FA, description: t.verification2FADesc },
    { icon: CheckCircle2, title: t.verifiedCompany, description: t.verifiedCompanyDesc }
  ];

  const stats = [
    { value: "52,487", label: t.activeUsers, icon: Users, trend: `+2,340 ${t.thisMonth}` },
    { value: "€156,892", label: t.totalPaid, icon: DollarSign, trend: `+€8,500 ${t.thisWeek}` },
    { value: "4.8/5", label: t.rating, icon: Star, trend: `2,847 ${t.reviews}` },
    { value: "24-48h", label: t.paymentTime, icon: Clock, trend: t.averageVerified }
  ];

  const paymentMethods = [
    { name: t.transfer, icon: Building2, popular: true },
    { name: "Bizum", icon: Smartphone, popular: true },
    { name: "Amazon", icon: Gift, popular: false },
    { name: "Steam", icon: Gamepad2, popular: false },
    { name: "PayPal", icon: CreditCard, popular: true },
    { name: "+15", icon: Globe, popular: false }
  ];

  const colorMap = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-700",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-700"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">GanaCash</span>
                <div className="hidden sm:flex items-center gap-1 text-xs text-gray-600">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  <span>{t.verified}</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a href="#como-funciona" className="hover:text-orange-600 transition-colors">{t.howItWorks}</a>
              <a href="#testimonios" className="hover:text-orange-600 transition-colors">{t.testimonials}</a>
              <a href="#seguridad" className="hover:text-orange-600 transition-colors">{t.security}</a>
              <Link to={createPageUrl('Support')} className="hover:text-orange-600 transition-colors">{t.support}</Link>
            </div>

            <div className="flex items-center gap-2">
              <LanguageSelector currentLang={currentLang} onLanguageChange={setCurrentLang} />
              <a href="#descargas" className="hidden sm:flex">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-md">
                  <Download className="w-4 h-4 mr-2" />
                  <span>{t.download}</span>
                </Button>
              </a>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3">
                  <a
                    href="#como-funciona"
                    className="block py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.howItWorks}
                  </a>
                  <a
                    href="#testimonios"
                    className="block py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.testimonials}
                  </a>
                  <a
                    href="#seguridad"
                    className="block py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.security}
                  </a>
                  <Link
                    to={createPageUrl('Support')}
                    className="block py-2 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.support}
                  </Link>
                  <a href="#descargas" onClick={() => setMobileMenuOpen(false)} className="block w-full">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white shadow-md mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      {t.download}
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 bg-gradient-to-b from-orange-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6 border border-green-200">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-semibold">{t.platformVerified}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                {t.heroDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.free}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.fastPayments}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.noInvestment}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{t.dataProtected}</span>
                </div>
              </div>

              <div id="descargas" className="space-y-4 scroll-mt-24">
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                  {t.downloadFrom}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {downloadOptions.map((option, index) => (
                    <a
                      key={index}
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className={`relative bg-white border-2 border-gray-200 hover:border-orange-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg ${option.badge ? 'ring-2 ring-orange-200' : ''}`}>
                        {option.badge && (
                          <div className="absolute -top-2 -right-2">
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-300 text-xs">
                              {option.badge}
                            </Badge>
                          </div>
                        )}
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-br from-${option.color} to-${option.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <option.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-base text-gray-900 mb-1">{option.name}</div>
                            <div className="text-xs text-gray-600 line-clamp-2">{option.feature}</div>
                          </div>
                        </div>
                        <div className="flex items-center text-orange-600 text-sm font-medium">
                          {t.downloadNow}
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 group-hover:-translate-x-1' : 'ml-1 group-hover:translate-x-1'} transition-transform`} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {t.bothSafe}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
                {/* Animated Money Circle */}
                <motion.div
                  className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <DollarSign className="w-24 h-24 sm:w-32 sm:h-32 text-white" />
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </motion.div>

                <motion.div
                  className="absolute top-20 sm:top-32 right-5 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Gamepad2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </motion.div>

                <motion.div
                  className="absolute bottom-24 sm:bottom-32 left-8 sm:left-16 w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                >
                  <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </motion.div>

                <motion.div
                  className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-xl flex items-center justify-center shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                >
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                </motion.div>

                {/* Floating Money Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className={`absolute ${isRTL ? 'right-0 sm:-right-8' : 'left-0 sm:-left-8'} top-1/4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border-2 border-green-200`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 font-medium">{t.earnedToday}</div>
                      <motion.div 
                        className="text-base sm:text-lg font-bold text-green-600"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        +€23.50
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className={`absolute ${isRTL ? 'left-0 sm:-left-8' : 'right-0 sm:-right-8'} bottom-1/4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border-2 border-blue-200`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 font-medium">{t.activeUsers}</div>
                      <motion.div 
                        className="text-base sm:text-lg font-bold text-blue-600"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      >
                        52,487
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos((i * Math.PI) / 4) * 120, 0],
                      y: [0, Math.sin((i * Math.PI) / 4) * 120, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-orange-400" />
                <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-700 border-none">
              {t.simplifiedProcess}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.howGanaCashWorks}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.howItWorksDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-gray-200">{step.number}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 ${isRTL ? '-left-3' : '-right-3'} transform -translate-y-1/2 z-10`}>
                    <ArrowRight className={`w-6 h-6 text-gray-300 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.multipleWaysTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {t.multipleWaysDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[feature.color]} rounded-2xl flex items-center justify-center mb-6 border`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        {feature.stats}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-none">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              {t.verifiedTestimonials}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.whatUsersSay}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {t.realStories}
            </p>
          </div>

          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="relative inline-block">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${testimonials[activeTestimonial].avatar} flex items-center justify-center shadow-lg`}>
                        <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                      {testimonials[activeTestimonial].verified && (
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <div className="font-bold text-base sm:text-lg text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {testimonials[activeTestimonial].location}
                      </div>
                      <div className="flex justify-center md:justify-start gap-1 mb-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mb-4 opacity-50" />
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">
                          €{testimonials[activeTestimonial].amount}
                        </div>
                        <div className="text-xs text-gray-600">{t.totalEarned}</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">
                          {testimonials[activeTestimonial].period}
                        </div>
                        <div className="text-xs text-gray-600">{t.activeTime}</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">
                          {testimonials[activeTestimonial].tasks}
                        </div>
                        <div className="text-xs text-gray-600">{t.tasksCompleted}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-orange-600 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="seguridad" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-none">
              <Shield className="w-3 h-3 mr-1" />
              {t.maxSecurity}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.securityPriority}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.securityDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-2 border-blue-200 bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium">{t.verifiedTrustpilot}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium">{t.sslCertified}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium">{t.gdprCompliant}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-xs sm:text-sm font-medium">{t.registeredCompany}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.withdrawalOptions}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {t.withdrawalDesc}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className={`relative px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-500 transition-all duration-300 ${
                  method.popular ? 'ring-2 ring-orange-500 ring-offset-2' : ''
                }`}>
                  {method.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-orange-600 text-white border-none text-xs">
                        {t.popular}
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    <span className="font-semibold text-sm sm:text-base text-gray-900">{method.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t.startEarningToday}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-2xl font-bold w-full sm:w-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.downloadFree}
              </Button>
              <div className="text-white/90 text-sm">
                <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                  <Check className="w-4 h-4" />
                  <span>{t.noHiddenCosts}</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Check className="w-4 h-4" />
                  <span>{t.installation2min}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.faqTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t.faq1Q, a: t.faq1A },
              { q: t.faq2Q, a: t.faq2A },
              { q: t.faq3Q, a: t.faq3A }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-orange-500 transition-colors">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">GanaCash</div>
                <div className="text-sm text-gray-400">{t.footerTagline}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
              <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
              <Link to={createPageUrl('Support')} className="hover:text-white transition-colors">{t.contact}</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2024 GanaCash. {t.allRights}
          </div>
        </div>
      </footer>
    </div>
  );
}




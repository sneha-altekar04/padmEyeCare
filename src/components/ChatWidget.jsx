import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Phone, Send, UserRound, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./ChatWidget.css";

const FAQ_TOPICS_EN = [
  { label: "When to get eyes checked?", value: "when to check eyes" },
  { label: "Eye strain from screen", value: "eye strain screen tired" },
  { label: "Glasses & exercises", value: "exercises reduce glasses number" },
  { label: "Cataract surgery – when?", value: "need cataract surgery when" },
  { label: "Lens types for cataract", value: "which lens best cataract" },
  { label: "Diabetic eye check", value: "diabetic eye check yearly" },
  { label: "Floaters & flashes", value: "black spots floaters flashes" },
  { label: "Glaucoma", value: "glaucoma silent thief" },
  { label: "Is LASIK safe?", value: "lasik safe number come back" },
  { label: "Child sitting close to TV", value: "child close to tv eye" },
  { label: "OPD vs Emergency", value: "opd emergency difference" },
  { label: "Insurance / TPA", value: "insurance tpa cashless" },
];

const FAQ_TOPICS_MR = [
  { label: "डोळे कधी तपासावेत?", value: "डोळे कधी तपासावेत" },
  { label: "स्क्रीनमुळे डोळे थकणे", value: "मोबाईल स्क्रीन डोळे थकतात" },
  { label: "चष्मा व व्यायाम", value: "व्यायाम चष्मा नंबर कमी" },
  { label: "मोतीबिंदू शस्त्रक्रिया कधी?", value: "मोतीबिंदू शस्त्रक्रिया लागते का" },
  { label: "भिंगाचे प्रकार", value: "कोणती भिंग उत्तम" },
  { label: "मधुमेह डोळा तपासणी", value: "मधुमेह डोळे दर वर्षी" },
  { label: "काळे ठिपके / झगमगाट", value: "काळे ठिपके झगमगाट दिसतात" },
  { label: "काचबिंदू", value: "काचबिंदू म्हणजे काय" },
  { label: "LASIK सुरक्षित?", value: "lasik सुरक्षित नंबर परत येतो" },
  { label: "मूल TV जवळून पाहते", value: "मूल tv जवळून पाहते" },
  { label: "OPD vs इमर्जन्सी", value: "opd इमर्जन्सी फरक काय" },
  { label: "इन्शुरन्स / TPA", value: "इन्शुरन्स tpa कॅशलेस" },
];

const EN_REPLY_MAP = [
  {
    keywords: ["appointment", "book", "schedule"],
    reply:
      "You can book an appointment by calling 7030775791. Please share your preferred date and time.",
  },
  {
    keywords: ["timing", "time", "open", "hours"],
    reply:
      "Hospital checkup timings are Monday to Saturday:\n• Morning: 9:30 AM – 12:00 PM\n• Evening: 5:00 PM – 6:30 PM",
  },
  {
    keywords: ["when to check", "how often check", "checkup frequency"],
    reply:
      "When to get your eyes checked:\n• No problems: Once every 2 years\n• Age 40+, Diabetes, BP, or family history of glaucoma: Every year\n• Kids: At 6 months, at 3 years, before school starts\n• Sudden problem: Immediately — don't wait",
  },
  {
    keywords: ["strain", "tired eyes", "screen tired", "digital eye", "20-20-20"],
    reply:
      "This is called Digital Eye Strain. It is not permanent damage.\n\nTry the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Blink often.\n\nIf headache or blurry vision continues, please visit us.",
  },
  {
    keywords: ["exercises reduce", "number reduce", "exercise glasses", "power reduce"],
    reply:
      "No — eye exercises cannot reduce your glasses number. They only help reduce strain.\n\nNumbers usually stabilize after 18–21 years of age. Surgery like LASIK can help remove glasses.",
  },
  {
    keywords: ["need cataract", "cataract when", "surgery right away", "cataract immediately"],
    reply:
      "You need cataract surgery only when it makes daily work difficult — like driving, reading, or watching TV.\n\nThere are no drops or medicines to remove cataract. Surgery is very safe and takes only 10–15 minutes.",
  },
  {
    keywords: ["which lens", "lens type", "best lens", "premium lens", "toric lens"],
    reply:
      "Lens options for cataract surgery:\n• Basic lens: Clear distance vision — reading glasses needed\n• Premium lens: Most people see far and near without glasses\n• Toric lens: For those with cylinder number / astigmatism\n\nWe'll check your eyes and suggest the best option for you.",
  },
  {
    keywords: ["diabetic eye", "diabetes eye", "retinopathy", "yearly eye check diabetes"],
    reply:
      "Diabetes can damage the retina (back of the eye) — this is called Diabetic Retinopathy.\n\nThere are no symptoms in early stages. If unchecked, it can cause permanent blindness. A yearly retina check can save your sight.",
  },
  {
    keywords: ["black spot", "floater", "flashes of light", "dark curtain"],
    reply:
      "A few floaters are normal with age. But if you suddenly see:\n• Many new floaters\n• Flashes of light\n• A dark curtain in vision\n\nCome to hospital immediately — it could be a retinal tear.",
  },
  {
    keywords: ["glaucoma", "eye pressure", "silent thief", "pressure test"],
    reply:
      "Glaucoma is high pressure in the eye that damages the optic nerve. It's called the 'silent thief of sight' because there are no early symptoms.\n\nVision lost to glaucoma cannot be restored. A simple pressure test can detect it early.",
  },
  {
    keywords: ["lasik", "laser eye", "number come back", "lasik result"],
    reply:
      "LASIK is very safe when tests are normal. We check eye number, corneal thickness, and eye health first.\n\nFor 95% of patients, results last a lifetime. Very few may need a minor touch-up after many years.",
  },
  {
    keywords: ["close to tv", "child tv", "sitting close", "child vision", "child eye"],
    reply:
      "Yes — sitting very close to the TV can be a sign of poor vision. Other signs to watch:\n• Frequent eye rubbing\n• Poor marks in school\n\nKids don't complain about blurry vision because they think it's normal. Get their eyes checked before age 5.",
  },
  {
    keywords: ["opd", "emergency", "24x7", "urgent care"],
    reply:
      "OPD: Regular check-up, glasses, cataract, dry eyes — take an appointment.\n\nEmergency (come immediately, 24×7):\n• Sudden vision loss\n• Eye injury or severe pain\n• Chemical in eye\n• Sudden floaters or flashes",
  },
  {
    keywords: ["cataract", "retina", "treatment", "service", "available", "operation"],
    reply:
      "Available treatments:\n1. Computerised Eye Check Up\n2. Cataract Diagnosis & Treatment\n3. Retina / Diabetic Eye Check Up\n4. Squint & Oculoplasty\n5. Glaucoma Diagnosis & Management\n6. Laser Facility & Treatment\n7. LASIK Treatment",
  },
  {
    keywords: ["cashless", "insurance", "tpa"],
    reply:
      "Yes, cashless facility is available with most TPAs and insurance companies. Please bring your insurance card and ID proof. Our billing team will help you.",
  },
  {
    keywords: ["address", "location", "where", "direction"],
    reply:
      "Padm Eye Care is in Anand Nagar, Ramwadi, Pen - 402107 (behind Gajanan Maharaj Temple).",
  },
];

const MR_REPLY_MAP = [
  {
    keywords: ["appointment", "book", "अपॉइंटमेंट", "बुक"],
    reply:
      "अपॉइंटमेंट बुक करण्यासाठी 7030775791 वर कॉल करा. कृपया दिवस आणि वेळ सांगा.",
  },
  {
    keywords: ["timing", "time", "वेळ", "किती वाजता"],
    reply:
      "रुग्णालय वेळ: सोमवार ते शनिवार\n• सकाळी: 9:30 ते 12:00\n• संध्याकाळी: 5:00 ते 6:30",
  },
  {
    keywords: ["कधी तपासावेत", "किती वेळाने", "तपासणी कधी"],
    reply:
      "डोळे कधी तपासावेत:\n• काही त्रास नसल्यास: दर 2 वर्षांनी\n• वय 40+, मधुमेह, BP किंवा काचबिंदूचा इतिहास: दर वर्षी\n• लहान मुले: 6 महिन्यांनी, 3 वर्षांनी, शाळेत जाण्यापूर्वी\n• अचानक त्रास: लगेच डॉक्टरांकडे जा",
  },
  {
    keywords: ["थकतात", "स्क्रीन", "मोबाईल थकणे", "20-20-20", "डिजिटल"],
    reply:
      "याला डिजिटल आय स्ट्रेन म्हणतात. यामुळे कायमचे नुकसान होत नाही.\n\n20-20-20 नियम वापरा: दर 20 मिनिटांनी, 20 फूट लांब 20 सेकंद पहा. वारंवार डोळे मिचकावा.\n\nडोकेदुखी किंवा अंधुक दिसणे चालू राहिल्यास डॉक्टरांना भेटा.",
  },
  {
    keywords: ["व्यायाम चष्मा", "नंबर कमी", "व्यायामाने"],
    reply:
      "नाही — डोळ्यांच्या व्यायामाने चष्म्याचा नंबर कमी होत नाही. त्यामुळे फक्त ताण कमी होतो.\n\n18-21 वयानंतर नंबर सहसा स्थिर होतो.",
  },
  {
    keywords: ["मोतीबिंदू शस्त्रक्रिया", "शस्त्रक्रिया लागते", "लगेच शस्त्रक्रिया"],
    reply:
      "मोतीबिंदूची शस्त्रक्रिया तेव्हाच लागते जेव्हा रोजची कामे — गाडी चालवणे, वाचणे, TV पाहणे — अवघड होतात.\n\nमोतीबिंदूसाठी कोणतेही औषध किंवा थेंब नाही. शस्त्रक्रिया सुरक्षित आहे आणि 10-15 मिनिटांत होते.",
  },
  {
    keywords: ["कोणती भिंग", "भिंगाचे", "प्रीमियम भिंग", "टॉरिक"],
    reply:
      "मोतीबिंदू शस्त्रक्रियेत भिंगाचे प्रकार:\n• साधी भिंग: लांबचे स्पष्ट — वाचण्यास चष्मा लागेल\n• प्रीमियम भिंग: चष्म्याशिवाय लांबचे व जवळचे दिसते\n• टॉरिक भिंग: सिलिंडर नंबर असल्यास\n\nआम्ही तुमचे डोळे तपासून योग्य पर्याय सांगू.",
  },
  {
    keywords: ["मधुमेह डोळे", "रेटिनोपॅथी", "डायबेटिक", "दर वर्षी का"],
    reply:
      "मधुमेहामुळे डोळ्याच्या पडद्याला इजा होते — याला डायबेटिक रेटिनोपॅथी म्हणतात.\n\nसुरुवातीला काहीच लक्षण नसते. तपासले नाही तर कायमचे अंधत्व येऊ शकते. वर्षातून एकदा पडदा तपासल्याने दृष्टी वाचू शकते.",
  },
  {
    keywords: ["काळे ठिपके", "झगमगाट दिसतात", "ठिपके दिसतात", "पडद्यासारखे"],
    reply:
      "थोडे ठिपके वयानुसार सामान्य आहेत. पण अचानक:\n• खूप ठिपके दिसणे\n• प्रकाशाचा झगमगाट\n• पडद्यासारखे अंधार\n\nयापैकी काही झाल्यास लगेच हॉस्पिटलमध्ये या — पडद्याला चीर गेली असू शकते.",
  },
  {
    keywords: ["काचबिंदू", "डोळ्यातील दाब", "मूक दृष्टीचोर"],
    reply:
      "काचबिंदू म्हणजे डोळ्यातील दाब वाढून नस खराब होणे. सुरुवातीला काहीच लक्षण नसते — म्हणून याला 'मूक दृष्टीचोर' म्हणतात.\n\nकाचबिंदूमुळे गेलेली दृष्टी परत येत नाही. साध्या दाब तपासणीने लवकर ओळखता येते.",
  },
  {
    keywords: ["lasik", "लॅसिक", "नंबर परत येतो", "lasik सुरक्षित"],
    reply:
      "चाचण्या नॉर्मल असतील तर LASIK खूप सुरक्षित आहे. आम्ही आधी नंबर, कॉर्नियाची जाडी व डोळ्याचे आरोग्य तपासतो.\n\n95% लोकांना आयुष्यभर रिझल्ट टिकतो. फार थोड्यांना अनेक वर्षांनी थोडा नंबर परत येऊ शकतो.",
  },
  {
    keywords: ["मूल tv", "जवळून पाहते", "जवळून tv", "मुले चष्मा"],
    reply:
      "हो, TV जवळून पाहणे हे दृष्टीच्या समस्येचे लक्षण असू शकते. इतर लक्षणे:\n• वारंवार डोळे चोळणे\n• शाळेत कमी मार्क्स\n\nमुले अंधुक दिसत असल्याची तक्रार करत नाहीत कारण त्यांना तेच नॉर्मल वाटते. 5 वर्षांपूर्वी डोळे तपासून घ्या.",
  },
  {
    keywords: ["opd", "इमर्जन्सी", "24x7", "फरक काय"],
    reply:
      "OPD: नियमित तपासणी, चष्मा, मोतीबिंदू — अपॉइंटमेंट घ्या.\n\nइमर्जन्सी (24×7 लगेच या):\n• अचानक दृष्टी जाणे\n• डोळ्याला मार / तीव्र वेदना\n• डोळ्यात केमिकल\n• झगमगाट किंवा ठिपके",
  },
  {
    keywords: ["cataract", "retina", "उपचार", "सेवा", "मोतीबिंदू"],
    reply:
      "उपलब्ध उपचार:\n1. संगणकाद्वारे डोळे तपासणी\n2. मोतीबिंदू निदान व उपचार\n3. रेटिना / मधुमेह डोळा तपासणी\n4. स्क्विंट व ऑक्युलोप्लास्टी\n5. काचबिंदू निदान व उपचार\n6. लेझरद्वारे उपचार\n7. लॅसिक उपचार",
  },
  {
    keywords: ["cashless", "insurance", "विमा", "tpa", "कॅशलेस"],
    reply:
      "हो, बहुतेक TPA आणि विमा कंपन्यांसाठी कॅशलेस सुविधा आहे. कृपया विमा कार्ड आणि ओळखपत्र सोबत आणा. आमची बिलिंग टीम मदत करेल.",
  },
  {
    keywords: ["address", "location", "पत्ता", "कुठे"],
    reply:
      "पद्म आय केअर, आनंद नगर, रामवाडी, पेण - 402107 (गजानन महाराज मंदिर मागे).",
  },
];

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function findReply(message, isMarathi) {
  const text = message.toLowerCase();
  const map = isMarathi ? MR_REPLY_MAP : EN_REPLY_MAP;
  const match = map.find((item) => item.keywords.some((word) => text.includes(word)));
  if (match) return match.reply;

  return isMarathi
    ? "मी तुमची मदत करू शकतो. 'faq' लिहा किंवा अपॉइंटमेंट, वेळ, उपचार, विमा, पत्ता यापैकी काहीही लिहा."
    : "I can help with appointments, timings, treatments, and more. Type 'faq' to see common questions, or 'admin' to reach our team.";
}

export default function ChatWidget() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  const adminWhatsAppUrl = "https://wa.me/917030775791";

  const isMarathi = i18n.language === "mr";

  const copy = useMemo(
    () =>
      isMarathi
        ? {
            title: "Live Chat सहाय्य",
            subtitle: "झटपट मदतीसाठी मेसेज करा",
            placeholder: "तुमचा मेसेज लिहा...",
            open: "Chat उघडा",
            close: "Chat बंद करा",
            adminBtn: "Admin शी बोला",
            quick1: "अपॉइंटमेंट",
            quick2: "वेळ",
            quick3: "उपचार",
            quick4: "FAQs",
            faqTitle: "विषय निवडा:",
            welcome:
              "नमस्कार. मी तुमची प्राथमिक मदत करू शकतो. गरज असल्यास admin लगेच उत्तर देतील.",
            handoff:
              "तुमचा मेसेज admin कडे पाठवला आहे. त्वरित बोलण्यासाठी WhatsApp: 7030775791",
          }
        : {
            title: "Live Chat Support",
            subtitle: "Message for quick help",
            placeholder: "Type your message...",
            open: "Open chat",
            close: "Close chat",
            adminBtn: "Talk to Admin",
            quick1: "Appointment",
            quick2: "Timings",
            quick3: "Treatments",
            quick4: "FAQs",
            faqTitle: "Select a topic:",
            welcome:
              "Hello, I can help with basic queries. If needed, our admin team can continue the chat.",
            handoff:
              "Your request is marked for admin follow-up. For instant help use WhatsApp: 7030775791",
          },
    [isMarathi]
  );

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: copy.welcome,
          time: nowTime(),
        },
      ]);
    }
  }, [copy.welcome, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addUserAndReply = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      time: nowTime(),
    };

    const isFaqRequest = trimmed.toLowerCase().includes("faq");
    let botMsg;

    if (isFaqRequest) {
      botMsg = {
        id: `bot-${Date.now()}-1`,
        role: "bot",
        text: copy.faqTitle,
        options: isMarathi ? FAQ_TOPICS_MR : FAQ_TOPICS_EN,
        time: nowTime(),
      };
    } else {
      let botText = findReply(trimmed, isMarathi);
      if (trimmed.toLowerCase().includes("admin") || trimmed.toLowerCase().includes("human")) {
        botText = copy.handoff;
      }
      botMsg = {
        id: `bot-${Date.now()}-1`,
        role: "bot",
        text: botText,
        time: nowTime(),
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleAdminHandoff = () => {
    addUserAndReply("admin");
    window.open(adminWhatsAppUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="chat-widget" aria-live="polite">
      {isOpen ? (
        <section className="chat-panel" aria-label={copy.title}>
          <header className="chat-header">
            <div>
              <h3>{copy.title}</h3>
              <p>{copy.subtitle}</p>
            </div>
            <button
              type="button"
              className="chat-icon-btn"
              onClick={() => setIsOpen(false)}
              aria-label={copy.close}
            >
              <X size={18} />
            </button>
          </header>

          <div className="chat-quick-actions">
            <button type="button" onClick={() => addUserAndReply(copy.quick1)}>{copy.quick1}</button>
            <button type="button" onClick={() => addUserAndReply(copy.quick2)}>{copy.quick2}</button>
            <button type="button" onClick={() => addUserAndReply(copy.quick3)}>{copy.quick3}</button>
            <button type="button" className="quick-faq-btn" onClick={() => addUserAndReply("faq")}>{copy.quick4}</button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((msg) => (
              <article key={msg.id} className={`chat-msg ${msg.role === "user" ? "chat-user" : "chat-bot"}`}>
                <div className="chat-avatar">{msg.role === "user" ? <UserRound size={14} /> : <MessageCircle size={14} />}</div>
                <div className="chat-bubble-wrap">
                  <p>{msg.text}</p>
                  {msg.options && (
                    <div className="chat-options">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          className="chat-option-chip"
                          onClick={() => addUserAndReply(opt.value)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <span>{msg.time}</span>
                </div>
              </article>
            ))}
          </div>

          <footer className="chat-footer">
            <button
              type="button"
              className="admin-handoff"
              onClick={handleAdminHandoff}
            >
              <Phone size={14} /> {copy.adminBtn}
            </button>

            <div className="chat-input-row">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addUserAndReply(input);
                }}
                placeholder={copy.placeholder}
              />
              <button type="button" onClick={() => addUserAndReply(input)} aria-label="Send message">
                <Send size={15} />
              </button>
            </div>
          </footer>
        </section>
      ) : null}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={copy.open}
      >
        <MessageCircle size={20} />
      </button>
    </div>
  );
}

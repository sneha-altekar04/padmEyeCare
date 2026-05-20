import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Phone, Send, UserRound, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./ChatWidget.css";

const EN_REPLY_MAP = [
  {
    keywords: ["appointment", "book", "schedule"],
    reply:
      "You can book an appointment by calling 7030775791. Please share your preferred date and time.",
  },
  {
    keywords: ["timing", "time", "open", "hours"],
    reply:
      "Hospital checkup timings are Monday to Saturday: 9:30 AM to 12:00 PM and 5:00 PM to 6:30 PM.",
  },
  {
    keywords: ["cataract", "retina", "lasik", "treatment", "service"],
    reply:
      "We provide cataract surgery, retina care, pediatric eye care, and advanced diagnostic treatments.",
  },
  {
    keywords: ["cashless", "insurance"],
    reply:
      "Cashless insurance facility is available for selected partners. Please share your insurer name.",
  },
  {
    keywords: ["address", "location", "where"],
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
      "रुग्णालय वेळ: सोमवार ते शनिवार, सकाळी 9:30 ते 12:00 आणि संध्याकाळी 5:00 ते 6:30.",
  },
  {
    keywords: ["cataract", "retina", "lasik", "उपचार", "सेवा"],
    reply:
      "आमच्याकडे मोतीबिंदू, रेटिना, बाल नेत्रतपासणी आणि प्रगत नेत्र उपचार उपलब्ध आहेत.",
  },
  {
    keywords: ["cashless", "insurance", "विमा"],
    reply:
      "निवडक विमा कंपन्यांसाठी कॅशलेस सुविधा उपलब्ध आहे. कृपया विमा कंपनीचे नाव पाठवा.",
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
    ? "मी तुमची मदत करू शकतो. अपॉइंटमेंट, वेळ, उपचार, विमा किंवा पत्ता लिहा. तुम्हाला admin शी बोलायचे असल्यास 'admin' लिहा."
    : "I can help with appointment, timings, treatments, insurance, or location. Type 'admin' if you want to talk to our admin team.";
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

    let botText = findReply(trimmed, isMarathi);
    if (trimmed.toLowerCase().includes("admin") || trimmed.toLowerCase().includes("human")) {
      botText = copy.handoff;
    }

    const botMsg = {
      id: `bot-${Date.now()}-1`,
      role: "bot",
      text: botText,
      time: nowTime(),
    };

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
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((msg) => (
              <article key={msg.id} className={`chat-msg ${msg.role === "user" ? "chat-user" : "chat-bot"}`}>
                <div className="chat-avatar">{msg.role === "user" ? <UserRound size={14} /> : <MessageCircle size={14} />}</div>
                <div className="chat-bubble-wrap">
                  <p>{msg.text}</p>
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

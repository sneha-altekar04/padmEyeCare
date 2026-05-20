import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav_discover: "Discover",
      nav_doctors: "Doctors",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_book: "Book Appointment",
      nav_title: "Padm Superspeciality Eye Care",

      hero_heading: "Advanced Eye Care You Can Trust",
      hero_desc:
        "Computerised eye checkup, cataract surgery, retina care and LASIK treatments.",
      hero_badge: "Padm Superspeciality Eye Care",
      hero_doctor_title: "Expert Doctor Team",
      hero_doctor_sub: "Trusted care, every day",
      hero_btn_book: "Book Appointment",
      hero_btn_doctor: "Find Doctor",
      hero_stat1: "20,000+ Surgeries",
      hero_stat2: "Expert Specialist",
      hero_stat3: "Cashless Available",

      services_heading: "Our Services",
      services_sub: "Comprehensive eye care under one roof",
      treatments_modal_heading: "Our Treatments",
      treatments_modal_sub:
        "Tap any treatment to view images and complete details",
      treatments_modal_close: "Close treatments overview",

      stats_heading: "Our Experience",

      doctor_heading: "Meet Your Doctor",
      doctor_name: "Dr. Vishal Vasant Patil",
      doctor_quals: "M.B.B.S, DNB (Ophthalmology), D.O.M.S., FPOS",
      doctor_spec1: "Pediatric Ophthalmologist (Child Eye Specialist)",
      doctor_spec2: "Consulting Eye (Phaco) Surgeon",
      doctor_edu_heading: "Education and Training",
      doctor_surgery_heading: "Surgical Experience",

      timing_heading: "Hospital Timings",
      timing_checkup: "Checkup Timings",
      timing_days: "Monday to Saturday",
      timing_morning: "Morning: 9:30 AM to 12:00 PM",
      timing_evening: "Evening: 5:00 PM to 6:30 PM",
      timing_operation: "Operation Timings",
      timing_op_time: "Afternoon: 12:30 PM to 4:30 PM",
      timing_tuesday: "On Tuesdays, please call before visiting",

      opd_heading: "OPD Rate List",
      opd_sub: "Transparent pricing for all consultations",

      insurance_heading: "Cashless Insurance Partners",
      insurance_sub: "Available cashless empanelment in our hospital",
      insurance_note:
        "For cataract surgery cashless facility, inform doctor before operation. Bills from government offices, court, police and district bodies are not the hospital's responsibility.",

      contact_heading: "Find Us",
      contact_address:
        "Plot No. 40, Anand Nagar, Behind Gajanan Maharaj Temple, Ramwadi, Pen - 402107",
      contact_phone1: "7030775791",
      contact_phone2: "9859853853",
      contact_email: "padmeyecare@gmail.com",

      footer_rights:
        "Copyright 2026 Padm Superspeciality Eye Care. All Rights Reserved.",
      footer_tagline: "Advanced Eye Care You Can Trust",
    },
  },
  mr: {
    translation: {
      nav_discover: "शोधा",
      nav_doctors: "डॉक्टर",
      nav_services: "सेवा",
      nav_contact: "संपर्क",
      nav_book: "अपॉइंटमेंट बुक करा",
      nav_title: "पद्म सुपरस्पेशालिटी आय केअर",

      hero_heading: "विश्वासार्ह प्रगत नेत्र उपचार",
      hero_desc:
        "संगणकाद्वारे तपासणी, मोतीबिंदू शस्त्रक्रिया, रेटिना उपचार आणि लेसर सुविधा.",
      hero_badge: "पद्म सुपरस्पेशालिटी आय केअर",
      hero_doctor_title: "तज्ज्ञ डॉक्टर टीम",
      hero_doctor_sub: "दररोज विश्वासार्ह सेवा",
      hero_btn_book: "अपॉइंटमेंट बुक करा",
      hero_btn_doctor: "डॉक्टर शोधा",
      hero_stat1: "20,000+ शस्त्रक्रिया",
      hero_stat2: "तज्ज्ञ विशेषज्ञ",
      hero_stat3: "कॅशलेस सुविधा",

      services_heading: "आमच्या सेवा",
      services_sub: "एकाच ठिकाणी सर्व नेत्र उपचार",
      treatments_modal_heading: "आमचे उपचार",
      treatments_modal_sub:
        "उपचाराची छायाचित्रे आणि सविस्तर माहिती पाहण्यासाठी कोणताही उपचार निवडा",
      treatments_modal_close: "उपचारांची यादी बंद करा",

      stats_heading: "आमचा अनुभव",

      doctor_heading: "तुमचे डॉक्टर",
      doctor_name: "डॉ. विशाल व. पाटील",
      doctor_quals: "M.B.B.S, DNB (Ophthalmology), D.O.M.S., FPOS",
      doctor_spec1: "बालरोग नेत्रतज्ज्ञ (मुलांचे डोळे तज्ज्ञ)",
      doctor_spec2: "सल्लागार नेत्र (फेको) शल्यचिकित्सक",
      doctor_edu_heading: "शिक्षण आणि प्रशिक्षण",
      doctor_surgery_heading: "शस्त्रक्रियेचा अनुभव",

      timing_heading: "रुग्णालय वेळा",
      timing_checkup: "चेकअप ची वेळ",
      timing_days: "सोमवार ते शनिवार",
      timing_morning: "सकाळी 9:30 ते 12:00",
      timing_evening: "संध्याकाळी 5:00 ते 6:30",
      timing_operation: "ऑपरेशनची वेळ",
      timing_op_time: "दुपारी 12:30 ते 4:30",
      timing_tuesday: "मंगळवारी येताना कॉल करून यावे",

      opd_heading: "ओपीडी दर यादी",
      opd_sub: "सर्व तपासणीसाठी पारदर्शक किंमत",

      insurance_heading: "कॅशलेस विमा भागीदार",
      insurance_sub: "आमच्या रुग्णालयात उपलब्ध कॅशलेस एम्पॅनेलमेंट",
      insurance_note:
        "मोतीबिंदू शस्त्रक्रियेसाठी कॅशलेस सुविधा उपलब्ध आहे. ऑपरेशनच्या आधी डॉक्टरांना कळवणे बंधनकारक आहे. सरकारी कार्यालय, कोर्ट, पोलीस आणि इतर जिल्हा परिषदेचे बिल पास होण्याची जबाबदारी हॉस्पिटलची राहणार नाही.",

      contact_heading: "आम्हाला शोधा",
      contact_address:
        "प्लॉट नं. 40, आनंद नगर, गजानन महाराज मंदिर मागे, रामवाडी, पेण - 402107",
      contact_phone1: "7030775791",
      contact_phone2: "9859853853",
      contact_email: "padmeyecare@gmail.com",

      footer_rights:
        "कॉपीराइट 2026 पद्म सुपरस्पेशालिटी आय केअर. सर्व हक्क राखीव.",
      footer_tagline: "विश्वासार्ह प्रगत नेत्र उपचार",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

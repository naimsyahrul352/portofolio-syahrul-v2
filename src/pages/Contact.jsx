import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { Mail, Phone, Linkedin, Instagram, Music2 } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useScrollAnimate(0.3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const message = e.target.message.value;

    const text = `Halo, saya ${name}%0AContact: ${contact}%0A%0A${message}`;
    window.open(`https://wa.me/6285602763448?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div
        ref={ref}
        className={`
          w-full max-w-6xl
          transition-all duration-700
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}
        `}
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="contact-card">
            <ContactLink
              icon={<Mail />}
              label="Email"
              value="syahrulnaim923@gmail.com"
              href="mailto:syahrulnaim923@gmail.com"
            />
            <ContactLink
              icon={<Phone />}
              label="Phone / WhatsApp"
              value="+62 856-0276-3448"
              href="https://wa.me/6285602763448"
            />
            <ContactLink
              icon={<Linkedin />}
              label="LinkedIn"
              value="m-syahrul naim"
              href="https://www.linkedin.com/in/m-syahrul-naim"
            />
            <ContactLink
              icon={<Instagram />}
              label="Instagram"
              value="syahrul__nm"
              href="https://instagram.com/syahrul__nm"
            />
            <ContactLink
              icon={<Music2 />}
              label="TikTok"
              value="syhrlnm__"
              href="https://www.tiktok.com/@syhrlnm__"
            />
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="contact-card">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="contact-input"
            />
            <input
              name="contact"
              placeholder="Email or Phone"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="contact-input resize-none"
            />
            <button className="contact-button">Send via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center gap-4
        p-3 rounded-xl
        transition-all duration-300
        hover:bg-white/10
        hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
        hover:-translate-y-1
      "
    >
      <div className="text-cyan-400 group-hover:scale-110 transition">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-white/50">{label}</span>
        <span className="text-white">{value}</span>
      </div>
    </a>
  );
}

import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "GitHub",
      icon: "github",
      url: "#",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "#",
      color: "hover:bg-sky-500",
    },
  ];

  const contactInfo = [
    {
      icon: "envelope",
      label: "Email",
      value: "njonougaby45@gmail.com",
      href: "mailto:njonougaby45@gmail.com",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "phone",
      label: "Téléphone",
      value: "+33 7 80 80 81 08",
      href: "tel:+33780808108",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "map-marker-alt",
      label: "Localisation",
      value: "Ile de France, France",
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 relative overflow-hidden  dark:bg-gray-900">
      <div className="absolute inset-0 bg-grid-gray-500/10 bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Contactez</span> Moi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Je suis toujours ouvert aux nouvelles opportunités et
            collaborations. N'hésitez pas à me contacter pour discuter de vos
            projets.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Informations de Contact
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} 
                        flex items-center justify-center transform group-hover:scale-110 
                        transition-transform duration-300`}
                      >
                        <i
                          className={`fas fa-${info.icon} text-white text-lg`}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 dark:text-white hover:text-primary-600 
                              dark:hover:text-primary-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-900 dark:text-white">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                    Retrouvez-moi sur
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 
                          flex items-center justify-center group transition-all duration-300 
                          ${social.color}`}
                      >
                        <i
                          className={`fab fa-${social.icon} text-gray-600 dark:text-gray-400 
                          group-hover:text-white transition-colors`}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveInput("name")}
                    onBlur={() => setActiveInput(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 
                      dark:bg-gray-900/50 outline-none transition-all duration-300
                      ${
                        activeInput === "name"
                          ? "border-primary-500 dark:border-primary-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 
                      dark:bg-gray-900/50 outline-none transition-all duration-300
                      ${
                        activeInput === "email"
                          ? "border-primary-500 dark:border-primary-500"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setActiveInput("subject")}
                  onBlur={() => setActiveInput(null)}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 
                    dark:bg-gray-900/50 outline-none transition-all duration-300
                    ${
                      activeInput === "subject"
                        ? "border-primary-500 dark:border-primary-500"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  placeholder="Le sujet de votre message"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveInput("message")}
                  onBlur={() => setActiveInput(null)}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-gray-50 
                    dark:bg-gray-900/50 outline-none transition-all duration-300
                    ${
                      activeInput === "message"
                        ? "border-primary-500 dark:border-primary-500"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  placeholder="Votre message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl text-white font-semibold 
                  relative overflow-hidden group transition-all duration-300
                  ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary-600 hover:bg-primary-700"
                  }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <i
                        className="fas fa-paper-plane group-hover:translate-x-1 
                        transition-transform duration-300"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

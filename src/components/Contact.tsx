import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
      email: string;
      subject: string;
      message: string;
}

const Contact: React.FC = () => {
      const [formData, setFormData] = useState<FormData>({
            email: '',
            subject: '',
            message: '',
      });

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData as unknown as Record<string, unknown>, 'YOUR_USER_ID')
                  .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        alert('Email envoyé avec succès!');
                  })
                  .catch((error) => {
                        console.log('FAILED...', error);
                        alert('L\'envoi de l\'email a échoué.');
                  });

            setFormData({
                  email: '',
                  subject: '',
                  message: '',
            });
      };

      return (
            <section id='contact' className="bg-white dark:bg-gray-900">
                  <div className='opacity-100 transform-none container text-center mx-auto'>
                        <div className="">
                              <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Contact Me</h2>
                        </div>
                  </div>
                  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                              To inquire about job opportunities, please use this contact form.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-8">
                              <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input
                                          type="email"
                                          id="email"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                          placeholder="njonougaby45@gmail.com"
                                          value={formData.email}
                                          onChange={handleChange}
                                          required
                                    />
                              </div>
                              <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input
                                          type="text"
                                          id="subject"
                                          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                          placeholder="Let me know how I can help you"
                                          value={formData.subject}
                                          onChange={handleChange}
                                          required
                                    />
                              </div>
                              <div className="sm:col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea
                                          id="message"
                                          rows={6}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Leave a comment..."
                                          value={formData.message}
                                          onChange={handleChange}
                                          required
                                    ></textarea>
                              </div>
                              <div className="flex justify-center">
                                    <button
                                          type="submit"
                                          className="py-3 px-5 
                                          
                                          text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 "
                                    >
                                          Send message      
                                    </button>
                              </div>
                              
                        </form>
                  </div>
            </section>
      );
};

export default Contact;
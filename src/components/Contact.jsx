import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Get In
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800/50 p-6 shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-neutral-300 font-medium">Address</p>
                  <p className="text-neutral-400">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-neutral-300 font-medium">Phone</p>
                  <p className="text-neutral-400">{CONTACT.phoneNo}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-neutral-300 font-medium">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800/50 p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-purple-500 text-neutral-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-purple-500 text-neutral-300"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-purple-500 text-neutral-300"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <SendIcon className="w-5 h-5" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
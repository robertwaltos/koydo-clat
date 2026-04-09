"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Passage-Based Practice", desc: "English, current affairs, and legal reasoning passages with MCQs." },
  { title: "Legal Reasoning", desc: "Master legal principles and their application to fact patterns." },
  { title: "Mock Tests", desc: "Full-length timed tests simulating the real CLAT UG exam." },
  { title: "Performance Analytics", desc: "Track your scores, accuracy, and progress across sections." },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CLAT UG Prep
      </motion.h1>
      <p className="mt-4 text-lg text-center max-w-xl opacity-70">
        Crack the Common Law Admission Test with passage-based practice,
        mock tests, and detailed analytics — powered by Koydo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 max-w-3xl w-full">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-1 text-sm opacity-60">{f.desc}</p>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-xs text-center opacity-40 max-w-lg">
        CLAT is a registered trademark of the Consortium of NLUs. This application
        is an independent study tool and is not affiliated with, endorsed by, or
        associated with the Consortium of NLUs or any National Law University.
      </footer>
    </main>
  );
}

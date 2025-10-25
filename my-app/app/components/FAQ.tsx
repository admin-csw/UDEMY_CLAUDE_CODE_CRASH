'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900/70 backdrop-blur border border-blue-500/30 rounded-lg overflow-hidden transition-all hover:border-blue-400/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between gap-4"
      >
        <h3 className="text-xl font-semibold text-cyan-300">{question}</h3>
        <svg
          className={`w-6 h-6 text-blue-400 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 text-slate-300 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: 'What are Claude Code hooks?',
      answer: 'Claude Code hooks are custom scripts that execute automatically in response to specific events in your development workflow. They allow you to automate tasks like formatting code, running tests, validating commits, and much more - all seamlessly integrated with Claude Code.'
    },
    {
      question: 'How do I install a hook?',
      answer: 'Installing a hook is simple! Just run the npm install command provided with each hook (e.g., npm install @hookhub/git-auto-commit), then configure it in your Claude Code settings. Most hooks work out of the box with sensible defaults.'
    },
    {
      question: 'Can I create my own hooks?',
      answer: 'Absolutely! Creating custom hooks is encouraged. You can build hooks tailored to your specific workflow needs and share them with the community. Check out our documentation for a step-by-step guide on hook development and publishing.'
    },
    {
      question: 'Are hooks safe to use?',
      answer: 'Yes! All hooks published on HookHub undergo security reviews. We recommend reviewing the source code of any hook before installing it. Hooks run in your local environment, so you maintain full control over what executes.'
    },
    {
      question: 'Do hooks work with all Claude Code versions?',
      answer: 'Most hooks are compatible with recent versions of Claude Code. Each hook specifies its compatibility requirements. We recommend keeping Claude Code updated to ensure the best compatibility with the latest hooks.'
    },
    {
      question: 'How much do hooks cost?',
      answer: 'HookHub is completely free! Most hooks in our community are open source and free to use. Some premium hooks may have licensing fees, which will be clearly indicated on their respective pages.'
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-blue-300 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

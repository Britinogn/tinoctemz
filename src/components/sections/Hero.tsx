import { Download, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeFolderIcon,
  HtmlFile01FreeIcons,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  ShadcnSquareIcon,
  TailwindcssFreeIcons,
} from "@hugeicons/core-free-icons";
import resume from "@/assets/resume.pdf";
import { pageLayout } from "@/constants/layout";

function Hero() {
  const stack = [
    {
      name: "JavaScript",
      icon: <HugeiconsIcon icon={JavaScriptIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "React Js",
      icon: <HugeiconsIcon icon={ReactIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "Django",
      icon: <HugeiconsIcon icon={PythonIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "TypeScript",
      icon: <HugeiconsIcon icon={CodeFolderIcon} size={24} strokeWidth={1.5} />,
    },
    {
      name: "Shadcn",
      icon: (
        <HugeiconsIcon icon={ShadcnSquareIcon} size={24} strokeWidth={1.5} />
      ),
    },
    {
      name: "Express Js",
      icon: (
        <HugeiconsIcon icon={JavaScriptIcon} size={24} strokeWidth={1.5} />
      ),
    },
    {
      name: "Tailwind Css",
      icon: (
        <HugeiconsIcon icon={TailwindcssFreeIcons} size={24} strokeWidth={1.5} />
      ),
    },
    {
      name: "HTML/ CSS",
      icon: (
        <HugeiconsIcon icon={HtmlFile01FreeIcons} size={24} strokeWidth={1.5} />
      ),
    },
  ];

  const stackItems = [...stack, ...stack];

  return (
    <header
      id="home"
      className="relative overflow-hidden bg-(--surface) text-(--text-primary)"
    >
      <div
        className={`${pageLayout.inner} ${pageLayout.columns} min-h-screen items-center px-5 pb-16 pt-28 md:px-8 md:pb-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={`${pageLayout.content} text-center`}
        >
          <div className="mb-8 inline-flex max-w-full items-center gap-3 border border-(--border) bg-(--surface-secondary) px-4 py-2 text-xs uppercase tracking-[0.2em] text-(--text-secondary) sm:tracking-[0.28em]">
            <span className="h-2 w-2 shrink-0 bg-(--primary)" />
            Fullstack website developer
          </div>

          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[0.95] tracking-normal text-(--text-primary) sm:text-7xl lg:text-[7.5rem]">
            I am Bright Onwuemeri
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-(--text-secondary) sm:text-lg">
            Fullstack developer focused on modern, responsive, SEO-friendly
            websites with clean UI and dependable product structure.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:brightonwuemeri@email.com"
              className="inline-flex items-center justify-center gap-2 bg-(--primary) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-dark) transition hover:bg-(--primary-light)"
            >
              Start a project
              <Send size={18} />
            </a>
            <a
              href={resume}
              className="inline-flex items-center justify-center gap-2 border border-(--border) px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-(--text-primary) transition hover:border-(--primary) hover:text-(--primary)"
            >
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-12 grid border border-(--border) text-left text-sm text-(--text-secondary) sm:grid-cols-3">
            <div className="border-b border-(--border) p-5 sm:border-b-0 sm:border-r">
              <p className="text-3xl font-semibold text-(--text-primary)">
                30+
              </p>
              <p className="mt-1">completed projects</p>
            </div>
            <div className="border-b border-(--border) p-5 sm:border-b-0 sm:border-r">
              <p className="text-3xl font-semibold text-(--text-primary)">3</p>
              <p className="mt-1">core services</p>
            </div>
            <div className="p-5">
              <p className="text-3xl font-semibold text-(--text-primary)">
                SEO
              </p>
              <p className="mt-1">friendly builds</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-(--border) bg-(--surface-secondary)">
        <div className={`${pageLayout.inner} ${pageLayout.columns} px-5 py-5 md:px-8`}>
          <div className={`${pageLayout.content} min-w-0`}>
            <div className="mb-4 flex items-center justify-center gap-2 text-sm uppercase tracking-[0.22em] text-(--text-secondary)">
              <Mail size={16} />
              My tech stack
            </div>

            <div className="relative overflow-hidden [--gap:0.75rem]">
              <div className="flex w-max gap-[var(--gap)] animate-tech-carousel">
                {stackItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex min-w-44 items-center justify-center gap-2 border border-(--border) px-4 py-3 text-sm text-(--text-secondary)"
                  >
                    <span className="text-(--primary)">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes tech-carousel {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-50% - (var(--gap) / 2))); }
            }

            .animate-tech-carousel {
              animation: tech-carousel 28s linear infinite;
            }
          `,
        }}
      />
    </header>
  );
}

export default Hero;

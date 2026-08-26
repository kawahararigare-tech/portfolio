const skills = [
  "Java",
  "Git / GitHub",
  "TypeScript",
  "Next.js",
  "AI(学習中)",
];

const qualifications = [
  {
    name: "Java SE 8 Programmer I (Java Silver)",
    status: "取得済み",
    done: true,
  },
  {
    name: "基本情報技術者試験",
    status: "勉強中",
    done: false,
  },
];

const projects: {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}[] = [];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden bg-slate-50 font-sans text-slate-900 dark:bg-[#05060a] dark:text-slate-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-drift absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-600/20" />
        <div className="animate-drift-slow absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/20 blur-3xl dark:bg-fuchsia-600/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-900/5 bg-slate-50/70 backdrop-blur-md dark:border-white/10 dark:bg-[#05060a]/70">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-4 sm:px-16">
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
            Shunta Kawahara
          </span>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-32 px-6 py-24 sm:px-16">
        {/* Hero */}
        <section
          id="about"
          className="flex flex-col items-start gap-6 scroll-mt-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            Portfolio
          </span>

          <h1 className="bg-gradient-to-br from-slate-900 via-indigo-700 to-fuchsia-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-white dark:via-indigo-300 dark:to-fuchsia-300">
            河原駿太
          </h1>

          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
            PMOを目指すエンジニア
          </p>

          <p className="max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
            社会人3年目のエンジニアです。将来的にPMOとしてプロジェクトを支える立場を目指し、
            日々AIやITの知識を学んでいます。Java
            Silverを取得済みで、現在は基本情報技術者試験の合格に向けて勉強中です。
          </p>

          <a
            href="#skills"
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
          >
            スキルを見る
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </section>

        {/* Skills */}
        <section id="skills" className="flex flex-col gap-8 scroll-mt-24">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-indigo-500 uppercase dark:text-indigo-400">
              Skills
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              使用技術・資格
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              使用技術
            </h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-900/10 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-indigo-400/50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
              資格・学習状況
            </h3>
            <ul className="flex flex-col gap-3">
              {qualifications.map((q) => (
                <li
                  key={q.name}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-900/10 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        q.done
                          ? "bg-emerald-500"
                          : "bg-amber-500"
                      }`}
                    />
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {q.name}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      q.done
                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300"
                        : "bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300"
                    }`}
                  >
                    {q.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="flex flex-col gap-8 scroll-mt-24">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-fuchsia-500 uppercase dark:text-fuchsia-400">
              Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              制作実績
            </h2>
          </div>

          {projects.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-900/15 bg-white/40 px-6 py-16 text-center backdrop-blur-sm dark:border-white/15 dark:bg-white/[.02]">
              <span className="text-3xl">🚧</span>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                現在準備中です。今後作品が完成次第、追加していきます。
              </p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-slate-900/[.06] px-2.5 py-0.5 text-xs text-slate-600 dark:bg-white/[.08] dark:text-slate-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm font-medium text-indigo-600 underline underline-offset-4 dark:text-indigo-300"
                    >
                      詳しく見る
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-900/5 py-8 text-center text-xs text-slate-400 dark:border-white/10 dark:text-slate-500">
        © {new Date().getFullYear()} Shunta Kawahara
      </footer>
    </div>
  );
}

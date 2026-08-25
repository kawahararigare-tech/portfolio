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
  },
  {
    name: "基本情報技術者試験",
    status: "勉強中",
  },
];

const projects: {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}[] = [];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-24 sm:px-16">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            河原駿太
          </h1>
          <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
            PMOを目指すエンジニア
          </p>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            社会人3年目のエンジニアです。将来的にPMOとしてプロジェクトを支える立場を目指し、
            日々AIやITの知識を学んでいます。Java
            Silverを取得済みで、現在は基本情報技術者試験の合格に向けて勉強中です。
          </p>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Skills
          </h2>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              使用技術
            </h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              資格・学習状況
            </h3>
            <ul className="flex flex-col gap-2">
              {qualifications.map((q) => (
                <li
                  key={q.name}
                  className="flex items-center justify-between rounded-lg border border-black/[.08] px-4 py-3 text-sm dark:border-white/[.145]"
                >
                  <span className="text-zinc-800 dark:text-zinc-200">
                    {q.name}
                  </span>
                  <span className="rounded-full bg-black/[.06] px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400">
                    {q.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Projects
          </h2>

          {projects.length === 0 ? (
            <p className="rounded-lg border border-dashed border-black/[.12] px-4 py-8 text-center text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
              現在準備中です。今後作品が完成次第、追加していきます。
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <li
                  key={project.title}
                  className="flex flex-col gap-2 rounded-lg border border-black/[.08] p-5 dark:border-white/[.145]"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-black/[.06] px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-white/[.08] dark:text-zinc-400"
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
                      className="mt-2 text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
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
    </div>
  );
}

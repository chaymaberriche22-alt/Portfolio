import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

const name = 'Chayma Berriche'
const role = 'Software Engineering Student'
const location = 'Monastir'
const email = 'chaymaberriche22@gmail.com'
const phone = '+216 53 040 942'
const github = 'https://github.com/chaymaberriche22-alt'
const linkedin = 'https://www.linkedin.com/in/chayma-berriche-4184a5249/'
const cvUrl = '/Chayma_Berriche_CV.pdf'

app.innerHTML = `
  <div class="min-h-dvh bg-slate-950 text-slate-100">
    <div class="pointer-events-none fixed inset-0 bg-grid opacity-20"></div>

    <header class="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" class="font-semibold tracking-tight">${name}</a>
        <div class="flex items-center gap-4">
          <nav class="hidden gap-5 text-sm text-slate-200 md:flex">
            <a class="hover:text-white" href="#about">About</a>
            <a class="hover:text-white" href="#projects">Projects</a>
            <a class="hover:text-white" href="#experience">Experience</a>
            <a class="hover:text-white" href="#education">Education</a>
            <a class="hover:text-white" href="#skills">Skills</a>
            <a class="hover:text-white" href="#contact">Contact</a>
          </nav>
          <div class="hidden items-center gap-2 md:flex">
            ${pillLink('GitHub', github)}
            ${pillLink('LinkedIn', linkedin)}
            ${pillDownload('CV', cvUrl)}
          </div>
        </div>
      </div>
    </header>

    <main id="top" class="mx-auto max-w-5xl px-4 pb-16 pt-10">
      <section class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl">
            <p class="text-sm text-slate-300">${role}</p>
            <h1 class="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">${name}</h1>
            <p class="mt-4 text-slate-200">
              4th-year software engineering student, highly motivated to learn and grow in a professional environment.
              Organized, adaptable, and autonomous, with strong teamwork and independent work skills. Seeking a summer internship to develop my skills and contribute to real projects.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              ${primaryLink('View GitHub', github)}
              ${primaryLink('Connect on LinkedIn', linkedin)}
              ${primaryDownload('Download CV', cvUrl)}
              ${secondaryLink('Email me', `mailto:${email}`)}
            </div>
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">Angular</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">.NET</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">React Native</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">Kotlin</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">Firebase</span>
            </div>
          </div>

          <div class="flex flex-col gap-2 text-sm text-slate-200">
            <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="text-xs text-slate-400">Location</div>
              <div class="font-medium">${location}</div>
            </div>
            <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="text-xs text-slate-400">Email</div>
              <a class="font-medium hover:underline" href="mailto:${email}">${email}</a>
            </div>
            <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div class="text-xs text-slate-400">Phone</div>
              <a class="font-medium hover:underline" href="tel:${phone.replaceAll(' ', '')}">${phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="mt-12 scroll-mt-24">
        <h2 class="text-xl font-semibold tracking-tight">About</h2>
        <p class="mt-3 text-slate-200">
          I build web and mobile applications with a focus on clean architecture, modular code organization, and practical user experiences.
          I’m comfortable across the stack (REST APIs, databases, Angular/React, mobile with React Native and Android/Kotlin).
        </p>
      </section>

      <section id="projects" class="mt-12 scroll-mt-24">
        <div class="flex items-end justify-between gap-4">
          <h2 class="text-xl font-semibold tracking-tight">Projects</h2>
        </div>
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${projectCard({
            title: 'Leave Management Web App',
            stack: 'Angular • .NET • REST API',
            body:
              'Designed and built a web application for complete leave-request management (create, track, validate, and filter by status). Strengthened my skills in client–server architecture, REST APIs, state management, and modular organization.',
            links: [
              { label: 'Repo', href: 'https://github.com/chaymaberriche22-alt/Gestion-de-cong-e' },
            ],
          })}
          ${projectCard({
            title: 'MedTrack (Mobile App)',
            stack: 'Kotlin • Firebase • Notifications',
            body:
              'Android app to track medication schedules with automatic reminders. Built an intuitive UI, managed cloud data with Firebase, and implemented notifications to improve user organization.',
            links: [{ label: 'Repo', href: 'https://github.com/chaymaberriche22-alt/Mobile_App' }],
          })}
          ${projectCard({
            title: 'Leave Management Mobile App',
            stack: 'React Native • TypeScript',
            body:
              'Mobile app experience around leave management, focusing on smooth navigation, clean UI, and integration with back-end services.',
            links: [
              { label: 'Repo', href: 'https://github.com/chaymaberriche22-alt/App_Mobile_gestion_de_cong-' },
            ],
          })}
        </div>
      </section>

      <section id="experience" class="mt-12 scroll-mt-24">
        <h2 class="text-xl font-semibold tracking-tight">Professional Experience</h2>
        <div class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <div class="text-sm text-slate-300">Summer Internship</div>
              <div class="mt-1 text-lg font-semibold">InformaTech</div>
              <div class="mt-1 text-sm text-slate-300">Monastir, Teboulba</div>
            </div>
            <div class="text-sm text-slate-300">01/07/2025 – 31/07/2025</div>
          </div>
          <ul class="mt-4 list-disc space-y-2 pl-5 text-slate-200">
            <li>Developed a mobile leave-management application using React Native.</li>
            <li>Designed UI/UX flows and screens in Figma and implemented the front-end.</li>
            <li>Integrated the front-end with the back-end services.</li>
          </ul>
        </div>
      </section>

      <section id="education" class="mt-12 scroll-mt-24">
        <h2 class="text-xl font-semibold tracking-tight">Education</h2>
        <div class="mt-4 grid gap-4">
          ${timelineItem({
            title: 'Software Engineer',
            org: 'EPI Digital School',
            place: 'Sousse',
            date: '09/2024 – Present',
          })}
          ${timelineItem({
            title: 'Preparatory Cycle in ICT (Technologies of Information and Communication)',
            org: 'EPI',
            place: 'Sousse',
            date: '09/2022 – 06/2024',
          })}
        </div>
      </section>

      <section id="skills" class="mt-12 scroll-mt-24">
        <h2 class="text-xl font-semibold tracking-tight">Skills</h2>
        <div class="mt-4 grid gap-4 md:grid-cols-2">
          ${skillGroup('Programming languages', [
            'Kotlin',
            'Java',
            'C#',
            'TypeScript',
            'JavaScript',
          ])}
          ${skillGroup('Back-end', ['.NET', 'Node.js', 'Spring Boot', 'REST APIs'])}
          ${skillGroup('Web front-end', ['Angular', 'React', 'HTML', 'CSS'])}
          ${skillGroup('Databases / Cloud', [
            'Firebase',
            'MySQL',
            'SQL Server',
            'MongoDB Atlas',
          ])}
          ${skillGroup('Mobile', ['React Native', 'Android (Kotlin)', 'iOS (Swift)'])}
          ${skillGroup('Tools & methods', ['GitHub', 'Postman'])}
          ${skillGroup('Data & AI', ['Machine Learning (Python)', 'Deep Learning (Python)'])}
          ${skillGroup('Languages', ['French', 'Arabic', 'English'])}
        </div>
      </section>

      <section id="contact" class="mt-12 scroll-mt-24">
        <h2 class="text-xl font-semibold tracking-tight">Contact</h2>
        <div class="mt-4 grid gap-4 md:grid-cols-3">
          ${contactCard('Email', `<a class="hover:underline" href="mailto:${email}">${email}</a>`)}
          ${contactCard('Phone', `<a class="hover:underline" href="tel:${phone.replaceAll(' ', '')}">${phone}</a>`)}
          ${contactCard('Location', location)}
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          ${pillLink('GitHub', github)}
          ${pillLink('LinkedIn', linkedin)}
          ${pillDownload('CV (PDF)', cvUrl)}
        </div>
      </section>

      <footer class="mt-14 border-t border-white/10 pt-6 text-sm text-slate-400">
        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© ${new Date().getFullYear()} ${name}</div>
          <a class="hover:text-slate-200" href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  </div>
`

function esc(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function safeUrl(u: string) {
  try {
    const url = new URL(u)
    return url.toString()
  } catch {
    return '#'
  }
}

function projectCard(input: {
  title: string
  stack: string
  body: string
  links?: Array<{ label: string; href: string }>
}) {
  return `
    <article class="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 class="text-lg font-semibold tracking-tight">${esc(input.title)}</h3>
      <p class="mt-1 text-sm text-slate-300">${esc(input.stack)}</p>
      <p class="mt-3 text-slate-200">${esc(input.body)}</p>
      ${
        input.links && input.links.length
          ? `<div class="mt-4 flex flex-wrap gap-2">
              ${input.links
                .map(
                  (l) =>
                    `<a class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10" href="${safeUrl(
                      l.href,
                    )}" target="_blank" rel="noreferrer">${esc(l.label)}</a>`,
                )
                .join('')}
            </div>`
          : ''
      }
    </article>
  `
}

function timelineItem(input: { title: string; org: string; place: string; date: string }) {
  return `
    <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <div class="text-lg font-semibold tracking-tight">${esc(input.title)}</div>
          <div class="mt-1 text-sm text-slate-200">${esc(input.org)} • ${esc(input.place)}</div>
        </div>
        <div class="text-sm text-slate-300">${esc(input.date)}</div>
      </div>
    </div>
  `
}

function skillGroup(title: string, items: string[]) {
  return `
    <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div class="text-sm font-semibold text-slate-100">${esc(title)}</div>
      <div class="mt-3 flex flex-wrap gap-2">
        ${items
          .map(
            (x) =>
              `<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">${esc(x)}</span>`,
          )
          .join('')}
      </div>
    </div>
  `
}

function contactCard(title: string, valueHtml: string) {
  return `
    <div class="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div class="text-xs text-slate-400">${esc(title)}</div>
      <div class="mt-1 text-sm text-slate-200">${valueHtml}</div>
    </div>
  `
}

function pillLink(label: string, href: string) {
  return `<a class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10" href="${safeUrl(
    href,
  )}" target="_blank" rel="noreferrer">${esc(label)}</a>`
}

function pillDownload(label: string, href: string) {
  return `<a class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 hover:bg-white/10" href="${esc(
    href,
  )}" target="_blank" rel="noreferrer" download>${esc(label)}</a>`
}

function primaryLink(label: string, href: string) {
  return `<a class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100" href="${safeUrl(
    href,
  )}" target="_blank" rel="noreferrer">${esc(label)}</a>`
}

function primaryDownload(label: string, href: string) {
  return `<a class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100" href="${esc(
    href,
  )}" target="_blank" rel="noreferrer" download>${esc(label)}</a>`
}

function secondaryLink(label: string, href: string) {
  const safe = href.startsWith('mailto:') ? href : safeUrl(href)
  return `<a class="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10" href="${safe}">${esc(
    label,
  )}</a>`
}

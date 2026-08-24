<script setup>
import { reactive } from 'vue'

const failedScreens = reactive({})

const gafferScreens = [
  {
    src: '/gaffer/club-overview.png',
    alt: 'Gaffer club overview gameplay screen',
    number: '01',
    label: 'Club overview',
  },
  {
    src: '/gaffer/matchday.png',
    alt: 'Gaffer matchday gameplay screen',
    number: '02',
    label: 'Matchday',
  },
  {
    src: '/gaffer/squad.png',
    alt: 'Gaffer squad management gameplay screen',
    number: '03',
    label: 'Squad management',
  },
]

const discordUrl = 'https://discord.com/invite/kf9Uf6xtz'

const automationCapabilities = [
  {
    title: 'Performance Observability',
    technology: 'Grafana · Prometheus · k6',
    context: 'Black Cow Technology',
    summary: 'Large-scale performance testing made visible through realistic playbots, metrics and distributed traces.',
    achievements: [
      'Built JavaScript k6 playbots to create multiplayer load against a Python game server.',
      'Connected performance runs to Grafana dashboards using Prometheus metrics.',
      'Used Tempo traces and OpenTelemetry spans to follow behaviour across the system under pressure.',
    ],
    tags: ['Grafana', 'Prometheus', 'k6', 'Tempo', 'OpenTelemetry'],
  },
  {
    title: 'MultiplayerContext Architecture',
    technology: 'Python · pytest',
    context: 'Black Cow Technology',
    summary: 'A reusable testing architecture developed for a generic Python multiplayer game server.',
    achievements: [
      'Designed and developed the MultiplayerContext architecture, then built a pytest functional suite around it.',
      'Validated server behaviour across multiple game engines while keeping domain logic separate and testable.',
    ],
    tags: ['Python', 'pytest', 'Functional testing'],
  },
  {
    title: 'Web Automation',
    technology: 'Cypress · Selenium · CI/CD',
    context: 'Focusrite',
    summary: 'Automated coverage for customer-facing websites, connected music software and delivery pipelines.',
    achievements: [
      'Delivered Cypress end-to-end coverage across ecommerce sites for Focusrite partner brands.',
      'Automated Novation Components workflows involving USB MIDI interfaces.',
      'Built Selenium WebDriver coverage and introduced CircleCI pipelines for projects previously deployed manually.',
    ],
    tags: ['Cypress', 'Selenium', 'CircleCI', 'Drupal'],
  },
  {
    title: 'Test Writing & QA',
    technology: 'Functional · smoke · exploratory',
    context: 'Black Cow · Focusrite',
    summary: 'Purposeful test design backed by hands-on investigation, product knowledge and clear bug reporting.',
    achievements: [
      'Created and maintained functional and smoke suites for a family of multiplayer game engines.',
      'Used manual testing to investigate customer-reported issues in professional audio software and turn them into actionable reports.',
      'Combined automated checks with technical troubleshooting where hardware, operating systems or user environments required human judgement.',
    ],
    tags: ['Functional', 'Smoke', 'Manual QA', 'Bug reporting'],
  },
]

const projects = [
  {
    index: '01',
    name: 'Caffeine Plus',
    description: 'An open-source native interface for Caffeine, built for macOS in Swift.',
    note: 'A focused SwiftUI project that brings a clear, approachable interface to a small desktop utility.',
    tags: ['Swift', 'SwiftUI', 'macOS'],
    href: 'https://github.com/sternard/Caffeine-Plus',
  },
  {
    index: '02',
    name: 'ESA Robot Challenge',
    description:
      'A typed command-line solution for navigating robots around a wrapping asteroid grid from JSON instructions.',
    note: 'Test-driven domain design with pytest and black-box PHPUnit coverage of the Python CLI.',
    tags: ['Python', 'pytest', 'mypy'],
    href: 'https://github.com/sternard/ESA-Robot-Coding-Challenge',
  },
  {
    index: '03',
    name: 'Portfolio',
    description: 'Built as a home for product work, public code, writing and media.',
    note: 'A responsive GitHub Pages build with routed experiments and browser-level coverage for its key portfolio journeys.',
    tags: ['Vue', 'Cypress'],
    href: 'https://github.com/sternard/sternard.github.io',
  },
]

const utilityProjects = [
  {
    name: 'Storage Assistant',
    description: 'Recommendation-first macOS storage cleanup.',
    href: 'https://github.com/sternard/Storage-Assistant',
  },
  {
    name: 'Doc Combiner',
    description: 'Combine multiple Word documents on macOS.',
    href: 'https://github.com/sternard/Doc-Combiner',
  },
  {
    name: 'Screen Swap',
    description: 'Move app windows between connected displays.',
    href: 'https://github.com/sternard/Screen-Swap',
  },
]
</script>

<template>
  <main id="main-content">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero__intro">
        <p class="eyebrow"><span></span> Software developer &amp; automation engineer</p>
        <h1 id="hero-title">Useful software.<br><em>Thoughtfully made.</em></h1>
        <p class="hero__lede">
          I’m Stephen, a UK-based developer, building games, tools, automated testing systems and
          carefully crafted digital ideas.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#gaffer">Explore selected work <span>↓</span></a>
          <a class="text-link" href="https://github.com/sternard" target="_blank" rel="noreferrer">
            GitHub profile <span>↗</span>
          </a>
        </div>
      </div>

      <aside class="hero__card" aria-label="Currently testing Gaffer">
        <div class="hero__card-topline">
          <span>Currently testing</span>
          <span class="status-dot">Pre-release beta</span>
        </div>
        <div class="hero__pitch" aria-hidden="true">
          <span class="pitch-line pitch-line--one"></span>
          <span class="pitch-line pitch-line--two"></span>
          <span class="pitch-circle"></span>
          <strong>GAFFER</strong>
        </div>
        <div class="hero__card-footer">
          <p>Football management,<br>from the touchline.</p>
          <a href="#gaffer" aria-label="Read about Gaffer">View project <span>↘</span></a>
        </div>
      </aside>

      <div class="hero__index" aria-label="Portfolio sections">
        <a href="#gaffer"><span>01</span> Gaffer</a>
        <a href="#automation"><span>02</span> Automation</a>
        <a href="#code"><span>03</span> Code</a>
        <a href="#writing"><span>04</span> Writing</a>
      </div>
    </section>

    <section id="gaffer" class="gaffer-section">
      <div class="shell">
        <header class="section-heading section-heading--light">
          <p class="section-kicker">01 / Featured game</p>
          <div>
            <h2>Gaffer</h2>
            <p>A football manager simulator game built for Android and iOS.</p>
          </div>
        </header>

        <div class="gaffer-layout">
          <div class="gaffer-copy">
            <p class="gaffer-copy__lead">
              Make the calls that shape a club—from the squad sheet to the final whistle.
            </p>
            <p>
              Gaffer is currently in pre-release beta. I developed the backend systems for the game, as well as composing all the music, implementing the development for Andoird and iOS, and designing the UI.
            </p>
            <dl class="project-facts">
              <div><dt>Platform</dt><dd>Android, iOS</dd></div>
              <div><dt>Format</dt><dd>Football simulation</dd></div>
              <div><dt>Status</dt><dd><span></span> Pre-release</dd></div>
            </dl>

            <a
              v-if="discordUrl"
              class="button button--lime"
              :href="discordUrl"
              target="_blank"
              rel="noreferrer"
            >
              Join the Discord <span>↗</span>
            </a>
            <span v-else class="button button--muted" aria-label="Gaffer Discord link coming soon">
              Discord opens soon <span>↗</span>
            </span>
          </div>

          <div class="phone-gallery" aria-label="Gaffer iOS gameplay screenshots">
            <figure v-for="screen in gafferScreens" :key="screen.src" class="phone-figure">
              <div class="phone-frame">
                <div class="phone-island" aria-hidden="true"></div>
                <div class="screen-fallback">
                  <span>Gameplay capture</span>
                  <strong>{{ screen.label }}</strong>
                  <small>Add {{ screen.src }}</small>
                </div>
                <img
                  v-if="!failedScreens[screen.src]"
                  :src="screen.src"
                  :alt="screen.alt"
                  @error="failedScreens[screen.src] = true"
                >
              </div>
              <figcaption><span>{{ screen.number }}</span>{{ screen.label }}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="automation" class="automation-section" aria-labelledby="automation-title">
      <div class="shell">
        <header class="automation-heading">
          <p class="section-kicker">02 / Automation</p>
          <div class="automation-heading__copy">
            <h2 id="automation-title">Systems that prove<br><em>software works.</em></h2>
            <p>
              Faster feedback, safer releases and clearer evidence when complex systems are under pressure - these are some of my professional contributions to testing in production enviroments.
            </p>
          </div>
        </header>

        <div class="automation-layout">
          <aside class="automation-console" aria-label="Automation capabilities">
            <div class="automation-console__topline">
              <span>Automation profile</span>
              <span>Online</span>
            </div>
            <p class="automation-console__label">What I automate</p>
            <ul class="automation-console__signals">
              <li><span>01</span> Functional test coverage</li>
              <li><span>02</span> Performance &amp; load testing</li>
              <li><span>03</span> CI/CD workflows</li>
              <li><span>04</span> Cross-platform checks</li>
            </ul>
            <div class="automation-console__readout" aria-hidden="true">
              <span v-for="bar in 24" :key="bar" :style="{ '--signal': `${(bar * 23) % 70 + 18}%` }"></span>
            </div>
            <p class="automation-console__footnote">
              Game servers · ecommerce · web platforms · professional audio
            </p>
          </aside>

          <ol class="experience-list experience-list--capabilities" aria-label="Automation capabilities">
            <li
              v-for="capability in automationCapabilities"
              :key="capability.title"
              class="experience-card"
            >
              <div class="experience-card__meta">
                <span>{{ capability.context }}</span>
              </div>
              <div class="experience-card__title">
                <h3>{{ capability.title }}</h3>
                <p>{{ capability.technology }}</p>
              </div>
              <p class="experience-card__summary">{{ capability.summary }}</p>
              <ul class="experience-card__achievements">
                <li v-for="achievement in capability.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
              <ul class="experience-card__tags" :aria-label="`${capability.title} technologies`">
                <li v-for="tag in capability.tags" :key="tag">{{ tag }}</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section id="code" class="code-section shell" aria-labelledby="code-title">
      <header class="section-heading">
        <p class="section-kicker">03 / Code Review</p>
        <div>
          <h2 id="code-title">Code review and<br><em>public repositories</em></h2>
          <p>
            Selected public repositories for a deeper review of my approach to test-driven development.
          </p>
        </div>
      </header>

      <div class="project-list">
        <a
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          :href="project.href"
          target="_blank"
          rel="noreferrer"
        >
          <span class="project-card__index">{{ project.index }}</span>
          <div class="project-card__body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <small>{{ project.note }}</small>
            <ul aria-label="Technologies">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
          <span class="project-card__arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="utility-shelf">
        <div class="utility-shelf__intro">
          <p class="section-kicker">Smaller utilities</p>
          <h3>Open source<br>contributions</h3>
        </div>
        <a
          v-for="utility in utilityProjects"
          :key="utility.name"
          :href="utility.href"
          target="_blank"
          rel="noreferrer"
        >
          <span class="utility-icon" aria-hidden="true">⌘</span>
          <strong>{{ utility.name }}</strong>
          <p>{{ utility.description }}</p>
          <span class="utility-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <a class="profile-link" href="https://github.com/sternard?tab=repositories" target="_blank" rel="noreferrer">
        Browse every public repository <span>↗</span>
      </a>
    </section>

    <section id="writing" class="writing-section">
      <div class="shell writing-layout">
        <header class="section-heading section-heading--stacked">
          <p class="section-kicker">04 / Academic work</p>
          <div>
            <h2>Essays, arguments<br>&amp; <em>open questions.</em></h2>
            <p>
              A home for selected postgraduate writing—published for comfortable reading on the
              web, with the original papers available alongside it.
            </p>
          </div>
        </header>

        <article class="paper-placeholder">
          <div class="paper-placeholder__number">P—01</div>
          <div class="paper-placeholder__copy">
            <p class="section-kicker">Postgraduate archive</p>
            <h3>The first paper is being prepared for publication.</h3>
            <p>
              Each entry will include an abstract, full essay, citation details and a downloadable
              PDF—designed as a proper reading experience rather than a list of attachments.
            </p>
          </div>
          <div class="paper-placeholder__marks" aria-hidden="true">
            <span>Abstract</span><span>Full text</span><span>PDF</span>
          </div>
        </article>
      </div>
    </section>

    <footer id="contact" class="site-footer">
      <div class="shell site-footer__top">
        <p class="section-kicker">Have something interesting in mind?</p>
        <a href="mailto:stephenbernard@hotmail.co.uk">Let’s make it real. <span>↗</span></a>
      </div>
      <div class="shell site-footer__bottom">
        <p>Stephen Bernard<br><span>Software developer &amp; automation engineer</span></p>
        <div>
          <a href="https://github.com/sternard" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:stephenbernard@hotmail.co.uk">Email ↗</a>
          <a href="https://discord.com/invite/kf9Uf6xtz" target="_blank" rel="noreferrer">Discord ↗</a>
          <a href="#">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  </main>
</template>

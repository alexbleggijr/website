import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  baseUrl: '/',
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'alexbleggijr',
  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/variables.css'),

            require.resolve('./src/css/base/base.css'),
            require.resolve('./src/css/base/utilities.css'),

            require.resolve('./src/css/custom/footer.css'),
            require.resolve('./src/css/custom/hero.css'),
            require.resolve('./src/css/custom/highlight.css'),
            require.resolve('./src/css/custom/markdown.css'),
            require.resolve('./src/css/custom/navbar-sidebar.css'),
            require.resolve('./src/css/custom/navbar.css'),

            require.resolve('./src/css/components/built-with-text.css'),
            require.resolve('./src/css/components/built-with.css'),
            require.resolve('./src/css/components/button.css'),
            require.resolve('./src/css/components/feature-text.css'),
            require.resolve('./src/css/components/markdown-code.css'),
            require.resolve('./src/css/components/navbar-icon.css'),

            require.resolve('./src/css/pages/certificates.css'),
            require.resolve('./src/css/pages/courses.css'),
            require.resolve('./src/css/pages/home.css'),
            require.resolve('./src/css/pages/knowledge.css'),
            require.resolve('./src/css/pages/knowledge-inner.css'),
            require.resolve('./src/css/pages/projects.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  tagline: '',
  projectName: 'website',
  themeConfig: {
    announcementBar: {
      content:
        '<p style="margin: 0;">🚧🚧🚧 Under Eternal Construction... 🚧🚧🚧</p>',
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    footer: {
      copyright: `Built with ❤️ and ☕ by <strong><a class="footer__copyright-link" href="https://www.linkedin.com/in/alex-bleggi-377907201/" target="_blank">Alex Bleggi</a></strong>.`,
      links: [
        {
          title: 'Knowledge',
          items: [],
        },
        {
          title: 'Projects',
          items: [],
        },
        {
          title: 'Courses',
          items: [
            {
              label: 'React Native',
              to: 'docs/rocketseat/training/react-native',
            },
            {
              label: 'Angular Core',
              to: 'docs/udemy/angular-university/angular-core',
            },
          ],
        },
        {
          title: 'Notes',
          items: [],
        },
        {
          title: 'Links',
          items: [],
        },
      ],
      style: 'dark',
    },
    image: 'img/favicon.png',
    navbar: {
      hideOnScroll: true,
      items: [
        {
          to: '/knowledge',
          label: 'Knowledge',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/courses',
          label: 'Courses',
          position: 'left',
        },
        {
          to: '/certificates',
          label: 'Certificates',
          position: 'left',
        },
        {
          to: 'docs/notes',
          label: 'Notes',
          position: 'left',
        },
        {
          href: 'https://github.com/alexbleggijr',
          position: 'right',
          className: 'navbar-icon navbar-icon_github',
        },
        {
          href: 'https://www.linkedin.com/in/alex-bleggi-377907201',
          position: 'right',
          className: 'navbar-icon navbar-icon_linkedin',
        },
        {
          href: 'https://www.behance.net/alexbleggi',
          position: 'right',
          className: 'navbar-icon navbar-icon_behance',
        },
        {
          href: 'https://soundcloud.com/alex-bleggi',
          position: 'right',
          className: 'navbar-icon navbar-icon_soundcloud',
        },
        {
          href: 'https://www.udemy.com/user/alex-bleggi-22/',
          position: 'right',
          className: 'navbar-icon navbar-icon_udemy',
        },
        {
          href: 'https://www.npmjs.com/~alexbleggijr',
          position: 'right',
          className: 'navbar-icon navbar-icon_npm',
        },
      ],
      logo: {
        alt: 'Alex Bleggi',
        src: 'img/profile.png',
      },
      title: 'Alex Bleggi',
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
  } satisfies Preset.ThemeConfig,
  title: 'Alex Bleggi',
  titleDelimiter: '·',
  url: 'https://alexbleggi.netlify.app/',
};

export default config;

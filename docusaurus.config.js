// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pyrsia',
  tagline: 'Zero-Trust Decentralized Package Network',
  url: 'https://pyrsia.io',
  baseUrl: '/pyrsia-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'prince-chrismc', // Usually your GitHub org/user name.
  projectName: 'pyrsia-website', // Usually your repo name.
  trailingSlash: true, // Best for GitHub Pages

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/prince-chrismc/pyrsia-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/prince-chrismc/pyrsia-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Pyrsia',
          src: 'img/logo-color.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'technology/overview',
            position: 'left',
            label: 'Technology',
          },
          {
            type: 'doc',
            docId: 'docusaurus/intro',
            position: 'left',
            label: 'Developer',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/social',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/pyrsia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/docusaurus/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Google',
                href: 'https://groups.google.com/g/pyrsia',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PyrsiaOSS',
              },
              {
                label: 'OpenSSF Slack',
                href: 'https://openssf.slack.com/archives/C0302CVKPA5',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'The Team',
                to: '/',
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pyrsia/pyrsia',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pyrsia',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JFrog LTD. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'aqua',
  tagline: 'Manage CLI tool versions with YAML. Install tools easily and quickly',
  url: 'https://aquaproj.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg',
  organizationName: 'aquaproj', // Usually your GitHub org/user name.
  projectName: 'aqua', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aquaproj/aquaproj.github.io/edit/main',
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
        title: 'aqua',
        logo: {
          alt: 'aqua Logo',
          src: 'https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial-basics/quick-start',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'reference/install',
            position: 'left',
            label: 'Install',
          },
          {
            href: 'https://github.com/aquaproj/aqua-registry',
            label: 'Standard Registry',
            position: 'right',
          },
          {
            href: 'https://github.com/aquaproj/aqua',
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
                to: '/docs/tutorial-basics/quick-start',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aquaproj/aqua',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notions C#',
  tagline: 'Site de référence du cours de Programmation 1',
  url: 'https://info.cegepmontpetit.ca/',
  baseUrl: '/notions-csharp/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'departement-info-cem',
  projectName: 'notions-csharp',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/departement-info-cem/notions-csharp/tree/main',
          sidebarCollapsed: false,
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
        title: 'Notions C#',
        logo: {
          alt: 'Logo CEM',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/accueil',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'bienDebuter',
            label: 'Bien débuter',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
              {
                label: 'Bien débuter',
                to: '/bien-debuter'
              },
            ],
          },
          {
            title: 'Sources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/departement-info-cem/notions-csharp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notions C#. CÉGEP Édouard-Montpetit.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
      algolia: {
        appId: 'GN4NP7F2WV',
        apiKey: 'a5eea557b24fde9c79c8194d5a1e1337',
        indexName: 'cegepmontpetit',
        contextualSearch: true,
        searchPagePath: 'search',
      },
      metadata: [
        {name: "keywords", content : 'notions, c#, programmation 1, informatique, technique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit'},
        {name: 'google-site-verification', content: 'xIpGUaAZjgCmhhw_CDxxJ0uqHWnYXg7w58njMQQU0c0'}
      ],
    }),
};

module.exports = config;

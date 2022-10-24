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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'departement-info-cem', // Usually your GitHub org/user name.
  projectName: 'notions-csharp', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        // L'ID de l'application fourni par Algolia
        appId: 'GN4NP7F2WV',
        // Clé d'API publique : il est possible de la committer en toute sécurité
        apiKey: 'a5eea557b24fde9c79c8194d5a1e1337',

        indexName: 'cegepmontpetit',

        // Facultatif : voir la section doc ci-dessous
        contextualSearch: true,

        // Facultatif : chemin pour la page de recherche qui est activée par défaut (`false` pour le désactiver)
        searchPagePath: 'search',
      },
      metadata: [
        {name: "keywords", content : 'notions, c#, programmation 1, informatique, technique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit'},
        {name: 'google-site-verification', content: 'xIpGUaAZjgCmhhw_CDxxJ0uqHWnYXg7w58njMQQU0c0'}
      ],
    }),
};

module.exports = config;

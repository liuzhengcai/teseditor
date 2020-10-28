module.exports = {
  title: 'TES 开发平台',
  tagline: '快捷的创作交互动画',
  url: 'https://assistant.es-online.com.cn/lzctest/teseditor/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TES 开发平台',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {to: 'blog', label: '项目组', position: 'left'},
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'TES介绍',
              to: 'docs/',
            },
            {
              label: '如何开始',
              to: 'docs/helloword/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '东方仿真',
              href: 'http://www.besct.com',
            },
            {
              label: '易思在线',
              href: 'http://www.es-online.com.cn/default/index.html',
            },
            {
              label: 'TES开发平台',
              href: 'https://assistant.es-online.com.cn/lzctest/teseditor/index.html',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 教学研发团队, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5fe0bb4c32e612a55ee76a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dg4ccipj',
                  apiId: '2fd64c75-b25c-4815-8a79-bf16c881568e'
                },
                {
                  buildHookId: '5e5fe0bb4c32e652835edf80',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g9pbqdwn',
                  apiId: '4720adfc-7fc1-4a54-9827-f6e85d82748b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gkemp94/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g9pbqdwn.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

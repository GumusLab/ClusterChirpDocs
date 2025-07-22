import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ClusterChirpDocs/markdown-page',
    component: ComponentCreator('/ClusterChirpDocs/markdown-page', '41e'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/',
    component: ComponentCreator('/ClusterChirpDocs/', '808'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/',
    component: ComponentCreator('/ClusterChirpDocs/', '68c'),
    routes: [
      {
        path: '/ClusterChirpDocs/',
        component: ComponentCreator('/ClusterChirpDocs/', '6a9'),
        routes: [
          {
            path: '/ClusterChirpDocs/',
            component: ComponentCreator('/ClusterChirpDocs/', '7b4'),
            routes: [
              {
                path: '/ClusterChirpDocs/basic-functions',
                component: ComponentCreator('/ClusterChirpDocs/basic-functions', '01c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ClusterChirpDocs/FAQ',
                component: ComponentCreator('/ClusterChirpDocs/FAQ', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ClusterChirpDocs/intro',
                component: ComponentCreator('/ClusterChirpDocs/intro', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ClusterChirpDocs/tutorials/analyze-pathways',
                component: ComponentCreator('/ClusterChirpDocs/tutorials/analyze-pathways', '91c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ClusterChirpDocs/tutorials/chat-with-ai',
                component: ComponentCreator('/ClusterChirpDocs/tutorials/chat-with-ai', '214'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ClusterChirpDocs/tutorials/view-gene-network',
                component: ComponentCreator('/ClusterChirpDocs/tutorials/view-gene-network', 'bbb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

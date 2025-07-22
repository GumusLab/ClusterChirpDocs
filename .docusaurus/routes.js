import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ClusterChirpDocs/__docusaurus/debug',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug', '535'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/config',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/config', '566'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/content',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/content', '375'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/globalData',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/globalData', '2d6'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/metadata',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/metadata', '844'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/registry',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/registry', 'a58'),
    exact: true
  },
  {
    path: '/ClusterChirpDocs/__docusaurus/debug/routes',
    component: ComponentCreator('/ClusterChirpDocs/__docusaurus/debug/routes', '911'),
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

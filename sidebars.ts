import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  notes: [
    'notes/introduction',
    'notes/bem-methodology/bem-methodology',
    {
      type: 'category',
      label: 'Angular',
      items: [
        {
          type: 'category',
          label: 'Components',
          items: [
            'notes/angular/components/anatomy',
            'notes/angular/components/usage',
            'notes/angular/components/selectors'
          ]
        },
        'notes/angular/template-syntax',
        'notes/angular/directives',
      ],
    },
  ],
  courses: [
    {
      type: 'category',
      label: 'Rocketseat',
      items: [
        {
          Training: [
            {
              'React': [
                'courses/rocketseat/training/react/react',
                {
                  Fundamentals: [
                    'courses/rocketseat/training/react/fundamentals/fundamentals',
                    'courses/rocketseat/training/react/fundamentals/module/getting-started-with-react/getting-started-with-react',
                  ],
                },
              ],
            },
            {
              'React Native': [
                'courses/rocketseat/training/react-native/react-native',
                {
                  Fundamentals: [
                    'courses/rocketseat/training/react-native/fundamentals/fundamentals',
                    'courses/rocketseat/training/react-native/fundamentals/module/react-native-fundamentals/getting-started-with-react-native',
                    'courses/rocketseat/training/react-native/fundamentals/module/react-native-fundamentals/fundamentals',
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Udemy',
      items: [
        {
          'Angular': [
            {
              'Core': [
                'courses/udemy/angular/angular-core/angular-core',
                'courses/udemy/angular/angular-core/introduction',
                'courses/udemy/angular/angular-core/angular-components-core-directives-and-pipes',
              ],
            },
          ],
          'Design': [
            {
              'Figma': {
                'Essentials': [
                  'courses/udemy/design/figma/essentials/figma',
                  'courses/udemy/design/figma/essentials/getting-started',
                  'courses/udemy/design/figma/essentials/wireframing-low-fidelity',
                  'courses/udemy/design/figma/essentials/type-color-and-icon-introduction'
                ],
              }
            },
          ],
        }
      ],
    },
  ],
};

export default sidebars;

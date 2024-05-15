import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  notes: ['notes/introduction'],
  courses: [
    {
      type: 'category',
      label: 'Rocketseat',
      items: [
        {
          Training: [
            {
              'React Native': [
                'courses/rocketseat/training/react-native/react-native',
                {
                  Fundamentals: [
                    'courses/rocketseat/training/react-native/fundamentals/getting-started-with-react-native',
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
          'Angular University': [
            {
              'Angular Core': [
                'courses/udemy/angular-university/angular-core/angular-core',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;

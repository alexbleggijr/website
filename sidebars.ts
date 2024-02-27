import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  notes: [
    'notes/introduction',
  ],
  courses: [
    {
      type: 'category',
      label: 'Build Responsive Real-World Websites with HTML and CSS',
      items: [
        'courses/build-responsive-real-world-websites-with-html-and-css/introduction',
        {
          Course: [
            'courses/build-responsive-real-world-websites-with-html-and-css/course/section-01',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

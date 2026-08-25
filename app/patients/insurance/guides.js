// One place to register a medication that has its own detailed page.
// Adding a drug guide = add a page under ./<slug>/page.js, add a line here,
// and add the URL to public/sitemap.xml. Nothing else needs touching.
//
// `generic` must match the `g` field used in MedicationCostTool's MEDS array,
// so the calculator can link out when someone picks that medication.

export const GUIDES = [
  {
    slug: 'tocilizumab',
    generic: 'tocilizumab',
    title: 'Tocilizumab (Actemra)',
    blurb:
      'The infusion and the self-injection cost very different amounts, and which one is cheaper depends on whether you have a supplement.',
  },
  {
    slug: 'abatacept',
    generic: 'abatacept',
    title: 'Abatacept (Orencia)',
    blurb:
      'On paper the self-injection is far cheaper than the infusion. In practice most drug plans do not cover it at all — so check before you count on it.',
  },
];

export const GUIDE_BY_GENERIC = GUIDES.reduce((acc, g) => {
  acc[g.generic] = '/patients/insurance/' + g.slug;
  return acc;
}, {});

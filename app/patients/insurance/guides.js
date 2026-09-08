// One place to register a guide page under /patients/insurance.
// Adding one = add a page under ./<slug>/page.js, add a line here, and add the
// URL to public/sitemap.xml. Nothing else needs touching.
//
// `generic` must match the `g` field used in MedicationCostTool's MEDS array,
// so the calculator can link out when someone picks that medication. Set it to
// null for a guide that is not about one specific drug.

export const GUIDES = [
  {
    slug: 'prior-authorization',
    generic: null,
    title: 'Why your medicine needs permission first',
    blurb:
      'Prior authorization explained in plain language — where it came from, who is really deciding, why your doctor and your plan keep telling you different things, and what to do when you are denied.',
  },
  {
    slug: 'help-paying',
    generic: null,
    title: 'Help paying for your medication',
    blurb:
      'Extra Help does nothing for an infusion. QMB does. Which program covers which kind of drug, why your copay card stopped working, and what to do instead.',
  },
  {
    slug: 'where-you-get-infused',
    generic: null,
    title: 'Where you get infused changes the bill',
    blurb:
      'Medicare pays a hospital three to four times what it pays a doctor’s office for the same infusion, and you owe 20% of the bigger number. Plus the surprise drug bill nobody warns you about.',
  },
  {
    slug: 'helping-a-parent',
    generic: null,
    title: 'Helping a parent with all of this',
    blurb:
      'You need four separate permissions and a power of attorney is not one of them. The forms, what to gather before you call, and what changes when a spouse dies.',
  },
  {
    slug: 'infliximab',
    generic: 'infliximab',
    title: 'Infliximab (Remicade, Inflectra, Renflexis, Avsola)',
    blurb:
      'Your plan may make you switch between versions of this one. The switch saves you about $190 a year — far less than the word "biosimilar" suggests.',
  },
  {
    slug: 'rituximab',
    generic: 'rituximab',
    title: 'Rituximab (Rituxan, Truxima, Ruxience, Riabni)',
    blurb:
      'Here the cheaper versions genuinely are much cheaper — a quarter of the price. The bills also arrive in a few very large lumps rather than monthly.',
  },
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
  {
    slug: 'secukinumab',
    generic: 'secukinumab',
    title: 'Secukinumab (Cosentyx)',
    blurb:
      'The pen and the infusion are paid for out of two different pockets. For most people on Medicare the pen costs thousands less — and it is widely covered.',
  },
  {
    slug: 'golimumab',
    generic: 'golimumab',
    title: 'Golimumab (Simponi and Simponi Aria)',
    blurb:
      'The self-injection is capped at $2,100 a year — but almost no Medicare drug plan covers it, so nearly everyone ends up on the infusion instead.',
  },
];

export const GUIDE_BY_GENERIC = GUIDES.reduce((acc, g) => {
  if (g.generic) acc[g.generic] = '/patients/insurance/' + g.slug;
  return acc;
}, {});

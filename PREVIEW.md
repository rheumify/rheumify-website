# medicare-guides-preview

This branch exists so the Medicare medication guides can be reviewed before they
go public. **Do not delete it.**

## What is on it

Everything under `/patients/insurance` — the medication cost tool, the prior
authorization guide, and six drug guides (infliximab, rituximab, tocilizumab,
abatacept, secukinumab, golimumab) — plus the sitemap entries, the robots.txt
allowances, and the "Paying for Your Medication" card on `/patients`.

It was cut from `main` at commit `ce9f91d`, immediately **before** the gate was
added, so it does not carry the blocking redirect.

## Why you can see it and nobody else can

Vercel Authentication is enabled on this project for all deployments except the
custom domain. Every `*.vercel.app` URL therefore requires a Vercel login on an
account with access to the `rheumifys-projects` team. `rheumify.org` itself is
public; the preview is not.

## How the gate works on production

On `main`, `vercel.json` carries two temporary redirects that send
`/patients/insurance` and `/patients/insurance/:path*` to `/patients`. They are
`permanent: false` deliberately — a 301 would be cached by browsers and search
engines and would be difficult to undo. `robots.txt` also disallows the path for
every crawler, and the URLs are out of the sitemap.

A note for anyone editing `vercel.json`: Vercel validates it strictly and rejects
unknown properties inside a redirect object. Do not add `//` comment keys — a
deployment with them fails to build.

## To launch

1. Delete the two `/patients/insurance` redirects from `vercel.json`
2. Remove the `Disallow: /patients/insurance` lines from `public/robots.txt`
3. Restore the seven guide URLs in `public/sitemap.xml`
4. Restore the "Paying for Your Medication" card on `app/patients/page.js`
5. In Google Search Console, request indexing for each URL and resubmit the sitemap

Steps 1–4 are all present on this branch already, so merging it into `main` does
most of the work.

## Before launching, the outstanding checks

- Replace the remaining estimated drug prices in `MedicationCostTool.js` with
  figures from the quarterly CMS ASP pricing file. The entries already marked
  SOURCED are done; the rest are not.
- Have a SHIBA counselor read the pages.
- Media/publishers errors-and-omissions cover in place.
- A healthcare regulatory attorney's read.

import ReadingControls from '../ReadingControls';

export const metadata = {
  title: 'Why Your Medicine Needs Permission First: Prior Authorization Explained',
  description:
    'What prior authorization is, where it came from, who really decides, and why your doctor and your insurance company keep telling you different things. Plain language, written by a rheumatologist.',
  keywords: [
    'what is prior authorization',
    'why does my medication need prior authorization',
    'prior authorization denied appeal',
    'pharmacy benefit manager explained',
    'specialty pharmacy why',
    'insurance says doctor never sent it',
  ],
};

export default function PriorAuthPage() {
  return (
    <div className="page-container">
      <ReadingControls />
      <p className="breadcrumb">
        <a href="/patients">Patient Resources</a> &rsaquo;{' '}
        <a href="/patients/insurance">Medicare and your medication</a> &rsaquo; Prior authorization
      </p>

      <div className="page-header">
        <h1>Why your medicine needs permission first</h1>
        <p>
          Your doctor writes a prescription. Then someone at your insurance company has to say yes
          before you can have it. Here is how that started, who is really deciding, and what to do
          when it goes wrong.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
        <h2>The short version</h2>
        <p>
          <strong>Prior authorization</strong> means your insurance company wants to approve a
          medicine or a test <em>before</em> you get it. If they say no, they will not pay.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It was built to stop waste. It now covers a huge amount of ordinary care. Doctors deal
          with about <strong>40 of these requests a week</strong> and spend around{' '}
          <strong>13 hours a week</strong> on them.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>When patients fight a denial, they usually win.</strong> In Medicare Advantage in
          2024, insurance companies said no to 4.1 million requests. Only about 1 in 9 people
          appealed. Of those who did, <strong>81% got the decision reversed.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>Where this came from</h2>
        <p>
          It is newer than people think. For most of the 1900s, if your doctor ordered something, you
          got it and the insurance paid.
        </p>
        <p style={{ marginTop: '1rem' }}>
          That changed when health care got expensive fast. National health spending went from about
          $234 billion in 1982 to about $500 billion in 1987. Employers were paying most of it, and
          they wanted it stopped.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So companies started requiring approval before a hospital stay. In 1983, only about{' '}
          <strong>14 out of every 100</strong> big company health plans did this. By 1988, it was{' '}
          <strong>95 out of 100.</strong> In four years it went from unusual to normal.
        </p>
        <p style={{ marginTop: '1rem' }}>
          It started with surgery and hospital stays. Over the years it spread to imaging, then
          physical therapy, then medications. Now it reaches almost everything expensive.
        </p>
      </div>

      <div className="content-card">
        <h2>Does it actually work?</h2>
        <p>Partly. That is the honest answer, and it is worth knowing both halves of it.</p>
        <p style={{ marginTop: '1rem' }}>
          <strong>It does cut spending on the things it targets.</strong> When Medicare added
          approval requirements for power wheelchairs, monthly spending dropped from about $12
          million to about $3 million. Approval rules have also reduced opioid prescribing.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>But it also blocks care people need.</strong> A 2026 review of 25 studies found
          prior authorization linked to delayed treatment, worse disease, avoidable hospital stays,
          and in cancer care, worse survival. When one program made diabetes patients get approval
          for their medicines, the patients who were denied cost <em>more</em> later, because they
          got sicker.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Doctors see this directly. In a 2025 survey, <strong>95% said prior authorization delays
          care</strong>. About <strong>1 in 4 said it had led to a serious problem</strong> for a
          patient. And <strong>79% said patients sometimes just give up</strong> and go without the
          treatment.
        </p>
      </div>

      <div className="content-card">
        <h2>Who is actually deciding — and it may not be your insurer</h2>
        <p>
          When it comes to medicines you pick up at a pharmacy, your insurance company usually is not
          the one making the rules. A separate company does that. It is called a{' '}
          <strong>pharmacy benefit manager</strong>, or PBM.
        </p>
        <p style={{ marginTop: '1rem' }}>
          A PBM decides which medicines your plan will cover, which ones need approval, and what you
          pay. It also decides how much pharmacies get paid.
        </p>
        <p style={{ marginTop: '1rem' }}>
          There are three big ones: <strong>CVS Caremark, Express Scripts, and Optum Rx.</strong>{' '}
          Together they handle about <strong>80% of all prescriptions in the country.</strong>
        </p>
        <p style={{ marginTop: '1rem' }}>
          And here is the part that explains a lot: each one is owned by a big insurance company.
          CVS Caremark is owned by the same company as Aetna. Express Scripts is owned by Cigna.
          Optum Rx is owned by UnitedHealth. So the company deciding whether your medicine is covered
          often belongs to the company paying for it.
        </p>
      </div>

      <div className="content-card">
        <h2>Why the cheaper medicine is sometimes not the covered one</h2>
        <p>
          This surprises people, and it is worth understanding, because it explains a lot of
          confusing decisions.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Drug companies pay <strong>rebates</strong> to PBMs to get their medicine on the covered
          list. A rebate is a discount paid <em>after</em> the sale, behind the scenes.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The size of the rebate is based on the medicine&rsquo;s sticker price. So a drug with a{' '}
          <em>higher</em> sticker price can pay a bigger rebate. And a bigger rebate can buy a better
          spot on the covered list.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The result is strange but real: <strong>an expensive medicine can be covered while a
          cheaper one is not.</strong> Your share is often based on the sticker price, so you can end
          up paying more than you would have on the cheaper drug.
        </p>
        <p style={{ marginTop: '1rem' }}>
          This is not a rumor. The Federal Trade Commission studied it. In a report published in
          January 2025, it found the three big PBMs charged far more for certain specialty medicines
          than those medicines cost to buy — bringing in about <strong>$7.3 billion above their
          cost</strong> over six years.
        </p>
      </div>

      <div className="content-card">
        <h2>Why your pharmacy suddenly changed</h2>
        <p>
          Biologics and other expensive medicines usually cannot be filled at a normal drugstore.
          They go through a <strong>specialty pharmacy</strong> — a mail-order pharmacy set up to
          handle medicines that need refrigeration, careful shipping, and extra paperwork.
        </p>
        <p style={{ marginTop: '1rem' }}>
          There is a real reason those exist. There is also a business reason your plan sends you to
          one particular pharmacy: <strong>the PBMs own specialty pharmacies too.</strong>{' '}
          Pharmacies connected to PBMs handled about{' '}
          <strong>68% of all specialty medicine sales in 2023</strong>, up from about 54% in 2016.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So when your plan tells you that you must switch pharmacies, it is often sending you to a
          pharmacy it owns.
        </p>
        <h3>Two terms worth knowing</h3>
        <ul>
          <li>
            <strong>White bagging</strong> is when the specialty pharmacy ships your infusion
            medicine to your doctor&rsquo;s office instead of the office buying it. It sounds
            harmless. It is not always. The dose is locked in ahead of time, so if your weight or
            your lab results change on the day, your doctor cannot adjust it. And if your
            appointment moves, the medicine may be wasted and cannot be given to anyone else.
          </li>
          <li>
            <strong>Brown bagging</strong> is when they ship it to <em>you</em> and you carry it in.
            This is worse. Medicines that need exact temperatures often sit on a porch. Many doctors
            will refuse to give a medicine they cannot confirm was stored properly.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Twelve states have now banned insurers from forcing this. If your plan tries it and your
          infusion center pushes back, that is why — and they are not being difficult.
        </p>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid var(--pink-accent)' }}>
        <h2>&ldquo;Your doctor never sent it&rdquo;</h2>
        <p>
          Almost everyone on a biologic hears this sentence at some point. You call the plan. The
          plan says the office never sent the request. You call the office. The office says they sent
          it twice.
        </p>
        <p style={{ marginTop: '1rem' }}>Usually nobody is lying. Here is what is actually going on.</p>
        <ul>
          <li>
            <strong>There is no single system.</strong> Requests go by fax, by phone, or through a
            website — and each insurance company uses a different one. Something sent through one
            channel may not show up to the person you are talking to on the phone.
          </li>
          <li>
            <strong>The request and the paperwork travel separately.</strong> The plan may have the
            request but not the medical records, and record it as &ldquo;not received.&rdquo;
          </li>
          <li>
            <strong>The person on the phone often cannot see the whole file.</strong> They are
            reading one screen. It may be a different screen from the one your request landed in.
          </li>
          <li>
            <strong>Approvals expire.</strong> Most last a year. Nobody reliably tells you when yours
            is running out. You find out at the pharmacy.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>What helps:</strong> ask your doctor&rsquo;s office for the date they sent it and
          the confirmation or reference number. Then give that to the plan. A specific date and
          number is much harder to lose than &ldquo;my doctor sent it.&rdquo;
        </p>
      </div>

      <div className="content-card">
        <h2>What you can do that helps &mdash; and what can set it back</h2>
        <p>
          Patients are often told to &ldquo;call and push.&rdquo; That advice is half right. Some
          calls move things forward. A few genuinely make it slower, and nobody warns you which is
          which.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Worth doing:</strong>
        </p>
        <ul>
          <li>
            <strong>Ask the office for the date sent and the reference number</strong>, then use
            those two facts in every call. This is the single most useful thing you can do.
          </li>
          <li>
            <strong>Ask the plan to mail you the denial in writing, with the specific reason.</strong>{' '}
            You are entitled to it, and your doctor&rsquo;s office may not have received the same
            detail you can request as the member.
          </li>
          <li>
            <strong>Check that the plan has your current address and the right pharmacy on file.</strong>{' '}
            Requests do fail on this.
          </li>
          <li>
            <strong>Tell the office if waiting is hurting you</strong> &mdash; if you are in pain, on
            steroids, or losing function. That sentence is what lets them ask for the fast track.
          </li>
          <li>
            <strong>Ask whether the appeal was filed, and on what date.</strong> Then write the date
            down.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          <strong>Where it can backfire:</strong>
        </p>
        <ul>
          <li>
            <strong>Agreeing to something on the phone that changes the request.</strong> If someone
            offers to switch you to a different medicine, a different dose, or a different pharmacy
            and you say yes, the request your doctor submitted may be closed and a new one started
            &mdash; back to the beginning of the queue. It is fine to say: &ldquo;I would like my
            doctor to decide that. Please leave the current request as it is.&rdquo;
          </li>
          <li>
            <strong>Starting a second request while one is pending.</strong> A member request and a
            doctor request are two separate tracks. Two open at once can be read as a duplicate, and
            one of them may be closed &mdash; sometimes the wrong one.
          </li>
          <li>
            <strong>Cancelling anything.</strong> Never agree to withdraw or cancel a pending request
            to &ldquo;clean it up&rdquo; or &ldquo;resubmit it properly.&rdquo; A withdrawn request
            has no decision, and no decision means nothing to appeal.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          None of this means staying quiet. It means your calls are most powerful when they{' '}
          <em>add information</em> &mdash; a date, a number, a symptom, a request in writing &mdash;
          and least powerful when they change what was already asked for.
        </p>
      </div>

      <div className="content-card">
        <h2>Nobody at your doctor&rsquo;s office is paid to say no</h2>
        <p>
          This one is worth saying plainly, because the office is the part of the system you can
          actually reach, so it is the part that gets the frustration.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Your doctor&rsquo;s office is not paid for any of this work.</strong> There is no
          billing code for a prior authorization. In 2025, physicians reported spending about{' '}
          <strong>13 hours a week</strong> on roughly <strong>40 requests</strong>, and most
          practices now employ staff whose whole job is paperwork for medicines they have already
          decided you need. When a request is denied, the office loses that time and gets nothing
          back. For an infusion, it can be worse: the clinic may have already bought the drug.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>The plan&rsquo;s position is different.</strong> A Medicare Advantage plan is paid a
          set amount per member per month by Medicare, whether or not you get the medicine. Money not
          spent on your care stays inside the plan. That is not a conspiracy; it is simply how the
          payment works, and it is why the incentive to say no sits on one side of the table and not
          the other.
        </p>
        <p style={{ marginTop: '1rem' }}>
          In fairness, there is a limit on this. Medicare Advantage plans are required to spend at
          least <strong>85 cents of every dollar</strong> on medical care rather than administration
          and profit, and plans that fall below it owe money back. It is a real constraint. It is
          also a floor across everything the plan pays for in a year, not a rule about your
          medication.
        </p>
        <p style={{ marginTop: '1rem' }}>
          So if you are wondering whether your office is dragging its feet: the people asking you for
          one more lab result are working unpaid to get you a drug they cannot bill for until you
          receive it. Being annoyed at the situation is fair. They are on your side of it.
        </p>
      </div>

      <div className="content-card">
        <h2>The &ldquo;peer-to-peer&rdquo; call</h2>
        <p>
          If a request is denied, your doctor can ask for a <strong>peer-to-peer</strong>. That means
          a phone call between your doctor and a doctor who works for the insurance company.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The word &ldquo;peer&rdquo; suggests someone in the same field. Often they are not. In the
          2025 survey, only <strong>16% of the doctors who take these calls</strong> said the plan&rsquo;s
          reviewer usually had the right qualifications &mdash; meaning licensed in their state and in the
          specialty that normally treats the condition. A rheumatologist may end up explaining a lupus
          treatment to someone who has never treated lupus.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Two important things about this call.</strong> First, your doctor often has to take
          it during clinic hours, between patients, on the insurer&rsquo;s schedule. Second &mdash; and
          this matters most &mdash; <strong>a peer-to-peer is not an appeal.</strong> It is an informal
          conversation. An appeal is a formal process with legal deadlines and real rights attached.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Two things follow from that, and they are the reason this section exists.
        </p>
        <ul>
          <li>
            <strong>Your doctor does not have to do the call first.</strong> A peer-to-peer is
            voluntary. It is not a required step, and nothing in the Medicare rules makes an appeal
            wait for it. Your doctor may look at the denial and decide to go straight to the formal
            appeal instead. That is a reasonable choice, not a shortcut &mdash; sometimes it is the
            faster route, and it is the one with deadlines the plan has to meet.
          </li>
          <li>
            <strong>The call does not stop the clock.</strong> Your 65 days to appeal keep running
            during a peer-to-peer, and &ldquo;we were waiting on the call&rdquo; is not an accepted
            reason for filing late. If a peer-to-peer is scheduled two weeks out, the appeal can be
            filed in the meantime.
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>How often are biologics actually denied?</h2>
        <p>
          This is the question everyone asks, and the honest answer is that{' '}
          <strong>nobody publishes it.</strong> Medicare collects how many requests plans decide and
          how many they deny, but not what the requests were for. There is no national figure for
          biologics, for rheumatology drugs, or for any other drug class. If you see one quoted with
          confidence, be careful about where it came from.
        </p>
        <p style={{ marginTop: '1rem' }}>What we do have is smaller and more specific.</p>
        <ul>
          <li>
            <strong>Almost every plan requires approval.</strong> In a review of 2,737 Medicare drug
            plans, <strong>95%</strong> required prior authorization for biologic drugs used in
            rheumatoid arthritis. Being asked for approval is not a sign that anything is wrong with
            your case. It is the default.
          </li>
          <li>
            <strong>Most denials do not hold.</strong> In a study of 160 prior authorization requests
            for infused rheumatology medications at one hospital, <strong>21% were denied at
            first</strong> &mdash; and <strong>82% of those denials were overturned</strong>, so about
            96% of patients were eventually approved. Denials clustered heavily in conditions where no
            drug is FDA-approved for that use, which is common in rheumatology.
          </li>
          <li>
            <strong>The real cost is time, not refusal.</strong> In that same study, patients who were
            denied and then approved waited a median of <strong>50 days</strong> from request to
            infusion, against 27 days when no approval was needed &mdash; and took more steroid in the
            three months that followed. In a study of giant cell arteritis, the average was{' '}
            <strong>43 days</strong> from request to first dose.
          </li>
        </ul>
        <p style={{ marginTop: '1rem' }}>
          Both of those are single-hospital studies, so treat the exact numbers as a guide rather
          than a national rate. But the shape of it is consistent, and it is the useful part:{' '}
          <strong>you will very likely get the medicine. You will probably wait longer than you
          should, and the waiting is the part that does the harm.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>What is changing</h2>
        <p>Some of this is genuinely getting better. Some of it is a press release.</p>
        <ul>
          <li>
            <strong>New federal rules started in January 2026.</strong> Medicare Advantage and
            Medicaid plans must now decide urgent requests within <strong>72 hours</strong> and
            regular requests within <strong>7 days</strong>. They must give a specific reason for
            every denial, not just &ldquo;not medically necessary.&rdquo; And they must publish their
            denial numbers every year. <strong>Note: these rules do not cover prescription
            medications</strong> — only medical services.
          </li>
          <li>
            <strong>In June 2025, about 50 insurance companies promised to do better.</strong> They
            cover 257 million people. They promised fewer approval requirements and faster answers.
            Ten months later the industry said it had removed 6.5 million requests, about 11% fewer.
            Only <strong>33% of doctors</strong> think it will make a real difference.
          </li>
          <li>
            <strong>States are acting too.</strong> Several passed laws in 2025 setting deadlines,
            requiring a licensed doctor to sign off on denials, and requiring plans to honor an
            approval you already had when you switch plans.
          </li>
          <li>
            <strong>&ldquo;Gold carding&rdquo;</strong> lets doctors who almost always get approved
            skip the process. It sounds sensible. In practice only about{' '}
            <strong>5% of doctors</strong> have any plan offering it.
          </li>
        </ul>
      </div>

      <div className="content-card" style={{ borderLeft: '4px solid #7FBF9B' }}>
        <h2>What to do when you are denied</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.9 }}>
          <li>
            <strong>Get the denial in writing, with the reason.</strong> You are entitled to it. The
            reason matters — &ldquo;we need more records&rdquo; is a completely different problem
            from &ldquo;we want you to try a different drug first.&rdquo;
          </li>
          <li>
            <strong>Ask your doctor&rsquo;s office what the plan actually asked for.</strong>{' '}
            Sometimes it is one missing lab result or one missing date. Those get fixed in a day.
          </li>
          <li>
            <strong>Ask the office to appeal. Do not stop at the phone call.</strong> With Medicare
            Advantage there are <strong>65 days</strong> from the denial notice. In practice this is
            usually filed by your doctor&rsquo;s office, not by you &mdash; for a medication you have
            not received yet, your doctor is allowed to appeal on your behalf, and only has to tell
            you they are doing it. You may be asked to sign a form so the office can act for you.
            That is normal. It does not mean you are on your own with it. Your job is to ask whether
            the appeal was filed and on what date, and to keep that date.
          </li>
          <li>
            <strong>You can also file it yourself, and sometimes that is the right move.</strong> If
            the bill has already come to you, or if you cannot get a straight answer from the office,
            you can appeal as the member. Most people never file. Most who do, win.
          </li>
          <li>
            <strong>Ask for a fast appeal if waiting would hurt you.</strong> If your doctor says a
            delay could seriously harm your health, the plan must decide within{' '}
            <strong>72 hours</strong>. Use those words.
          </li>
          <li>
            <strong>If the plan says no again, it goes to an outsider automatically.</strong> With
            Medicare Advantage, a denied appeal is sent to an independent reviewer who does not work
            for your insurance company. You do not have to do anything to make that happen.
          </li>
          <li>
            <strong>Get free help.</strong> A trained counselor will walk through it with you at no
            cost. In Washington that is{' '}
            <a href="https://www.insurance.wa.gov/shiba" target="_blank" rel="noopener noreferrer">
              SHIBA
            </a>{' '}
            (1-800-562-6900). Anywhere else, find your state program at{' '}
            <a href="https://www.shiphelp.org" target="_blank" rel="noopener noreferrer">
              shiphelp.org
            </a>
            . You can also call Medicare at 1-800-MEDICARE.
          </li>
          <li>
            <strong>Know which complaint goes where.</strong> For a{' '}
            <strong>Medicare Advantage or Part D</strong> denial, the complaint goes to Medicare
            &mdash; 1-800-MEDICARE, or the complaint form on{' '}
            <a href="https://www.medicare.gov/my/medicare-complaint" target="_blank" rel="noopener noreferrer">
              medicare.gov
            </a>
            . State insurance regulators mostly cannot act on those, because federal Medicare rules
            replace state rules for these plans. Where your state regulator{' '}
            <em>can</em> help is with a <strong>Medicare supplement (Medigap)</strong> policy, or
            with any non-Medicare insurance. In Washington that is the{' '}
            <a href="https://www.insurance.wa.gov/file-complaint-or-check-your-complaint-status" target="_blank" rel="noopener noreferrer">
              Office of the Insurance Commissioner
            </a>
            . Every other state&rsquo;s department is listed at{' '}
            <a href="https://content.naic.org/state-insurance-departments" target="_blank" rel="noopener noreferrer">
              naic.org
            </a>
            .
          </li>
        </ol>
        <p style={{ marginTop: '1rem' }}>
          <strong>One more thing.</strong> None of this is your fault, and none of it is your
          doctor&rsquo;s office being slow. The system is genuinely built this way. But the appeal
          numbers are the most useful fact on this page:{' '}
          <strong>most denials that get challenged are overturned, and most are never challenged.</strong>
        </p>
      </div>

      <div className="content-card">
        <h2>Related</h2>
        <ul>
          <li>
            <a href="/patients/insurance">Medicare and your medication</a> — what your medicine costs
            under each kind of Medicare
          </li>
          <li>
            <a href="/patients/insurance/infliximab">Infliximab</a>,{' '}
            <a href="/patients/insurance/rituximab">rituximab</a>,{' '}
            <a href="/patients/insurance/tocilizumab">tocilizumab</a>,{' '}
            <a href="/patients/insurance/abatacept">abatacept</a>,{' '}
            <a href="/patients/insurance/secukinumab">secukinumab</a> and{' '}
            <a href="/patients/insurance/golimumab">golimumab</a> guides
          </li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Where these figures come from</h2>
        <ol style={{ color: 'var(--gray-light)', marginLeft: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <li>
            Growth of prior authorization in the 1980s (14 of 100 corporate plans in 1983 rising to
            95 of 100 large firms by 1988; national spending $234 billion in 1982 to $500 billion in
            1987) — Institute of Medicine, <em>Controlling Costs and Changing Patient Care? The Role
            of Utilization Management</em>, 1989. Earlier roots: Medicare&rsquo;s 1965 utilization
            review requirement and the Professional Standards Review Organizations created by the
            Social Security Amendments of 1972.
          </li>
          <li>
            Evidence on effect: Altarum / National Institute for Health Care Reform review, November
            2019 (power mobility demonstration spending fell from about $12 million to about $3
            million monthly; documented spillover onto needed care). Murphy et al., systematic review
            of 25 studies, <em>American Journal of Medicine</em> 2026;139(1):24&ndash;32 — prior
            authorization associated with delayed treatment, disease exacerbation, preventable
            hospitalization and reduced disease-free survival.
          </li>
          <li>
            Physician burden and harm figures — American Medical Association prior authorization
            physician survey, fielded December 2025 and released May 2026 (1,000 physicians): 40
            requests per physician per week; 13 hours per week; 95% report care delays; 26% report a
            serious adverse event; 79% report patients abandoning treatment; 16% say the plan&rsquo;s
            reviewer usually has appropriate qualifications; 5% have access to any exemption program.
          </li>
          <li>
            Medicare Advantage volumes for 2024 (about 53 million determinations, 4.1 million
            denials, 11.5% appealed, 80.7% of appeals overturned) and the contrast with Original
            Medicare (about 625,000 reviews) — KFF analysis of CMS data.
          </li>
          <li>
            Pharmacy benefit manager market share (Express Scripts, CVS Caremark and Optum Rx
            processing about 80% of equivalent prescription claims in 2025) — Drug Channels
            Institute, March 2026; Federal Trade Commission interim staff report, July 2024.
            Ownership: CVS Health/Aetna, Cigna, and UnitedHealth Group respectively.
          </li>
          <li>
            Rebate mechanics and specialty pharmacy markups — Federal Trade Commission second interim
            staff report on prescription drug middlemen, January 14, 2025 (about $7.3 billion above
            estimated acquisition cost on specialty generic drugs, 2017&ndash;2022, including about
            $1.4 billion from spread pricing); Commonwealth Fund explainer, March 2025.
          </li>
          <li>
            Specialty pharmacy concentration (68% of specialty drug dispensing revenue through
            PBM-affiliated pharmacies in 2023, up from 54% in 2016) — Federal Trade Commission,
            January 2025. White and brown bagging concerns and the twelve state bans as of July 2025
            — American Medical Association and American Society of Clinical Oncology issue brief;
            National Infusion Center Association.
          </li>
          <li>
            CMS Interoperability and Prior Authorization final rule (CMS-0057-F): decisions within 72
            hours expedited and 7 calendar days standard, specific denial reasons, and annual public
            reporting, effective January 1, 2026; application programming interfaces from January 1,
            2027. Prescription drug prior authorizations are excluded from the rule — CMS fact sheet.
          </li>
          <li>
            Industry commitment of June 23, 2025 by AHIP and approximately 50 plans covering 257
            million people; reported reduction of 6.5 million requests (about 11%) through April
            2026; 33% of physicians expecting meaningful change — AHIP; KFF Health News, July 2026;
            American Medical Association, May 2026.
          </li>
          <li>
            Medicare Advantage appeal rights: 65 days to file, 30 days standard and 72 hours
            expedited for pre-service decisions, automatic forwarding of denied appeals to an
            Independent Review Entity — Medicare.gov. State reforms of 2025 — MultiState legislative
            tracking.
          </li>
          <li>
            Peer-to-peer review is not an appeal level and does not pause the appeal clock. The term
            appears nowhere in the Medicare Advantage appeal rules (42 CFR Part 422, Subpart M); CMS
            describes it as voluntary discussion and states that plans &ldquo;may not interfere with
            an enrollee&rsquo;s right to receive a requested initial determination or obstruct the
            enrollee&rsquo;s access to the appeal process&rdquo; — CMS,{' '}
            <em>
              Parts C &amp; D Enrollee Grievances, Organization/Coverage Determinations, and Appeals
              Guidance
            </em>
            , effective July 6, 2026, §§10.6 and 40.10. The 65 days runs from receipt of the written
            notice (42 CFR §422.582(b), §422.584(b)); a pending peer-to-peer is not among the good
            cause reasons for filing late (§422.582(c)).
          </li>
          <li>
            The plan&rsquo;s reviewer is not required to share the treating physician&rsquo;s
            specialty: the reviewer &ldquo;need not, in all cases, be of the same specialty or
            subspecialty as the treating physician&rdquo; — 42 CFR §422.566(d) for initial decisions
            and §422.590(h) for appeals. The 16% figure is the share of physicians who take part in
            peer-to-peer reviews reporting that the plan&rsquo;s reviewer often or always has the
            appropriate qualifications, defined in the survey as licensed in the physician&rsquo;s
            state and of the same specialty that typically manages the condition — American Medical
            Association prior authorization physician survey, fielded December 2025.
          </li>
          <li>
            A treating physician may request a standard reconsideration of a pre-service request on
            the enrollee&rsquo;s behalf upon notifying the enrollee, and any physician may request an
            expedited reconsideration — 42 CFR §422.578 and §422.584(a). Plans may not retaliate
            against a physician for doing so (§422.584(f)). Payment and post-service appeals must come
            from the enrollee or an appointed representative (§422.574).
          </li>
          <li>
            No national denial rate exists for biologics or any drug class: CMS does not collect
            Medicare Advantage determinations by type of service, and the 2026 federal prior
            authorization transparency metrics exclude prescription drugs and carry no service-level
            breakdown — KFF, 2025 and August 2026.
          </li>
          <li>
            Prior authorization required by 95% of 2,737 Medicare Part D formularies for biologic
            DMARDs in rheumatoid arthritis — Yazdany J, Dudley RA, Chen R, Lin GA, Tseng C-W,{' '}
            <em>Arthritis &amp; Rheumatology</em> 2015;67(6):1474&ndash;80, using the January 2013 CMS
            formulary files for all 50 states and the District of Columbia.
          </li>
          <li>
            Initial denial of 21% of 160 prior authorization requests for infusible rheumatology
            medications, 82% of those denials overturned, 96% ultimately approved, and a median 50
            days from request to infusion after a denial against 27 days where no prior authorization
            was required — Wallace ZS, Harkness T, Fu X, Stone JH, Choi HK, Walensky RP,{' '}
            <em>Arthritis Care &amp; Research</em> 2020;72(11):1543&ndash;9, a single-centre cohort
            covering July 2016 to June 2018. Mean 43 days from request to first tocilizumab dose in
            giant cell arteritis — <em>Journal of Rheumatology</em>, 2025, single centre, 82 patients.
          </li>
          <li>
            Medicare Advantage plans are paid a fixed amount per enrollee per month and must maintain
            a medical loss ratio of at least 85%, owing money back to CMS below that threshold — 42
            CFR §422.2410; Social Security Act §1857(e)(4). Prior authorization is not separately
            reimbursed to physician practices; burden figures of about 13 hours per week and about 40
            requests per physician per week — American Medical Association survey, fielded December
            2025.
          </li>
          <li>
            State insurance regulators are generally preempted from setting standards for Medicare
            Advantage plans — 42 CFR §422.402; 42 U.S.C. §1395w-26(b)(3). Medicare Advantage and Part
            D complaints go to Medicare at medicare.gov/my/medicare-complaint or 1-800-MEDICARE;
            Medigap and non-Medicare coverage go to the state department of insurance, listed at
            naic.org/state-insurance-departments. Washington: Office of the Insurance Commissioner,
            insurance.wa.gov.
          </li>
        </ol>
      </div>

      <div className="content-card">
        <h2>About this page</h2>
        <p>
          Written and reviewed by <strong>Alison Bays, MD, MPH</strong>, board-certified
          rheumatologist. Current as of <strong>August 2026</strong>.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>This is educational information, not advice</strong> — not medical, legal,
          financial or insurance advice, and not a substitute for talking to your doctor or your
          plan. Nothing is sold here. No insurance is sold here, no plan is recommended, and neither
          this page nor its author is paid by any insurance company, plan, pharmacy benefit manager,
          pharmaceutical manufacturer or broker. This page is not affiliated with, endorsed by, or
          connected to Medicare, the Centers for Medicare &amp; Medicaid Services, or any government
          agency.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--gray-medium)', fontSize: '0.95rem' }}>
          Found something wrong?{' '}
          <a href="mailto:rheumify@pm.me?subject=Correction%3A%20prior%20authorization%20guide">
            Please tell us
          </a>
          .
        </p>
      </div>
    </div>
  );
}

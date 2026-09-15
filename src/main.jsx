import React, { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const jobs = [
  { id: 1, company: 'Razorpay', domain: 'razorpay.com', mark: 'R', accent: '#3264d8', role: 'Software Development Engineer I', type: 'Full-time', location: 'Bengaluru, India', experience: '0–2 yrs', time: '2h ago', salary: '₹14L – ₹20L', tags: ['React', 'Node.js'], source: 'Razorpay careers', description: 'Build reliable payment experiences used by millions of Indian businesses. You will work across product, platform and engineering teams.', apply: 'https://razorpay.com/jobs/' },
  { id: 2, company: 'Postman', domain: 'postman.com', mark: 'P', accent: '#f26d3d', role: 'Frontend Engineer', type: 'Full-time', location: 'Remote · India', experience: '2–4 yrs', time: '4h ago', salary: '₹18L – ₹28L', tags: ['React', 'TypeScript'], source: 'Postman careers', description: 'Help shape developer tools used by a global community. Bring thoughtful interfaces to complex workflows and ship with a small product team.', apply: 'https://www.postman.com/company/careers/' },
  { id: 3, company: 'PhonePe', domain: 'phonepe.com', mark: 'पे', accent: '#5a26aa', role: 'Backend Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '1–3 yrs', time: '5h ago', salary: '₹16L – ₹24L', tags: ['Java', 'Kafka'], source: 'PhonePe careers', description: 'Create high-scale backend services powering secure, everyday money movement across India.', apply: 'https://www.phonepe.com/careers/' },
  { id: 4, company: 'Meesho', domain: 'meesho.com', mark: 'm', accent: '#ea2870', role: 'Data Analyst', type: 'Full-time', location: 'Bengaluru, India', experience: '0–2 yrs', time: '6h ago', salary: '₹10L – ₹16L', tags: ['SQL', 'Python'], source: 'Meesho careers', description: 'Turn marketplace data into decisions that empower millions of entrepreneurs and their customers.', apply: 'https://careers.meesho.com/' },
  { id: 5, company: 'CRED', domain: 'cred.club', mark: 'C', accent: '#161616', role: 'Product Designer', type: 'Full-time', location: 'Bengaluru, India', experience: '2–5 yrs', time: '1d ago', salary: '₹18L – ₹30L', tags: ['Figma', 'Product'], source: 'CRED careers', description: 'Craft purposeful, detail-rich experiences for one of India’s most distinctive consumer products.', apply: 'https://careers.cred.club/' },
  { id: 6, company: 'Zepto', domain: 'zeptonow.com', mark: 'Z', accent: '#7d28ba', role: 'Software Engineer · Intern', type: 'Internship', location: 'Mumbai, India', experience: 'Student', time: '1d ago', salary: '₹40K / month', tags: ['JavaScript', 'APIs'], source: 'Zepto careers', description: 'Work with engineers on systems that make quick commerce feel effortless for customers.', apply: 'https://www.zeptonow.com/careers' },
  { id: 7, company: 'Atlassian', domain: 'atlassian.com', mark: 'A', accent: '#1868db', role: 'Software Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '2–4 yrs', time: '1d ago', salary: 'Competitive', tags: ['Java', 'Cloud'], source: 'Atlassian careers', description: 'Help teams around the world collaborate with dependable cloud products and developer-friendly tools.', apply: 'https://www.atlassian.com/company/careers' },
  { id: 8, company: 'Freshworks', domain: 'freshworks.com', mark: 'F', accent: '#00a886', role: 'Software Development Engineer II', type: 'Full-time', location: 'Chennai, India', experience: '2–5 yrs', time: '1d ago', salary: 'Competitive', tags: ['React', 'JavaScript'], source: 'Freshworks careers', description: 'Build useful, approachable software for customer and employee teams around the world.', apply: 'https://www.freshworks.com/company/careers/' },
  { id: 9, company: 'Swiggy', domain: 'swiggy.com', mark: 'S', accent: '#fc8019', role: 'Data Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '1–3 yrs', time: '2d ago', salary: 'Competitive', tags: ['Python', 'SQL'], source: 'Swiggy careers', description: 'Develop data systems that support high-volume, everyday consumer experiences across India.', apply: 'https://careers.swiggy.com/' },
  { id: 10, company: 'BrowserStack', domain: 'browserstack.com', mark: 'B', accent: '#f7921e', role: 'QA Automation Engineer', type: 'Full-time', location: 'Mumbai, India', experience: '1–3 yrs', time: '2d ago', salary: 'Competitive', tags: ['Selenium', 'Java'], source: 'BrowserStack careers', description: 'Help make browser testing reliable for engineering teams building the web.', apply: 'https://www.browserstack.com/careers' },
  { id: 11, company: 'Groww', domain: 'groww.in', mark: 'G', accent: '#00b386', role: 'Android Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '2–4 yrs', time: '2d ago', salary: 'Competitive', tags: ['Kotlin', 'Android'], source: 'Groww careers', description: 'Create simple investing experiences for the next generation of Indian investors.', apply: 'https://groww.in/careers' },
  { id: 12, company: 'Zeta', domain: 'zeta.tech', mark: 'Z', accent: '#ef3a62', role: 'Platform Engineer', type: 'Full-time', location: 'Hyderabad, India', experience: '2–5 yrs', time: '3d ago', salary: 'Competitive', tags: ['Kubernetes', 'Go'], source: 'Zeta careers', description: 'Work on cloud-native banking infrastructure serving modern financial institutions.', apply: 'https://www.zeta.tech/careers/' },
  { id: 13, company: 'Flipkart', domain: 'flipkartcareers.com', mark: 'F', accent: '#2874f0', role: 'Backend Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '1–3 yrs', time: '3d ago', salary: 'Competitive', tags: ['Java', 'Distributed systems'], source: 'Flipkart careers', description: 'Build services at the scale of one of India’s largest digital commerce platforms.', apply: 'https://www.flipkartcareers.com/' },
  { id: 14, company: 'InMobi', domain: 'inmobi.com', mark: 'I', accent: '#2d63f0', role: 'Machine Learning Engineer', type: 'Full-time', location: 'Bengaluru, India', experience: '2–5 yrs', time: '3d ago', salary: 'Competitive', tags: ['Python', 'ML'], source: 'InMobi careers', description: 'Build machine-learning products and platforms for a global advertising technology company.', apply: 'https://www.inmobi.com/company/careers' },
  { id: 15, company: 'Zoho', domain: 'zoho.com', mark: 'Z', accent: '#e42527', role: 'Full Stack Developer', type: 'Full-time', location: 'Chennai, India', experience: '0–2 yrs', time: '3d ago', salary: 'Competitive', tags: ['JavaScript', 'Java'], source: 'Zoho careers', description: 'Ship dependable business software used by teams of every size.', apply: 'https://www.zoho.com/careers/' },
]

function Icon({ name, size = 18, fill = 'none' }) {
  const paths = {
    menu: <><path d="M4 7h16M4 12h16M4 17h10" /></>, search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>, tune: <><path d="M4 6h16M7 12h10M10 18h4" /></>, arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>, close: <><path d="m6 6 12 12M18 6 6 18" /></>, pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>, briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5h8v2M3 12h18" /></>, clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>, bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z" />, check: <path d="m5 12 4 4L19 6" />, bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7V2Z" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function CompanyMark({ job, small = false }) {
  const [source, setSource] = useState(`https://logo.clearbit.com/${job.domain}`)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    if (source.includes('clearbit')) setSource(`https://www.google.com/s2/favicons?domain=${job.domain}&sz=128`)
    else setFailed(true)
  }
  return <div className={`company-mark ${small ? 'is-small' : ''}`} style={{ backgroundColor: job.accent }} aria-label={`${job.company} logo`}>
    {failed ? <span aria-hidden="true">{job.mark}</span> : <img src={source} alt="" onError={handleError} />}
  </div>
}

function JobCard({ job, saved, onSave, onOpen }) {
  return <article className="job-card" onClick={() => onOpen(job)}>
    <CompanyMark job={job} /><div className="job-content"><div className="job-meta"><span>{job.company}</span><i>•</i><span>{job.type}</span></div><h3>{job.role}</h3><div className="job-facts"><span><Icon name="pin" size={13} />{job.location}</span><span><Icon name="briefcase" size={13} />{job.experience}</span></div><div className="job-time"><span><Icon name="clock" size={13} />{job.time}</span><span className="verified"><Icon name="check" size={12} />Verified</span></div></div>
    <div className="job-controls"><button className={saved ? 'is-saved' : ''} onClick={(event) => { event.stopPropagation(); onSave(job.id) }} aria-label={saved ? `Remove ${job.role} from saved jobs` : `Save ${job.role}`}><Icon name="bookmark" size={18} /></button><button className="open-button" onClick={(event) => { event.stopPropagation(); onOpen(job) }} aria-label={`View ${job.role}`}><Icon name="arrow" size={17} /></button></div>
  </article>
}

function JobDialog({ job, saved, onClose, onSave }) {
  useEffect(() => { const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }; window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape) }, [onClose])
  return <div className="dialog-backdrop" onMouseDown={onClose}><section className="job-dialog" role="dialog" aria-modal="true" aria-labelledby="job-title" onMouseDown={(event) => event.stopPropagation()}><div className="sheet-handle" /><button className="close-button" onClick={onClose} aria-label="Close job details"><Icon name="close" size={19} /></button><div className="dialog-company"><CompanyMark job={job} small /><div><strong>{job.company}</strong><span>{job.source}</span></div></div><h2 id="job-title">{job.role}</h2><div className="dialog-facts"><span><Icon name="pin" size={14} />{job.location}</span><span><Icon name="briefcase" size={14} />{job.type}</span></div><div className="job-tags"><span>{job.experience}</span><span>{job.salary}</span>{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{job.description}</p><div className="dialog-actions"><button className={saved ? 'is-saved' : ''} onClick={() => onSave(job.id)}><Icon name="bookmark" size={18} />{saved ? 'Saved' : 'Save'}</button><a href={job.apply} target="_blank" rel="noreferrer">Apply on {job.company} <Icon name="arrow" size={17} /></a></div></section></div>
}

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/DpfCjTKfzAYKi9X1bPoeBQ?s=cl&p=a&mlu=4&ilr=4'

function MenuDrawer({ onClose, onReadRazorpay }) {
  return <div className="menu-backdrop" onMouseDown={onClose}>
    <aside className="menu-drawer" aria-label="Navigation" onMouseDown={(event) => event.stopPropagation()}>
      <div className="drawer-head"><img src="/optqvo-logo.svg" alt="OPTQVO" /><button onClick={onClose} aria-label="Close navigation"><Icon name="close" size={19} /></button></div>
      <nav>
        <a href="#jobs" onClick={onClose}>Latest jobs <Icon name="arrow" size={16} /></a>
        <button onClick={() => { onReadRazorpay(); onClose() }}>Razorpay role brief <Icon name="arrow" size={16} /></button>
        <a href="#community" onClick={onClose}>OPTQVO community <Icon name="arrow" size={16} /></a>
      </nav>
      <a className="drawer-whatsapp" href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer">Join WhatsApp community <Icon name="arrow" size={16} /></a>
    </aside>
  </div>
}

function RazorpayArticle({ job, onBack }) {
  return <main className="article-page">
    <header className="article-header"><button onClick={onBack}><Icon name="arrow" size={18} />Back to jobs</button><img src="/optqvo-logo.svg" alt="OPTQVO" /></header>
    <article className="article-content">
      <p className="article-label">ROLE BRIEF · INDIA</p>
      <div className="article-company"><CompanyMark job={job} /><div><strong>Razorpay</strong><span>Engineering · Bengaluru, India</span></div></div>
      <h1>Software Development Engineer I at Razorpay</h1>
      <p className="article-intro">A practical guide to the role, the skills to bring, and how to prepare your application.</p>
      <div className="article-stats"><span>Full-time</span><span>0–2 years</span><span>{job.salary}</span></div>
      <section><h2>About the opportunity</h2><p>Razorpay builds payment and banking infrastructure for businesses in India. This early-career software engineering role is suited to someone who enjoys solving product problems with reliable, maintainable code.</p></section>
      <section><h2>What you may work on</h2><ul><li>Build and improve product-facing features with engineers, product managers and designers.</li><li>Write well-tested services and interfaces that handle real customer workflows.</li><li>Debug issues, review code and learn the team’s engineering practices.</li><li>Contribute to systems where performance, security and reliability matter.</li></ul></section>
      <section><h2>Good fit for this role</h2><p>This brief is aimed at candidates with solid foundations in JavaScript, React, Node.js or comparable backend technologies. Show projects where you made a clear technical decision, worked through a problem, and shipped something useful.</p></section>
      <section><h2>Application checklist</h2><ul><li>Keep your résumé to one clear, relevant page.</li><li>Link your GitHub, portfolio or two projects you can explain confidently.</li><li>Tailor the summary to software engineering and your strongest stack.</li><li>Confirm the latest eligibility and job requirements on Razorpay’s careers page before applying.</li></ul></section>
      <div className="article-apply"><span>Applications are handled on the official Razorpay careers site.</span><a href={job.apply} target="_blank" rel="noreferrer">Apply for this role <Icon name="arrow" size={17} /></a></div>
    </article>
  </main>
}

function App() {
  const [query, setQuery] = useState(''); const [type, setType] = useState('All types'); const [company, setCompany] = useState('All companies'); const [experience, setExperience] = useState('Any experience'); const [showFilters, setShowFilters] = useState(false); const [selectedJob, setSelectedJob] = useState(null); const [savedIds, setSavedIds] = useState([]); const [menuOpen, setMenuOpen] = useState(false); const [showRazorpayArticle, setShowRazorpayArticle] = useState(false)
  const visibleJobs = useMemo(() => jobs.filter((job) => { const searchable = `${job.company} ${job.role} ${job.location} ${job.tags.join(' ')}`.toLowerCase(); const matchingExperience = experience === 'Any experience' || (experience === 'Early career' && /0–2|1–3|Student/.test(job.experience)) || (experience === '2+ years' && /2–4|2–5/.test(job.experience)); const isIndiaRole = job.location.includes('India'); return isIndiaRole && searchable.includes(query.toLowerCase()) && (type === 'All types' || job.type === type) && (company === 'All companies' || job.company === company) && matchingExperience }), [company, experience, query, type])
  const toggleSaved = (id) => setSavedIds((ids) => ids.includes(id) ? ids.filter((savedId) => savedId !== id) : [...ids, id]); const clearFilters = () => { setType('All types'); setCompany('All companies'); setExperience('Any experience') }; const activeFilterCount = [type !== 'All types', company !== 'All companies', experience !== 'Any experience'].filter(Boolean).length
  if (showRazorpayArticle) return <RazorpayArticle job={jobs[0]} onBack={() => setShowRazorpayArticle(false)} />
  return <main className="app-shell">
    <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Icon name="menu" size={21} /></button><a className="brand" href="#jobs" aria-label="OPTQVO home"><img src="/optqvo-logo.svg" alt="OPTQVO" /></a><a className="profile" href="#community" aria-label="Join the OPTQVO WhatsApp community">OQ</a></header>
    <section className="hero" id="jobs"><div className="live-pill"><Icon name="bolt" size={12} fill="currentColor" />FRESH JOB DROP <span>•</span> INDIA ONLY</div><h1>Find your next<br /><em>great role.</em></h1><p>Handpicked software jobs from teams hiring across India.</p></section>
    <section className="jobs-feed" aria-label="Job finder"><div className="search-row"><label className="search-box"><Icon name="search" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search role, company or skill" aria-label="Search jobs" /></label><button className={`filter-toggle ${activeFilterCount ? 'has-active' : ''}`} onClick={() => setShowFilters((open) => !open)} aria-expanded={showFilters} aria-controls="job-filters"><Icon name="tune" size={18} /><span>Filters</span>{activeFilterCount ? <b>{activeFilterCount}</b> : null}</button></div>{showFilters ? <div className="filter-panel" id="job-filters"><label>Role type<select value={type} onChange={(event) => setType(event.target.value)}><option>All types</option><option>Full-time</option><option>Internship</option></select></label><label>Company<select value={company} onChange={(event) => setCompany(event.target.value)}><option>All companies</option>{Array.from(new Set(jobs.map((job) => job.company))).map((name) => <option key={name}>{name}</option>)}</select></label><label>Experience<select value={experience} onChange={(event) => setExperience(event.target.value)}><option>Any experience</option><option>Early career</option><option>2+ years</option></select></label><button onClick={clearFilters}>Reset filters</button></div> : null}<div className="section-title"><div><p>INDIA SOFTWARE ROLES</p><h2>Latest opportunities</h2></div><span>{visibleJobs.length} jobs</span></div><div className="job-list">{visibleJobs.map((job) => <JobCard key={job.id} job={job} saved={savedIds.includes(job.id)} onSave={toggleSaved} onOpen={setSelectedJob} />)}</div>{visibleJobs.length === 0 ? <div className="empty-state"><strong>No roles found</strong><span>Try changing the company, experience or search term.</span><button onClick={() => { setQuery(''); clearFilters() }}>Clear search</button></div> : null}<p className="feed-note"><Icon name="check" size={13} />India-based roles only. More locations coming daily.</p></section>
    <section className="community" id="community"><span>OPTQVO COMMUNITY</span><h2>The right opportunity<br />should reach you first.</h2><p>Get job drops, business notes and tech news in our WhatsApp community.</p><a href={WHATSAPP_COMMUNITY_URL} target="_blank" rel="noreferrer">Join the community <Icon name="arrow" size={17} /></a></section>
    {selectedJob ? <JobDialog job={selectedJob} saved={savedIds.includes(selectedJob.id)} onClose={() => setSelectedJob(null)} onSave={toggleSaved} /> : null}
    {menuOpen ? <MenuDrawer onClose={() => setMenuOpen(false)} onReadRazorpay={() => setShowRazorpayArticle(true)} /> : null}
  </main>
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)

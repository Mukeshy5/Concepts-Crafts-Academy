const iconPaths = {
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.8 14.5a6 6 0 1 1 6.4 0c-.7.5-1.2 1.3-1.2 2.2h-4c0-.9-.5-1.7-1.2-2.2Z" />
      <path d="M12 2v2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.6 2.9 8.8 7 10 4.1-1.2 7-5.4 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 5" />
      <path d="M16 6h3a3 3 0 0 1-3 5" />
      <path d="M12 14v4" />
      <path d="M9 22h6" />
      <path d="M10 18h4" />
    </>
  ),
  star: (
    <>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </>
  ),
  seedling: (
    <>
      <path d="M12 21V10" />
      <path d="M12 10c-3.8 0-6-2.2-6-6 3.8 0 6 2.2 6 6Z" />
      <path d="M12 13c4 0 7-2.8 7-7-4 0-7 2.8-7 7Z" />
    </>
  ),
  worksheet: (
    <>
      <path d="M7 3h8l4 4v14H7V3Z" />
      <path d="M15 3v5h4" />
      <path d="M9 13h6" />
      <path d="M9 17h7" />
      <path d="M9 9h2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H7a3 3 0 0 0-3 3V5.5Z" />
      <path d="M4 19a3 3 0 0 1 3-3h13" />
      <path d="M8 7h7" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <path d="M20 12c0 2-3.6 3.6-8 3.6S4 14 4 12s3.6-3.6 8-3.6 8 1.6 8 3.6Z" />
      <path d="M16 19c-1.7 1-4.8-1.4-7-5.2S6.2 6.2 8 5.2c1.7-1 4.8 1.4 7 5.2s2.8 7.6 1 8.6Z" />
      <path d="M8 19c-1.7-1-.9-4.8 1.2-8.6s5.3-6.2 7-5.2c1.7 1 .9 4.8-1.2 8.6S9.8 20 8 19Z" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5.3 8.8A2.1 2.1 0 0 0 6.5 21h11a2.1 2.1 0 0 0 1.8-3.2L14 9V3" />
      <path d="M7.5 16h9" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h4a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="M9 19h3" />
    </>
  ),
  mentor: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M17 8h4v6h-3" />
    </>
  ),
  monitor: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M9 21h6" />
      <path d="M12 16v5" />
      <path d="m10 10 2 2 4-4" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M5 19 6.4 15A8 8 0 1 1 9 17.6L5 19Z" />
      <path d="M9.5 8.8c.3 2.4 2.1 4.2 4.5 4.8l1.2-1.2 2 1.1c-.3 1.1-1.1 1.8-2.2 2-3.6-.4-6.3-3.1-7-6.8.2-1 .9-1.7 2-2l1.1 2-1.6 1.1Z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  scan: (
    <>
      <path d="M5 7V5h2" />
      <path d="M17 5h2v2" />
      <path d="M19 17v2h-2" />
      <path d="M7 19H5v-2" />
      <path d="M8 8h3v3H8z" />
      <path d="M13 8h3" />
      <path d="M13 11h1" />
      <path d="M8 13h1" />
      <path d="M11 13h5v3h-5z" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  youtube: (
    <>
      <path d="M22 12s0-3-1-4c-.6-.7-1.3-.8-2-.8C16.2 7 12 7 12 7s-4.2 0-7 .2c-.7 0-1.4.1-2 .8-1 1-1 4-1 4s0 3 1 4c.6.7 1.3.8 2 .8 2.8.2 7 .2 7 .2s4.2 0 7-.2c.7 0 1.4-.1 2-.8 1-1 1-4 1-4Z" />
      <path d="m10 9.8 5 2.2-5 2.2V9.8Z" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6 9h4v12H6z" />
      <path d="M14 9h4v2a4 4 0 0 1 4 4v6h-4v-6a2 2 0 0 0-4 0v6h-4V9Z" />
      <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </>
  ),
}

const Icon = ({ name, className = '', size = 24 }) => {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name] || iconPaths.lightbulb}
    </svg>
  )
}

export default Icon

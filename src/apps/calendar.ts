export default function render() {
  const div = document.createElement('div')

  div.innerHTML = `
    <iframe
      src="https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=YWRpdHlhLjE5OTh0aGFrcmFsQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=aTZtbTBvMG9iYTRpNDE3aWwxYmlla3JqcTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cGZsM2ZiNG9wdm1qdWJkbXZmYWNibjg3ZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=NTZsYjQxcTZrZG84bjRhbGkxMnJiMGI3amhqNjh2cTBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZmFtaWx5MDU1NDU5MTgyOTgwNjQwMDI1OTlAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%234285F4&amp;color=%23F6BF26&amp;color=%23009688&amp;color=%239E69AF&amp;color=%23E67C73&amp;color=%23F6BF26&amp;color=%23009688&amp;mode=WEEK"
      style="width: 100%; height: 33vh;"
      frameborder="0"
      scrolling="no"
    >
    </iframe>
  `
  return div
}

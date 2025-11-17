import { useEffect } from 'react'

function SEO({ title, description, url, image, keywords }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return
      let tag = document.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', 'website', 'property')
    if (image) setMeta('og:image', image, 'property')
  }, [title, description, url, image, keywords])

  return null
}

export default SEO

import HeroSection from '@/components/hero-section'
import PostSection from '@/components/post-section'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <>
      <HeroSection />

      <PostSection posts={posts} />

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

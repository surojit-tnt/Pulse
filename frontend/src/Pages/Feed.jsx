import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: '1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBvXvo9zsJGCXjhf9S7fouD0KvofjH1i_2uZxK1eT5g&s',
      caption: 'Welcome to Pulse ✨'
    }
  ])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((res) => {
        setPosts(res.data.post || [])
      })
      .catch((error) => {
        console.error('Failed to fetch posts:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Pulse<span className="text-violet-400">.</span>
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Discover what everyone is sharing.
            </p>
          </div>
          <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-300">
            Your Feed
          </span>
        </header>

        {loading ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
            Loading posts...
          </div>
        ) : posts.length > 0 ? (
          <section className="space-y-7">
            {posts.map((post) => (
              <article
                key={post._id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-black/20 transition duration-300 hover:border-violet-500/40"
              >
                <div className="flex items-center gap-3 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-lg font-bold">
                    P
                  </div>
                  <div>
                    <h2 className="font-semibold">Pulse Community</h2>
                    <p className="text-xs text-slate-400">Shared with everyone</p>
                  </div>
                </div>

                <img
                  src={post.image}
                  alt={post.caption || 'Community post'}
                  loading="lazy"
                  className="block max-h-[650px] w-full bg-slate-800 object-contain"
                />

                <div className="p-5">
                  <p className="break-words text-sm leading-7 text-slate-200">
                    {post.caption || 'No caption added.'}
                  </p>
                  <div className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-500">
                    Posted on Pulse
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-16 text-center">
            <div className="mb-3 text-4xl">📷</div>
            <h2 className="text-xl font-semibold">No posts yet</h2>
            <p className="mt-2 text-sm text-slate-400">
              Be the first to share something with the community.
            </p>
          </div>
        )}

        <footer className="py-8 text-center text-xs text-slate-600">
          Made for your moments · Pulse
        </footer>
      </div>
    </main>
  )
}

export default Feed
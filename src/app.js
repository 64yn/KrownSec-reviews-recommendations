import { useState, useEffect } from 'react';
import { createClient } from '@supabase/Bolt Database-js';
import { ArrowLeft, Send, BookOpen, Star, MessageSquarePlus, Sparkles } from 'lucide-react';

const Bolt Database = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type Page = 'intro' | 'home' | 'recommendations' | 'reviews' | 'reviews-list';

interface FalconMessageProps {
  message: string;
  onYes: () => void;
  onNo: () => void;
}

function FalconMessage({ message, onYes, onNo }: FalconMessageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      <div
        className={`relative transition-all duration-500 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-red-500/50 shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(239,68,68,0.3), 0 0 100px rgba(239,68,68,0.1), inset 0 0 30px rgba(239,68,68,0.1)'
          }}
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center animate-pulse"
              style={{ boxShadow: '0 0 30px rgba(239,68,68,0.6)' }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <p className="text-white text-xl font-bold tracking-wide">{message}</p>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onYes}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ boxShadow: '0 0 20px rgba(239,68,68,0.5)' }}
            >
              Yes
            </button>
            <button
              onClick={onNo}
              className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ boxShadow: '0 0 15px rgba(156,163,175,0.3)' }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroPage({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setPhase(2), 1500);
    const timer3 = setTimeout(() => setPhase(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <div
          className={`transition-all duration-700 ease-out ${
            phase >= 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'
          }`}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1519672881552822402/1520946800679321690/file_00000000b5cc71f7869e96106b1fe67d.png?ex=6a430b97&is=6a41ba17&hm=f7e5709fba58bca12dfa29ed264b249571dedf734da4b9a27d181a3559290807&"
            alt="KrownSec Logo"
            className="w-64 h-64 mx-auto mb-8"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(239,68,68,0.6)) drop-shadow(0 0 80px rgba(239,68,68,0.3))',
            }}
          />
        </div>
        <div
          className={`transition-all duration-700 ease-out ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 30px rgba(239,68,68,0.8), 0 0 60px rgba(239,68,68,0.4)'
            }}
          >
            <span className="text-gray-600">//</span>
            <span className="text-gray-300 mx-1">♕</span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              𝐊𝐫𝐨𝐰𝐧𝐒𝐞𝐜
            </span>
          </h1>
        </div>
        <div
          className={`transition-all duration-700 ease-out ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="text-2xl md:text-3xl font-bold tracking-widest text-red-400"
            style={{ textShadow: '0 0 20px rgba(239,68,68,0.6)' }}
          >
            reviews/recommendations
          </p>
        </div>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <img
          src="https://cdn.discordapp.com/attachments/1519672881552822402/1520946800679321690/file_00000000b5cc71f7869e96106b1fe67d.png?ex=6a430b97&is=6a41ba17&hm=f7e5709fba58bca12dfa29ed264b249571dedf734da4b9a27d181a3559290807&"
          alt="KrownSec Logo"
          className="w-48 h-48 mb-6 animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(239,68,68,0.7)) drop-shadow(0 0 60px rgba(239,68,68,0.4))'
          }}
        />
        <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-2"
          style={{
            fontFamily: 'Georgia, serif',
            textShadow: '0 0 30px rgba(239,68,68,0.8), 0 0 60px rgba(239,68,68,0.4)'
          }}
        >
          <span className="text-gray-600">//</span>
          <span className="text-gray-300 mx-1">♕</span>
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            𝐊𝐫𝐨𝐰𝐧𝐒𝐞𝐜
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl font-bold tracking-widest text-red-400 mb-14"
          style={{ textShadow: '0 0 20px rgba(239,68,68,0.6)' }}
        >
          reviews/recommendations
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <button
            onClick={() => onNavigate('recommendations')}
            className="group relative px-14 py-7 bg-gradient-to-br from-gray-900 to-black text-white text-xl font-bold rounded-2xl border border-red-500/30 transition-all duration-500 hover:scale-110 overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(239,68,68,0.3), inset 0 0 20px rgba(239,68,68,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent animate-pulse" />
            <div className="relative flex items-center gap-3">
              <MessageSquarePlus className="w-7 h-7 text-red-400" />
              <span>Recommendations</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('reviews')}
            className="group relative px-14 py-7 bg-gradient-to-br from-gray-900 to-black text-white text-xl font-bold rounded-2xl border border-red-500/30 transition-all duration-500 hover:scale-110 overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(239,68,68,0.3), inset 0 0 20px rgba(239,68,68,0.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent animate-pulse" />
            <div className="relative flex items-center gap-3">
              <Star className="w-7 h-7 text-red-400" />
              <span>Reviews</span>
            </div>
          </button>
        </div>

        <button
          onClick={() => onNavigate('reviews-list')}
          className="mt-12 flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all duration-300 text-lg font-semibold group"
        >
          <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span style={{ textShadow: '0 0 15px rgba(239,68,68,0)' }}
            className="hover:[text-shadow:0_0_15px_rgba(239,68,68,0.6)] transition-all"
          >
            Read what others have said
          </span>
        </button>
      </div>
    </div>
  );
}

function RecommendationsPage({ onNavigate, onPost }: { onNavigate: (page: Page) => void; onPost: () => void }) {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    setSubmitting(true);

    try {
      await fetch('WEB_HOOK_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content.trim(), type: 'recommendation' }),
      });
      onPost();
    } catch {
      alert('Failed to submit. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div
          className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-red-500/30"
          style={{
            boxShadow: '0 0 50px rgba(239,68,68,0.2), inset 0 0 30px rgba(239,68,68,0.05)'
          }}
        >
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 mb-6 px-2 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3"
            style={{ textShadow: '0 0 20px rgba(239,68,68,0.4)' }}
          >
            <MessageSquarePlus className="w-9 h-9 text-red-400" />
            Make a Recommendation
          </h2>

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="What would you like us to add?"
            className="w-full h-40 bg-gray-900/80 text-white text-lg rounded-2xl p-5 border border-red-500/30 focus:border-red-500 focus:outline-none resize-none placeholder:text-gray-600 transition-all duration-300"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 0 15px rgba(239,68,68,0)'
            }}
          />

          <button
            onClick={handleSubmit}
            disabled={submitting || !content.trim()}
            className="mt-6 w-full py-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-xl rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              boxShadow: submitting || !content.trim() ? 'none' : '0 0 30px rgba(239,68,68,0.5)'
            }}
          >
            <Send className="w-6 h-6" />
            {submitting ? 'Sending...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewsPage({ onNavigate, onPost }: { onNavigate: (page: Page) => void; onPost: () => void }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    setSubmitting(true);

    try {
      await supabase.from('reviews').insert({
        name: name.trim() || null,
        content: content.trim(),
      });

      await fetch('WEB_HOOK_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() || 'Anonymous', content: content.trim(), type: 'review' }),
      });

      onPost();
    } catch {
      alert('Failed to submit. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div
          className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-lg w-full border border-red-500/30"
          style={{
            boxShadow: '0 0 50px rgba(239,68,68,0.2), inset 0 0 30px rgba(239,68,68,0.05)'
          }}
        >
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 mb-6 px-2 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3"
            style={{ textShadow: '0 0 20px rgba(239,68,68,0.4)' }}
          >
            <Star className="w-9 h-9 text-red-400" />
            Leave a Review
          </h2>

          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full bg-gray-900/80 text-white text-lg rounded-2xl p-4 border border-red-500/30 focus:border-red-500 focus:outline-none mb-4 placeholder:text-gray-600 transition-all duration-300"
            style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}
          />

          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="How do you feel about the bot?"
            className="w-full h-40 bg-gray-900/80 text-white text-lg rounded-2xl p-5 border border-red-500/30 focus:border-red-500 focus:outline-none resize-none placeholder:text-gray-600 transition-all duration-300"
            style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}
          />

          <button
            onClick={handleSubmit}
            disabled={submitting || !content.trim()}
            className="mt-6 w-full py-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-xl rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
            style={{
              boxShadow: submitting || !content.trim() ? 'none' : '0 0 30px rgba(239,68,68,0.5)'
            }}
          >
            <Send className="w-6 h-6" />
            {submitting ? 'Sending...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ReviewsListPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [reviews, setReviews] = useState<{ id: string; name: string | null; content: string; created_at: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await Bolt Database
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      setReviews(data || []);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1)_0%,transparent_60%)]" />

      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-300 mb-6 bg-gray-900/50 px-5 py-3 rounded-xl backdrop-blur-sm border border-red-500/20 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-red-500/30 mb-6"
            style={{
              boxShadow: '0 0 40px rgba(239,68,68,0.15), inset 0 0 30px rgba(239,68,68,0.03)'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3"
              style={{ textShadow: '0 0 20px rgba(239,68,68,0.4)' }}
            >
              <BookOpen className="w-10 h-10 text-red-400" />
              What Others Have Said
            </h2>
          </div>

          {loading ? (
            <div className="text-white text-center py-12 text-xl bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-red-500/20">
              <div className="animate-pulse">Loading reviews...</div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-10 text-center backdrop-blur-sm border border-red-500/20">
              <p className="text-gray-400 text-xl">No reviews yet. Be the first to leave one!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <div
                  key={review.id}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border-l-4 border-red-500 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] group"
                  style={{
                    boxShadow: '0 0 30px rgba(239,68,68,0.1)',
                    animationDelay: `${idx * 100}ms`
                  }}
                >
                  <p className="text-white text-lg mb-4 leading-relaxed">{review.content}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span
                      className="font-bold text-red-400 text-base"
                      style={{ textShadow: '0 0 10px rgba(239,68,68,0.5)' }}
                    >
                      - {review.name || 'Anonymous'}
                    </span>
                    <span className="text-gray-600">{new Date(review.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState<Page>('intro');
  const [showFalconMessage, setShowFalconMessage] = useState(false);
  const [falconMessage, setFalconMessage] = useState('');
  const [lastAction, setLastAction] = useState<'recommendation' | 'review' | null>(null);

  const handleRecommendationPost = () => {
    setLastAction('recommendation');
    setFalconMessage('Would you like to leave a review also?');
    setShowFalconMessage(true);
  };

  const handleReviewPost = () => {
    setLastAction('review');
    setFalconMessage('Wanna leave a recommendation?');
    setShowFalconMessage(true);
  };

  const handleFalconYes = () => {
    setShowFalconMessage(false);
    if (lastAction === 'recommendation') {
      setPage('reviews');
    } else {
      setPage('recommendations');
    }
  };

  const handleFalconNo = () => {
    setShowFalconMessage(false);
    setPage('home');
  };

  return (
    <>
      {page === 'intro' && <IntroPage onComplete={() => setPage('home')} />}
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'recommendations' && (
        <RecommendationsPage onNavigate={setPage} onPost={handleRecommendationPost} />
      )}
      {page === 'reviews' && <ReviewsPage onNavigate={setPage} onPost={handleReviewPost} />}
      {page === 'reviews-list' && <ReviewsListPage onNavigate={setPage} />}

      {showFalconMessage && (
        <FalconMessage message={falconMessage} onYes={handleFalconYes} onNo={handleFalconNo} />
      )}
    </>
  );
}

export default App;


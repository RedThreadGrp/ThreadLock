import React, { useState } from 'react';

/* ---------------- Text Brand ---------------- */
function BrandWordmark({ className = "" }) {
    return (
        <span className={`inline-flex items-baseline font-bold text-2xl tracking-tight select-none ${className}`}>
            <span className="text-slate-800">Thread</span>
            <span className="text-orange-600">Lock</span>
            <span className="ml-0.5 align-text-top text-[0.5em] font-black text-slate-500">™</span>
        </span>
    );
}

const Header = () => (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
            <a href="/"><BrandWordmark /></a>
            <a href="/" className="font-semibold text-slate-700 hover:text-orange-600 transition-colors">
                &larr; Back to Home
            </a>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 text-sm py-8 text-center">
        <p>© {new Date().getFullYear()} ThreadLock.ai. All rights reserved.</p>
    </footer>
);


export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                setStatus('success');
                setMessage('Thank you for joining the waitlist!');
                setName('');
                setEmail('');
            } else {
                 const errorData = await response.json();
                setStatus('error');
                setMessage(errorData.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('An unexpected error occurred. Please check your connection.');
        }
    };


    return (
        <>
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center">
                    <div className="container mx-auto px-6 py-12 text-center max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Be the First to Know</h1>
                        <p className="text-lg text-slate-600 mb-8">
                            Join our waitlist for early access to the ThreadLock app, plus exclusive updates and resources. We're excited to have you with us.
                        </p>
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                             <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-2xl shadow-md border border-slate-200">
                                 <input
                                     type="text"
                                     name="name"
                                     placeholder="Your Name"
                                     value={name}
                                     onChange={(e) => setName(e.target.value)}
                                     required
                                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                 />
                                 <input
                                     type="email"
                                     name="email"
                                     placeholder="Your Email Address"
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                     required
                                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                 />
                                 <button 
                                    type="submit" 
                                    disabled={status === 'submitting'}
                                    className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all sm:w-auto w-full disabled:bg-slate-400 disabled:cursor-not-allowed"
                                >
                                     {status === 'submitting' ? 'Joining...' : 'Join'}
                                 </button>
                             </div>
                        </form>
                        {message && (
                            <div className={`mt-4 text-sm font-semibold ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}


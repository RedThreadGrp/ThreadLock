import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "ThreadLock has transformed how I handle initial client consultations. Instead of spending hours sorting through disorganized documents, I receive well-structured case files that let me provide better advice in less time.",
    name: "Sarah Chen, Esq.",
    title: "Family Law Attorney",
    location: "Seattle, WA"
  },
  {
    quote: "The conflict check feature alone makes ThreadLock worth it. I can review cases anonymously before committing, which protects both my practice and the client's privacy. It's exactly what solo practitioners need.",
    name: "Marcus Williams",
    title: "Civil Rights Lawyer",
    location: "Atlanta, GA"
  },
  {
    quote: "As someone who takes on pro bono cases, ThreadLock's pre-organized files are a game-changer. Clients come prepared with timelines, evidence, and documentation that would normally take weeks to compile.",
    name: "Dr. Priya Patel, J.D.",
    title: "Immigration Attorney",
    location: "Austin, TX"
  },
  {
    quote: "The annotation tools save me hours every week. I can review documents, leave feedback, and return them to clients without ever leaving the platform. My billable hours have increased 20% since switching to ThreadLock Pro.",
    name: "James Rodriguez",
    title: "Employment Law Specialist",
    location: "Miami, FL"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          What Legal Professionals Are Saying
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
            <div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                className="w-12 h-12 text-orange-200 mb-6"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            
            <div>
              <p className="font-bold text-slate-900 text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-slate-600">
                {testimonials[currentIndex].title}
              </p>
              <p className="text-sm text-slate-500">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-all"
            aria-label="Previous testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-slate-700"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-all"
            aria-label="Next testimonial"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-slate-700"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-orange-600 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

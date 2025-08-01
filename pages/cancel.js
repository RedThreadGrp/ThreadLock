export default function Cancel() {
  return (
    <div className="text-center py-24">
      <h1 className="text-3xl font-bold text-red-600">❌ Payment Canceled</h1>
      <p className="mt-4">Your payment was not processed.</p>
      <a href="/" className="inline-block mt-6 px-6 py-3 bg-orange text-white rounded">Try Again</a>
    </div>
  );
}

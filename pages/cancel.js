import Head from 'next/head'

export default function Cancel() {
  return (
    <main className="text-center py-24">
      <Head>
        <title>Payment Canceled – ThreadLock</title>
      </Head>
      <h1 className="text-3xl font-bold text-red-600">❌ Payment Canceled</h1>
      <p className="mt-4">
        Your payment was not processed. No charges were made.
      </p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded"
      >
        Try Again
      </a>
    </main>
  )
}

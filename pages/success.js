import Head from 'next/head'

export default function Success() {
  return (
    <main className="text-center py-24">
      <Head>
        <title>Payment Successful | ThreadLock™</title>
      </Head>
      <h1 className="text-3xl font-bold text-green-600">🎉 Payment Successful</h1>
      <p className="mt-4">Your ThreadLock early-access account is being set up.</p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded"
      >
        Return Home
      </a>
    </main>
  )
}

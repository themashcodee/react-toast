import type { NextPage } from 'next'
import Head from 'next/head'
import { Toast, useToaster } from 'components/toaster'
import { FormEvent, useState } from 'react'

const Home: NextPage = () => {
  const { toast } = useToaster()
  const [message, setMessage] = useState('')
  const [toastType, setToastType] = useState<Toast['type']>('success')


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    toast({ message, type: toastType })
    setMessage('')
    setToastType('success')
  }

  function generateErrorToast() {
    toast({ message: 'This is an error message', type: 'error' })
  }
  function generateSuccessToast() {
    toast({ message: 'This is a success message', type: 'success' })
  }
  function generateWarningToast() {
    toast({ message: 'This is an warning message', type: 'warning' })
  }

  return (
    <div>
      <Head>
        <title>Toaster Component</title>
        <meta name="description" content="React Toaster Component" />
        <link rel="icon" href="/toaster.png" />
      </Head>

      <main className='p-12 flex flex-col gap-12 min-h-screen justify-center bg-gray-100 items-center'>
        <h1 className='text-5xl max-w-sm text-center flex flex-col items-center gap-3'>
          <span>React Toast</span>
          <span className='text-lg uppercase font-semibold'>Component</span>
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-sm w-full'>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            className='p-4 rounded-md bg-gray-200'
            required
          />

          <select
            className='p-4 bg-gray-200 rounded-md'
            value={toastType}
            onChange={(e) => setToastType(e.target.value as Toast['type'])}
          >
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
          </select>

          <button
            type='submit'
            className='px-6 py-2 bg-blue-600 rounded-md text-white'
          >
            Make a Toast
          </button>
        </form>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <button
            onClick={generateSuccessToast}
            className='bg-green-500 text-white px-4 py-1 rounded-md'
          >
            Success
          </button>
          <button
            onClick={generateWarningToast}
            className='bg-yellow-500 text-white px-4 py-1 rounded-md'
          >
            Warning
          </button>
          <button
            onClick={generateErrorToast}
            className='bg-red-500 text-white px-4 py-1 rounded-md'
          >
            Error
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home

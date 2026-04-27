import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: replace with real API call
      // await api.post('/login', formData)

      await new Promise(resolve => setTimeout(resolve, 1500)) // demo delay

      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Gulayan</h1>
          <p className="text-green-600">Magtanim ay di biro.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="you@example.com"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="••••••••"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold 
              text-white transition duration-200 shadow-md
              ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {loading && (
                <svg
                  className="w-5 h-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                    className="opacity-25"
                  />
                  <path
                    d="M4 12a8 8 0 018-8"
                    strokeWidth="4"
                  />
                </svg>
              )}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => {
                if (loading) return
                navigate('/signup')
              }}
              disabled={loading}
              className={`font-semibold ${
                loading
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-green-600 hover:text-green-700'
              }`}
            >
              Sign up for free
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
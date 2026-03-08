// components/PricingCard.jsx
'use client'

import { useRouter } from 'next/navigation'
import { CustomLink } from '@components/link'

export function PricingCard() {
  const router = useRouter()

  return (
    <div 
      onMouseEnter={() => router.prefetch('/pricing')}
      className="bg-white border border-gray-200 rounded-2xl p-8 max-w-sm text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Pro Plan</h3>
      <p className="text-gray-500 mb-6">Get access to all premium features.</p>
      
      <div className="bg-blue-50 py-3 px-6 rounded-lg inline-block">
        {/* Your custom link from Step 2 */}
        <CustomLink href="/pricing">View Pricing</CustomLink>
      </div>
    </div>
  )
}
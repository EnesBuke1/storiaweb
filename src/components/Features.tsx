import React from 'react';
import { PenTool, Share2, Compass, Users, Smartphone, Crown } from 'lucide-react';

const features = [
  {
    name: 'Intuitive Editor',
    description: 'Write with confidence using our powerful editor with real-time formatting and AI assistance.',
    icon: PenTool,
  },
  {
    name: 'Share Your Stories',
    description: 'Publish your work and connect with readers worldwide through our global storytelling community.',
    icon: Share2,
  },
  {
    name: 'Discover Stories',
    description: 'Find your next favorite story with personalized recommendations and curated collections.',
    icon: Compass,
  },
  {
    name: 'Vibrant Community',
    description: 'Join writing challenges, participate in discussions, and grow with fellow storytellers.',
    icon: Users,
  },
  {
    name: 'Mobile Ready',
    description: 'Write and read on any device with our fully responsive platform and mobile app.',
    icon: Smartphone,
  },
  {
    name: 'Premium Features',
    description: 'Unlock advanced writing tools and monetization options with our premium subscription.',
    icon: Crown,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to tell your story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Powerful tools and features designed to bring your stories to life and connect with readers worldwide.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute -top-4 left-4">
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
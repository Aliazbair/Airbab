import React from 'react'

export default function Footer() {
    return (
      <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className='font-bold'>About</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className='font-bold'>Host</h5>
          <p>Papa react</p>
          <p>Presents</p>
          <p>Zero to full stack hero</p>
          <p>Hundreds of students</p>
          <p>Join now</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
          <h5 className='font-bold'>Community</h5>
          <p>This is not a real site</p>
          <p>Its a pretty awesome clone</p>
          <p>Rererrals accepted</p>

        </div>
        <div className='space-y-4 text-gray-800 text-xs'>
          <h5 className="font-bold">Support</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>Say Hi Youtube</p>
          <p>Easter Eggs</p>
          <p>For the Win</p>

        </div>
        <div></div>
      </footer>
    );
}

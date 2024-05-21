import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Events() {
    const settings = {
        dots: true,
        infinite: false, // Change to false to disable looping
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto py-8">
      <Slider {...settings}>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">July</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 1.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">August</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 2.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">September</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 3.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">October</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 4.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">November</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 5.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">December</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 6.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">January</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 7.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">February</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 8.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">March</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 9.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">April</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 10.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">May</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 11.</p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-blue-900 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-amber-500 text-left">June</h2>
            <p className="text-white text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a description of card 12.</p>
          </div>
        </div>
      </Slider>
      
    </div>
    )
}

export default Events

import React, { useState, useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HamburgerElastic } from 'react-animated-burgers'
import Logo from '../images/logo.svg';

// TODO: Cosmetics add animation to dropdown menu

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const data = useStaticQuery(graphql`
    query HeaderData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }); 

  const handleScroll = (e) => {
    if (typeof window !== `undefined`) {
      const scrollTop = window.pageYOffset;

      if (scrollTop >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  }

  return (
    <nav className={`${ 
      scrolled || expanded ? `bg-white shadow-md` : `bg-transparent` } 
      fixed w-full transition-all origin-top transform ease-in-out duration-150
    `} >
      <div className="flex flex-wrap items-center justify-between md:py-6 py-4 md:px-20 px-4">
        <Link to="/" className="flex items-center no-underline">
          <img
            className="fill-current h-12 w-12 mr-2"
            src={Logo}
            alt="Logo"
          />
          <span className="hidden md:block text-3xl tracking-tight font-display text-orange text-stroke-2">
            {data.site.siteMetadata.title}
          </span>
        </Link> 

        <button
          className="block md:hidden flex items-center px-3 py-2 rounded "
          onClick={() => setExpanded(!expanded)}
        >
          <HamburgerElastic barColor="#003366" buttonWidth={30} isActive={expanded} />
        </button>

        <div
          className={`${
            expanded ? `block` : `hidden skew-y-12`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-lg text-midnight-blue font-semibold">
            <a
              href="https://docs.zesty.market"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
            >
              Documentation
            </a>

            <a
              href="https://discord.gg/K2e5ArjfjU"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
            >
              Discord
            </a>

            <a
              href="https://twitter.com/zestymarket"
              className="block md:inline-block mt-4 md:mt-0 no-underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
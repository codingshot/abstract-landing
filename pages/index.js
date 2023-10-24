import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'


const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Abstraction Hacks</title>
          <meta
            name="description"
            content="Abstraction Hacks (Jan 8 -28) is the 3 week online hackathon, test the limits of account abstraction on NEAR Protocol."
          />
          <meta property="og:title" content="Abstraction Hacks" />
          <meta
            property="og:description"
            content="Abstraction Hacks, is the 3 week online hackathon, test the limits of account abstraction on NEAR Protocol."
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">📦 abstracting</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <a
                href="/register"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button-clean button"
              >
                Register
              </a>
              <a
                href="/partner"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 button-clean button"
              >
                Partner
              </a>
              <a
                href="/manual"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link02 button-clean button"
              >
                Manual
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials">
              <button className="social button">
                <a href="/telegram" target="_blank" rel="noreferrer noopener">
                  <img
                    alt="image"
                    src="/iconmonstr-telegram-1%201.svg"
                    className="home-image"
                  />
                </a>
              </button>
            </div>
            <a
              href="/register"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view button"
            >
              Register
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <span className="home-logo1">📦  abstracting</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <a
                  href="/register"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  Register
                </a>
                <a
                  href="/partner"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  Partner
                </a>
                <a
                  href="/manual"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  Manual
                </a>
              </nav>
              <div className="home-container2">
                <a
                  href="/register"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-register button"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">
              <span>
                📦 Abstraction
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Hacks 📦 📦</span>
            </h1>
            <p className="home-caption">
              3 week hackathon (Jan 8 - 28th) testing the limits of
              account abstraction on NEAR Protocol. Win $10,000 in prizes
            </p>
          </div>
          <div className="home-buttons">
            { false && <button className="button">Register</button>}
            <a
  href="https://lu.ma/event/evt-0B6b1x2nyLLfZzv"
  className="button"
  data-luma-action="checkout"
  data-luma-event-id="evt-0B6b1x2nyLLfZzv"
>
  Register
</a>
<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script>
            <a
              href="/manual"
              target="_blank"
              rel="noreferrer noopener"
              className="home-learn button-clean button"
            >
              Learn more
            </a>
          </div>
        </section>
        <section className="home-roadmap">
          <div className="home-heading1">
            <h2 className="home-header01">🗓️ Schedule</h2>
            <p className="home-header02">Jam packed next couple of months.</p>
          </div>
          <div className="home-list">
            <div className="home-step">
              <span className="home-caption1">November - December</span>
              <div className="home-heading2">
                <h2 className="home-header03">Education + Workshops + NEARCON</h2>
                <p className="home-header04">Weeks of exciting workshops on Metatransactions, Keypom, Remote Accounts, BOS + more. AA track for hackers at NEARCON. Also check out existing hackathons like Encode Club, and local Hackbox Cohort. </p>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-caption2">January 8th - January 28th</span>
              <div className="home-heading3">
                <h2 className="home-header05">Hackathon</h2>
                <p className="home-header06">
                  <span>Prizes announced, Team formation. Office hours, and the hackathon begins! </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-caption3">January 28 -February 3</span>
              <div className="home-heading4">
                <h2 className="home-header07">Judging + Prizes</h2>
                <p className="home-header08">
                  <span>
                    3 days of judging and prizes will be dished out. 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-collection">
          <div className="home-content">
            <span className="home-caption4">who&apos;s abstracting</span>
            <div className="home-heading5">
              <h2 className="home-header09">Couldn&apos;t do it without ❤️</h2>
              <p className="home-header10">
                Abstraction Hacks is an experience where all the hard work
                making this happen has been abstracted from you by organizers,
                community partners, mentors, and sponsors. 
              </p>
            </div>
          </div>
          <div className="home-main">
            <a
              href="https://neardevhub.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card">
                <div className="home-image01">
                  <img
                    alt="NEAR DevHub"
                    src="https://pbs.twimg.com/profile_images/1655986271637082112/bH4MRqq9_400x400.jpg"
                    className="home-image02"
                  />
                </div>
                <div className="home-content01">
                  <h3 className="home-title">
                    <span>NEARDevHub</span>
                    <br></br>
                  </h3>
                </div>
              </div>
            </a>
            <a
              href="https://banyan.gg"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card01">
                <div className="home-image03">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/1594723683062484993/d8aDzWMN_400x400.jpg"
                    className="home-image04"
                  />
                </div>
                <div className="home-content02">
                  <h3 className="home-title01">Banyan Collective</h3>
                </div>
              </div>
            </a>
            <a
              href="https://onboarddao.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card01">
                <div className="home-image03">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/1645034489477832704/gEH70pNj_400x400.jpg"
                    className="home-image04"
                  />
                </div>
                <div className="home-content02">
                  <h3 className="home-title01">Onboard DAO</h3>
                </div>
              </div>
            </a>
           {false && <a
              href="https://shard.dog/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card02">
                <div className="home-image05">
                  <img
                    alt="Sharddog Logo"
                    src="https://pbs.twimg.com/profile_images/1690360295586156544/W38Ze734_400x400.jpg"
                    className="home-image06"
                  />
                </div>
                <div className="home-content03">
                  <h3 className="home-title02">ShardDog</h3>
                </div>
              </div>
            </a>
}
            <a
              href="https://nearbuilders.com/tg-builders"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card03">
                <div className="home-image07">
                  <img
                    alt="BuildDAO"
                    src="https://pbs.twimg.com/profile_images/1690850854457204736/KUXVTpZt_400x400.png"
                    className="home-image08"
                  />
                </div>
                <div className="home-content04">
                  <h3 className="home-title03">Build DAO</h3>
                </div>
              </div>
            </a>
            { false &&
            <a
              href="https://pagoda.co"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card04">
                <div className="home-image09">
                  <img
                    alt="Pagoda NEAR Logo"
                    src="https://pbs.twimg.com/profile_images/1678452492739424257/kIn26g06_400x400.jpg"
                    className="home-image10"
                  />
                </div>
                <div className="home-content05">
                  <h3 className="home-title04">Pagoda</h3>
                </div>
              </div>
            </a>
}
{ true &&
            <a
              href="https://keypom.xyz/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card05">
                <div className="home-image11">
                  <img
                    alt="keypom logo"
                    src="https://pbs.twimg.com/profile_images/1642484463543406593/74Vy_Iyw_400x400.jpg"
                    className="home-image12"
                  />
                </div>
                <div className="home-content06">
                  <h3 className="home-title05">Keypom</h3>
                </div>
              </div>
            </a>
}
            <a
              href="https://linktr.ee/alejandrovb"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card06">
                <div className="home-image13">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/1432142505445769221/4GnTJZdf_400x400.jpg"
                    className="home-image14"
                  />
                </div>
                <div className="home-content07">
                  <h3 className="home-title06">Wild User Interviews</h3>
                </div>
              </div>
            </a>
            <a
              href="https://linktr.ee/nearvietnamhub"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card07">
                <div className="home-image15">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/1670652951239753728/DPpNd5Pi_400x400.jpg"
                    className="home-image16"
                  />
                </div>
                <div className="home-content08">
                  <h3 className="home-title07">NEAR Vietnam</h3>
                </div>
              </div>
            </a>
            <a
              href="https://herewallet.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card07">
                <div className="home-image15">
                  <img
                    alt="image"
                    src="https://pbs.twimg.com/profile_images/1545154799699640321/4GoTucoZ_400x400.jpg"
                    className="home-image16"
                  />
                </div>
                <div className="home-content08">
                  <h3 className="home-title07">HERE Wallet</h3>
                </div>
              </div>
            </a>
            {false &&
            <a
              href="https://mintbase.xyz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card08">
                <div className="home-image17">
                  <img
                    alt="mintbase logo"
                    src="https://pbs.twimg.com/profile_images/1516383928998936585/8ze2FqDf_400x400.png"
                    className="home-image18"
                  />
                </div>
                <div className="home-content09">
                  <h3 className="home-title08">Mintbase</h3>
                </div>
              </div>
            </a>
}
            <a
              href="https://meteorwallet.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="home-card09">
                <div className="home-image19">
                  <img
                    alt="Meteor Wallet"
                    src="https://pbs.twimg.com/profile_images/1698691580469661696/FDV8Sl2c_400x400.png"
                    className="home-image20"
                  />
                </div>
                <div className="home-content10">
                  <h3 className="home-title09">
                    <span>Meteor Wallet</span>
                    <br></br>
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="home-faq">
          <h2 className="home-header11">FAQ?</h2>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="home-element accordion"
            >
              <div className="home-content11">
                <span className="home-header12">
                  Is this hackathon digital or IRL?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description"
                >
                  Anyone can submit but will be coordinating IRL activations.
                  Additionally anyone can join, they just need to submit before
                  hackathon deadline.
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon04"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon06"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content12">
                <span className="home-header13">
                  Is this a NEAR based hackathon.
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description1"
                >
                 Yes, however, there is a BOS track for building decentralized front ends related to account abstraction. Additionally using remote accounts or even leveraging NEAR&apos;s account model, one can build a solution that leverages multichain.
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon08"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon10"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content13">
                <span className="home-header14">
                  Where can I find more resources?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description2"
                >
                  <span>Check out our hacker guide at  </span>
                  <a
                    href="https://abstracting/manual"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link17"
                  >
                    abstracting.org/manual
                  </a>
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon12"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon14"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content14">
                <span className="home-header15">
                  Where can I find the hackathon rules?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description3"
                >
                  <span>Check out  </span>
                  <a
                    href="https://abstracting.org/rules"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link18"
                  >
                    abstracting.org/rules 
                  </a>
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon16"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon18"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main1">
            <div className="home-branding">
              <div className="home-heading6">
                <h2 className="home-logo2">📦 abstracting</h2>
                <p className="home-caption5">
                  3 week hackathon (Nov 27 - December 17) testing the limits of
                  account abstraction on NEAR Protocol. Win $10,000 in prizes
                </p>
              </div>
              <div className="home-socials1">
                <a
                  href="/telegram"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-telegram social button"
                >
                  <img
                    alt="image"
                    src="/iconmonstr-telegram-1%201.svg"
                    className="home-image21"
                  />
                </a>
              </div>
            </div>
            <div className="home-links">
              <div className="home-list1">
                <h3 className="home-heading7">For Hackers</h3>
                <div className="home-items">
                  <a
                    href="/register"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21 button-clean button"
                  >
                    Register
                  </a>
                  <a
                    href="/manual"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21 button-clean button"
                  >
                    Hacker Manual
                  </a>
                  <a
                    href="/resources"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21 button-clean button"
                  >
                    Resources
                  </a>
                  <a
                    href="/ideas"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21 button-clean button"
                  >
                    Ideas
                  </a>
                  <a
                    href="/partner"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21 button-clean button"
                  >
                    Partner
                  </a>
                </div>
              </div>
              <div className="home-list2">
                <h3 className="home-heading8">Connect</h3>
                <div className="home-items1">
                  <a
                    href="/builddao"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link23 button-clean button"
                  >
                    BuildDAO
                  </a>
                  <a
                    href="/tg-keypom"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link24 button-clean button"
                  >
                    Keypom Builders
                  </a>
                  <a
                    href="/partner"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link24 button-clean button"
                  >
                    Sponsor
                  </a>
                  <button className="home-link25 button-clean button">
                    Sponsor
                  </button>
                  <a
                    href="/telegram"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link24 button-clean button"
                  >
                    Announcements
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div>
          <div className="home-container4">
            <Script
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #292320;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link01 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link02 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 30px;
            height: 30px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-view {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 377px;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: underline;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-register {
            text-decoration: none;
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: left;
            font-weight: 500;
            line-height: 108px;
            text-transform: lowercase;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: left;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-learn {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-roadmap {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 500;
            line-height: 108px;
          }
          .home-header02 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            line-height: 36px;
          }
          .home-list {
            gap: 106px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-left-width: 1px;
          }
          .home-step {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption1 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header04 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption2 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header06 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption3 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-collection {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 100%;
            align-self: flex-start;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption4 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: lowercase;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-main {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: grid;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-card {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image01 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image02 {
            width: 100%;
            object-fit: cover;
          }
          .home-content01 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card01 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image03 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image04 {
            width: 100%;
            object-fit: cover;
          }
          .home-content02 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title01 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card02 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image05 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image06 {
            width: 100%;
            object-fit: cover;
          }
          .home-content03 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title02 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image07 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image08 {
            width: 100%;
            height: 500px;
            object-fit: cover;
          }
          .home-content04 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title03 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image09 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content05 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title04 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card05 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image11 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image12 {
            width: 100%;
            object-fit: cover;
          }
          .home-content06 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title05 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image13 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image14 {
            width: 100%;
            object-fit: cover;
          }
          .home-content07 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title06 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image15 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image16 {
            width: 100%;
            object-fit: cover;
          }
          .home-content08 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title07 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image17 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image18 {
            width: 100%;
            object-fit: cover;
          }
          .home-content09 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title08 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            background-color: #ffffff;
          }
          .home-image19 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image20 {
            width: 100%;
            object-fit: cover;
          }
          .home-content10 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title09 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-element {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
            border-top-width: 1px;
          }
          .home-content11 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon04 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon06 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content12 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon08 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon10 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content13 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description2 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-link17 {
            text-decoration: underline;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon12 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon14 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content14 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description3 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-link18 {
            text-decoration: underline;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon16 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon18 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption5 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-telegram {
            text-decoration: none;
          }
          .home-image21 {
            width: 100px;
            object-fit: cover;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading7 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link19 {
            color: rgb(255, 255, 255);
          }
          .home-link20 {
            color: rgb(255, 255, 255);
          }
          .home-link21 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link22 {
            color: rgb(255, 255, 255);
          }
          .home-list2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading8 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link23 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link24 {
            color: rgb(255, 255, 255);
            text-decoration: none;
          }
          .home-link25 {
            color: rgb(255, 255, 255);
          }
          .home-link26 {
            color: rgb(255, 255, 255);
          }
          .home-container4 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo1 {
              color: #000000;
            }
            .home-main {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-roadmap {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header01 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-header02 {
              width: 80%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-list {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-heading2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 32px;
            }
            .home-header04 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header05 {
              font-size: 32px;
            }
            .home-header06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-header07 {
              font-size: 32px;
            }
            .home-header08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-collection {
              gap: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-header09 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header10 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image01 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image03 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image05 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image07 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image09 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image11 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image13 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image15 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image17 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image19 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header11 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-element {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header12 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element1 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header13 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header14 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element3 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header15 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
            }
            .home-logo2 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption5 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials1 {
              display: none;
            }
            .home-links {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .home-list1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-list2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-main {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-header12 {
              font-size: 16px;
            }
            .home-description {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header13 {
              font-size: 16px;
            }
            .home-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header14 {
              font-size: 16px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header15 {
              font-size: 16px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

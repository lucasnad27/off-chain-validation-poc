# off-chain-validation-poc

This repo serves as a test bed to try out some ideas I have around practical applications of web3 technologies. I'm working under the assumption that doing anything on-chain is expensive and slow. Until this changes, I'm operating under the assumption that any web3 project should aim to keep as much of their application logic off-chain, similar to how web2 currently operates. Think graphql, REST endpoints, traditional RDBMS and the like. Limiting smart contracts and on-chain storage is essential to a successful, scalable project.

## An Analogy

Harkening to the days of university, we have a "permanent record" of sorts. Every semester, professors submit their student's final grades to the university registrar. Those grades are the culmination of seminar attendance, lab work, quizzes, mid-terms and finals. If we were to digitize this system with a focus on putting **ALL THE THINGS** on the blockchain, a teacher would submit an attendance report to the registrar after every class. Another submission made for every pop-quiz. The registrar becomes overwhelmed, and the teacher is gassed (pun intended) from all the extra paper work they are submitting. If we shed our pre-conceptions about what web3 is supposed to be, we can build in an intermediate layer. Your permanent-record is still on the chain, but a teacher only submits a student's grade at the end of the year. A web app is used to submit grades throughout the year. Fixing mistakes and fat thumbs becomes a trivial exercise. Adding attendance points is a breeze. And that's because we're using technologies that were purpose-built. A light-weight, fast, centralized (gasp!) application server. A database architecture purpose-built for storing and querying student performance. In other words, the performance we've all become accustomed to with web 2.0. And after all the finals have been completed, the teacher clicks a button that initiates a call to a smart contract giving Susie Q a B+ in philosophy.

## What about cheaters??

This is a smart contract that a professor can call at any time, with any grade for Susie Q. We don't want that behavior. We only want our smart contract to be called by the professor, within a certain time window, with the calculated final grade. And *that is the purpose of this repo*. My goal is to build a simple smart contract that is restricted based on a 3rd-party server. I'll be avoiding the use of Oracles if at all possible, although that is certainly one way to get it done.

## The Tech Stack

- Layer 1 blockchain - Ethereum
- Local Blockchain (ganache)
- Smart Contracts - Solidity
- Solidity Development - Truffle
- Backend business logic - Cloudflare workers
- web3 frontend - SvelteKit

## Running locally

To run this on your local machine, we'll be booting up a local ethereum-based blockchain using Ganache. If you're unfamiliar with how Ganache + Truffle work, head over to their site to get a crash course. Modify your `truffle-config.js` file as needed. Now, take a deep breath and follow along with the following instructions.

```sh
# install global dependencies
npm install wrangler@beta -g
npm install truffle -g

# authenticate wrangler with cloudflare
wrangler@beta login
```

Our frontend is built with svelte + sveltekit. Nothing special about using svelte over any other framework for the purposes of this article, this is mainly out of convenience (and my undying love for Svelte). All the frontend code and related cloudflare functions will be contained in the `client` directory, including our smart contract build artifacts.

```sh
cd client
yarn install
# start up a local development server
yarn dev
```


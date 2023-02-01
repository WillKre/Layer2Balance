# Layer2Balance

Hosted @ https://layer2balance.netlify.app/

Application which given an `0x` address (via text input or by connecting Metamask) - scans the total **ETH** balances across Ethereum + Layer 2's (eg. Arbitrum).

## Run Locally

_Prerequisite: Create a `.env` file within the root directory, copy over the contents of `.env-sample` and populate the values with your own API keys._

This project uses [Netlify Functions](https://www.netlify.com/products/functions/) to handle API keys, so can be run locally using the [Netlify CLI](https://www.netlify.com/products/cli/):

**`npx netlify dev`**

## Preview

<img width="1433" alt="Screenshot of the Application" src="https://user-images.githubusercontent.com/7396157/197422477-81a89dba-7768-4b5a-b950-4f5e7a071b6d.png">

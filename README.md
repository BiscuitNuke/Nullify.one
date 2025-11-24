
# BiscuitHost Public Website

## Description

This repository contains the code that is used for the BiscuitHost public-facing website. This is a Next.JS based website.

## Deployment Information

The website currently has a live development server active at `bhwebhost01`. This server has a routine that automatically pulls the latest version availible from [this repository's `dev` branch](https://github.com/BiscuitHost/website/tree/dev). However, local deployment will always be supported. Instructions are below.

### Automatic

*the following scripts assume you have a clean development environment, adjust if applicable.*
**Linux/macOS:**

```bash
# fetch the repository, you must be authenticated, see https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git
git clone https://github.com/biscuithost/website.git
cd website
# allow execution of start script
chmod +x ./start.sh
# this is basically the golden key, only thing that needs to be ran to actually start the sever
./start.sh
```

**Windows (command processor or PowerShell):**

```shell
rem If you are not authenticated, this will open a browser, assumes git is in $ENV:Path
git clone https://github.com/biscuithost/website.git
dir website
# this is basically the golden key, only thing that needs to be ran to actually start the sever
./start.bat
```

### Manual

Clone the repository (if applicable) and open a command line to the working environment. These commands are synonymous regardless of OS.

- To do first time initalization of the environment, run `npm i`. If you get errors about `next` or the likes not being found, this is most likely why.
- To start the server in a development environment, run `npm run dev`.
- To start the server in a prodution environment, run `npm build` and then `npm run`.
- To build the website as a static HTML site that can be ran on typical web servers, run `npm build` and then `npm export`. The static version will appear in `out/`.

# Miscellaneous

This code base will only have production-ready and possibly running code in branch `main`. Please refrain from doing any other development activities in `main`—including staging and et cetera—this should only be done in `dev`.

If any issues arise in development, please create a issue. The discussions feature has been enabled for discussion of site related topics, however, the #bh-site channel exists on Discord.


© Copyright 2021 BiscuitHost. 

const REPOS = [
  { name: "HIPAA-Contract-Site", lang: "JavaScript", tags: ["app"], blurb: "A site for writing and tracking medical website-development contracts." },
  { name: "pacific-global-health", lang: "TypeScript", tags: ["app"], blurb: "A public site for a global health organization: care, research, training, and partnerships." },
  { name: "license_scraper_scheduler", lang: "Python", tags: ["app", "ai"], blurb: "Scheduled scrapers for professional-license boards across US states." },
  { name: "license_scrap_management", lang: "Python", tags: ["app"], blurb: "A status board for a smaller set of state license scrapers." },
  { name: "invoice_manger_electron", lang: "TypeScript", tags: ["app"], blurb: "A desktop app for customers, employees, items, and invoices." },
  { name: "quickbooks-invoice-manager", lang: "JavaScript", tags: ["app"], blurb: "A desktop desk for clients, invoices, and a revenue dashboard." },
  { name: "metalandlace_frontend", lang: "TypeScript", tags: ["app"], blurb: "The storefront for Glazed Visions Market, a ceramic shop." },
  { name: "metalandlace_backend", lang: "JavaScript", tags: ["app"], blurb: "The shop API: products, orders, reviews, cart, and wishlist." },
  { name: "metalandlance_backend", lang: "JavaScript", tags: ["app"], blurb: "An earlier ceramic-shop server with product photos and a built storefront." },
  { name: "seramic", lang: "TypeScript", tags: ["app"], blurb: "A ceramic shop with a catalog, journal, cart, and an admin for orders." },
  { name: "seramic_shop", lang: null, tags: ["app"], blurb: "An empty repository beside the seramic shop." },
  { name: "earthen-glow-emporium-78", lang: "JavaScript", tags: ["app"], blurb: "Earthen Glow, a shop for handcrafted ceramics and natural cosmetics." },
  { name: "energy_system_frontend", lang: "TypeScript", tags: ["app"], blurb: "Cedrus Energy Manager, a business app for energy connections." },
  { name: "energy_system_backend", lang: "JavaScript", tags: ["app"], blurb: "The API behind Cedrus Energy Manager: organisations, sites, and supply links." },
  { name: "trading_site", lang: "PHP", tags: ["app"], blurb: "CryptoTech Exchange, a Laravel market with orders, staking, and wallets." },
  { name: "trading_mobile", lang: "HTML", tags: ["app"], blurb: "Bixfin, the mobile app for markets, trades, wallets, and charts." },
  { name: "FLR", lang: "JavaScript", tags: ["app"], blurb: "A browser extension that reads a Freelancer project and tracks the bid." },
  { name: "glowsenior-drivereasy", lang: null, tags: ["app"], blurb: "A DriverEasy pack for a Windows machine whose network drivers never install." },
  { name: "1111sn7", lang: "Python", tags: ["app"], blurb: "Brainplay, a Bittensor subnet that scores models by having them play games." },
  { name: "scraping", lang: "HTML", tags: ["app"], blurb: "A saved copy of CoinGecko coin pages for offline reading." },
  { name: "ragieAI-mythology", lang: "Python", tags: ["ai"], blurb: "A Norse mythology chatbot that answers from a scraped library of essays." },
  { name: "MultiFindtune", lang: "Python", tags: ["ai"], blurb: "QLoRA fine-tuning of Qwen3 on software-engineering agent traces." },
  { name: "agent-rl-train", lang: "Python", tags: ["ai"], blurb: "Reinforcement learning for a terminal agent that fixes code and drives the web." },
  { name: "Print_RL_Dataset_Maker", lang: "Python", tags: ["ai"], blurb: "Builds a dataset where the answer is the real printed output of a Python program." },
  { name: "Powerful-SWE-SYNTH-RL-Training", lang: "Python", tags: ["ai"], blurb: "A training pipeline that collects bug-fix traces, then fine-tunes and runs GRPO." },
  { name: "FAST", lang: "Python", tags: ["ai"], blurb: "FAST-GRPO, fast and slow thinking for visual-language models." },
  { name: "lobehub", lang: "TypeScript", tags: ["ai"], blurb: "LobeHub, a workspace for finding and working with agent teammates." },
  { name: "qwen-coder-company-site", lang: null, tags: ["app"], blurb: "A repository name for a company site, with no site in it." },
  { name: "JS-releases", lang: null, tags: ["app"], blurb: "The Windows installer and update feed for Call Support, a live call assistant." },
  { name: "ccleaner", lang: null, tags: ["app"], blurb: "A repository that only holds the title ccleaner." },
  { name: "scrap_u_e", lang: null, tags: ["app"], blurb: "An empty repository." },
  { name: "glowsenior", lang: null, tags: ["app"], blurb: "The GitHub profile page, a grid of tools from Python to React." },
  { name: "three.js", lang: "JavaScript", tags: ["fork"], blurb: "A JavaScript library for 3D scenes in the browser.", parent: "mrdoob/three.js" },
  { name: "halo", lang: "Java", tags: ["fork"], blurb: "An open-source tool for building and publishing a website.", parent: "halo-dev/halo" },
  { name: "eigent", lang: "TypeScript", tags: ["fork", "ai"], blurb: "A desktop app for building and running a team of agents.", parent: "eigent-ai/eigent" },
  { name: "cortex", lang: "Rust", tags: ["fork", "ai"], blurb: "A command-line coding agent tuned for faster, leaner code.", parent: "CortexLM/cortex-code" },
  { name: "platform", lang: "Rust", tags: ["fork", "ai"], blurb: "A Bittensor subnet where miners compete on several research challenges at once.", parent: "CortexLM/cortex" },
  { name: "react-easy-edit", lang: "JavaScript", tags: ["fork", "app"], blurb: "A React component for editing a value in place.", parent: "giorgosart/react-easy-edit" },
  { name: "op-platform-management", lang: "TypeScript", tags: ["fork"], blurb: "Huly, one workspace for projects, chat, CRM, HR, and hiring.", parent: "hcengineering/platform" },
  { name: "op-MyAgents", lang: "TypeScript", tags: ["fork", "ai"], blurb: "A desktop agent for people who are not developers.", parent: "hAcKlyc/MyAgents" },
  { name: "op-agency-agents", lang: "Shell", tags: ["fork", "ai"], blurb: "A staff of specialist role prompts, from frontend work through review.", parent: "msitarzewski/agency-agents" },
  { name: "op-code-assistant", lang: "Rust", tags: ["fork", "ai"], blurb: "A Rust coding assistant with a terminal, a window, and MCP.", parent: "stippi/code-assistant" },
  { name: "op-carrycode", lang: "Rust", tags: ["fork"], blurb: "A terminal coding agent that talks to many model providers.", parent: "zhangliang605/carrycode" },
  { name: "op-ripperdoc", lang: "Python", tags: ["fork", "ai"], blurb: "A Python coding agent that edits a project from the terminal.", parent: "quantmew/ripperdoc" },
  { name: "op-SWE-AF", lang: "Python", tags: ["fork", "ai"], blurb: "A group of agents that plan, code, test, and open a pull request.", parent: "Agent-Field/SWE-AF" },
  { name: "op-talkcody", lang: "TypeScript", tags: ["fork", "ai"], blurb: "A local coding agent that can run several models in parallel.", parent: "talkcody/talkcody" },
  { name: "op-Open-AgentRL", lang: "Python", tags: ["fork", "ai"], blurb: "Training code for agents, including GRPO, PPO, and RLHF.", parent: "Gen-Verse/Open-AgentRL" },
  { name: "op-swift", lang: "Python", tags: ["fork", "ai"], blurb: "A toolkit for fine-tuning language and multimodal models.", parent: "modelscope/ms-swift" },
  { name: "op-Scrapling", lang: "Python", tags: ["fork"], blurb: "A Python scraping framework, from one request up to a full crawl.", parent: "D4Vinci/Scrapling" },
  { name: "op-easy-kota", lang: "Rust", tags: ["fork", "ai"], blurb: "Kota, a small Rust coding agent you extend with skills and hooks.", parent: "StepfenShawn/kota" },
  { name: "op-ASTRA", lang: "Python", tags: ["fork", "ai"], blurb: "A red-team system that probes AI coding assistants.", parent: "PurCL/ASTRA" },
  { name: "op-10x-Tool-Calls", lang: "Python", tags: ["fork", "ai"], blurb: "Rules that keep an agent working across many tool calls in one session.", parent: "perrypixel/10x-Tool-Calls" },
  { name: "bt-affinetes", lang: "Python", tags: ["fork", "ai"], blurb: "Affinetes, a small orchestrator that runs Python environments in Docker.", parent: "AffineFoundation/affinetes" }
];

const PAGES = {
  "HIPAA-Contract-Site": { overview: [
    "Medical Contract Builder is a site for writing development contracts aimed at medical websites. A clinic and a contractor share one contract, follow its status, and work through milestones instead of passing documents around by email.",
    "The work it covers is specific to healthcare software: electronic health records, telemedicine, and medical apps. Both sides can upload identity documents, including the front and back of a driver’s license, and leave notes on the contract.",
    "Sign-in uses JSON Web Tokens. A person is a client, a contractor, or an admin, and each role sees a different set of pages. The interface is a React app; the API sits beside it and stores the contracts and the uploaded files."
  ]},
  "pacific-global-health": { overview: [
    "Pacific Global Health is a Next.js site for an organization that works on health systems. The opening line is “Building Healthier Futures Through Global Collaboration.”",
    "The pages walk through the work itself: primary care that is local and patient-centred, health research meant to reach policy, consultancy, systems development, and training. Separate pages cover leadership, partnerships, current work, and how someone can get involved.",
    "A visitor can read the story, open a contact page, and sign in through a login window. The site is a marketing and information front, not a clinical record system."
  ]},
  "license_scraper_scheduler": { overview: [
    "This is a Python service that collects professional-license records from US state boards. Each board has its own scraper. The set covers about forty-three boards, from Alabama and Alaska through Washington, D.C. and Wisconsin, with separate scrapers where a state splits medical doctors and doctors of osteopathy.",
    "A scheduler starts a full pass every two weeks. Between passes, a small Flask site lists every bot, shows whether it is running, and offers a button to start a cycle immediately.",
    "Results land in CSV files next to each scraper. Some boards need a captcha image or a saved HTML response before the scraper can continue, and those files sit in the same folders as the scripts."
  ]},
  "license_scrap_management": { overview: [
    "This is the smaller license-board collector. It uses the same Flask status page and the same idea of a scheduled scrape, but only six boards are wired up: Alabama, Delaware, Montana, New Mexico, Washington, D.C., and Wisconsin.",
    "The page is titled Scraper Bot Status. It shows each bot in a table and can start a scrape cycle by hand. The scheduler, the scraper manager, and the per-state scripts are the whole application."
  ]},
  "invoice_manger_electron": { overview: [
    "This is a desktop invoice application. Electron opens the window, an Express server answers the UI, and MongoDB stores the records. A local NeDB file is also opened at startup, and the server can launch a MongoDB process on the machine.",
    "The data model covers accounts, customers, employees, invoices, and items. The React client is an admin shell: a dashboard, account screens, and role-based sections for the people who use it."
  ]},
  "quickbooks-invoice-manager": { overview: [
    "This is an Electron and React desk for day-to-day invoicing. The dashboard shows three totals: invoices, clients, and revenue. From there you open a client list, add a client, write an invoice, or open an invoice that already exists.",
    "A small Node server holds the client and invoice models. The screens are a sidebar, searchable inputs, and a product-details table on the invoice."
  ]},
  "metalandlace_frontend": { overview: [
    "Glazed Visions Market is an online shop for ceramic work. The React app, built with Vite, is the storefront a customer actually uses.",
    "A shopper browses the catalog, opens a product, adds it to a cart, and checks out. There are pages for signing in, about the shop, and contact. An admin area, behind its own layout, edits products and users, including images and extra product details.",
    "Motion is handled with Framer Motion, and the shared UI pieces follow the usual shadcn-style components. The matching API lives in metalandlace_backend."
  ]},
  "metalandlace_backend": { overview: [
    "This is the API for the ceramic shop. It is Node, Express, and MongoDB, with JWT sign-in and roles so an admin and a customer do not share the same actions.",
    "Products have full create, read, update, and delete, and images go through Cloudinary. Orders move through a status lifecycle. Customers can leave reviews, keep a cart, and save a wishlist. Categories are hierarchical.",
    "Around that core there is rate limiting, request validation, statistics, order email, and a place to attach Stripe. A Postman collection in the repository documents the routes."
  ]},
  "metalandlance_backend": { overview: [
    "This is an earlier server for the same kind of shop. Express and MongoDB serve a built storefront from the public folder, and product photographs are stored under public/products, one folder per item.",
    "The application shape is a CRUD skeleton: models, routes, and a Mongo connection, with a welcome page at the root. It is the version that came before the split into metalandlace_frontend and metalandlace_backend."
  ]},
  "seramic": { overview: [
    "Seramic is a ceramic shopping site. The React client has a home page, a shop, collections, a journal of articles, product pages, a cart, checkout, and a wishlist. An admin section manages products, orders, and articles.",
    "Accounts, the cart, and the wishlist are provided to every page. The server is TypeScript on Neon, with Drizzle pushing the schema, and Vite builds the client. The address that was published for the shop no longer responds, so this page does not link a website."
  ]},
  "seramic_shop": { overview: [
    "This repository has the name of the ceramic shop and nothing else. There is no default branch and no application to open."
  ]},
  "earthen-glow-emporium-78": { overview: [
    "Earthen Glow is a shop for handcrafted ceramics and natural cosmetics. The home page leads with “Handcrafted with Love and Care” and points people at a collection made with sustainable materials.",
    "Around the catalog there is a category banner, featured products, search with filters, a cart, checkout, an order summary, testimonials, a newsletter signup, and a map. A 3D animation component sits with the product presentation.",
    "The interface is React. An admin layout is included for managing the shop."
  ]},
  "energy_system_frontend": { overview: [
    "Cedrus Energy Manager is a business application for energy connections. The page title describes it as a B2B tool for managing those connections, and the screens match that: clients, categories, complexes, the links between them, and users.",
    "Access is split by role. Guards wrap routes that need a signed-in user or a particular permission, and the admin area can create users. Shared pieces cover loading, empty, and error states, plus badges for status and type.",
    "The opening hero still shows leftover marketing copy about building websites. The rest of the interface is the energy manager."
  ]},
  "energy_system_backend": { overview: [
    "This is the API for the energy supply-chain manager. Node, Express, and MongoDB store organisations, the entities inside them, contacts, projects, categories, and the connections that tie supply-chain parts together.",
    "Sign-in and role checks sit in front of the routes. Files, both documents and images, upload through their own route. Validation and error handling wrap the controllers, and the routes are grouped under version 1 of the API.",
    "The hierarchy is the point of the model: an organisation has entities, entities have contacts, and connections describe how those pieces relate."
  ]},
  "trading_site": { overview: [
    "CryptoTech Exchange is a Laravel 11 cryptocurrency market. Traders get pairs, an order book that is processed by background commands, liquidity, and last-price updates. Separate workers watch liquidations, market stats, and a trade bot.",
    "Beyond spot trading, the app runs a launchpad with claim releases, staking with reward calculation, and wallets. Amounts are cast as fiat or crypto with their own decimal rules. Bitcoin is reached through a Bitcoin RPC client, and Tron through a Tron API.",
    "Accounts use Jetstream and Fortify, including a captcha check on sign-in. Horizon runs the queues. The console commands are the operational half of the exchange: seed pairs, fix a network title, fund a wallet, reset an admin."
  ]},
  "trading_mobile": { overview: [
    "Bixfin is the phone app for the exchange. It is an Ionic web app, already built, so the repository holds the packaged pages and assets rather than the TypeScript sources.",
    "The icon set names the sections: home, markets, trades, wallets, and swap. Chart pages come in light and dark mobile layouts, plus a themed chart and a session check.",
    "It is installable to a home screen, with a web manifest and icons from 48 to 512 pixels."
  ]},
  "FLR": { overview: [
    "Freelancer report is a Chrome extension for tracking work on Freelancer. On a project page, a content script reads the job title, the description, the budget, and the country straight from the page.",
    "The side panel is titled “Freelancer winning bid.” You type a Finder ID, and the extension keeps what it collected in local storage. It can also raise a notification. An options page sits beside the panel for settings.",
    "The manifest asks for storage, the active tab, scripting, the side panel, notifications, and tabs. The extension runs on the pages you open, which is how it can see a project you are already viewing."
  ]},
  "glowsenior-drivereasy": { overview: [
    "This repository documents a DriverEasy failure on a clean Windows install. The network adapters have no drivers, so the machine has no internet, and DriverEasy cannot download the drivers it would need to fix that. It either fails quietly or reports that a driver installed when nothing changed.",
    "The note lists what was already tried: running as administrator, refreshing the hardware list, installing .NET updates, and copying the installer from another computer. The offline scan did not help.",
    "Alongside the note is a DriverEasy archive, so the installer can be carried to the machine that cannot reach the network."
  ]},
  "1111sn7": { overview: [
    "Brainplay is a Bittensor subnet that benchmarks models by making them play games. The idea is that a match is easier to judge than a single numeric score: you can watch which model actually plays better.",
    "The first game is Codenames, with the rules included as a PDF. The subnet code has the usual Bittensor roles, miners and validators, plus game prompts, a protocol for axons, and write-ups for running on testnet, staging, and mainnet.",
    "More games are planned. What is implemented today is Codenames and the machinery that asks a model to play it."
  ]},
  "scraping": { overview: [
    "This repository is a saved copy of CoinGecko, stored as the site’s own HTML under www.coingecko.com. It is a snapshot you can open locally, not a program that fetches prices.",
    "The pages are individual coin entries: Bitcoin and its prices in several currencies, plus assets such as Ethereum-related tokens, Aave, Algorand, Aptos, Cardano, Chainlink, Dogecoin, BNB, and many smaller listings. Each file is the coin page as it was saved."
  ]},
  "ragieAI-mythology": { overview: [
    "The Norse Mythology Assistant answers questions about gods, creatures, and the shape of the Norse cosmos. It is a chatbot with a narrow subject, built so the answers come from a library of source pages rather than from the model alone.",
    "OpenAI generates the reply. Voiceflow holds the conversation flow and the chat window. Ragie does the retrieval. A Scrapy crawler filled the library: essays on the nine worlds, Bifrost, Ginnungagap, seidr, destiny, the parts of the self, and a long set of book reviews.",
    "The crawled text sits in the repository next to the assistant, one file per page, so the knowledge base can be read on its own."
  ]},
  "MultiFindtune": { overview: [
    "This repository fine-tunes Qwen3 so it can act on software-engineering tasks. Saved agent histories, including GLM-4.7, Kimi K2.5, and a Kimi thinking run, are turned into supervised training sets.",
    "The trainer is a QLoRA setup on top of TRL and PEFT. Configs are written for a Qwen3 4B and an 8B, either on one 80GB GPU or across two 40GB GPUs, with DeepSpeed ZeRO-2 as an option. A rejection-sampling loop builds a later dataset from the model’s own attempts, and TensorBoard is wired up for the runs.",
    "Affinetes is included so the SWE-SYNTH environment, a Docker container of buggy code and tests, can host the tasks the model is being trained to solve."
  ]},
  "agent-rl-train": { overview: [
    "This project trains a language model to be a terminal agent. The model types shell commands, reads the output, and keeps going until the task is done. Training starts with supervised traces, then continues online with GRPO, and a process reward scores the steps rather than only the final result.",
    "Two environments are wrapped. SWE-SYNTH is bug fixing in a codebase. LIVEWEB is web automation. Both sit behind one environment interface, with a training config, an evaluation script, and a JSONL dataset of traces.",
    "Affinetes is in the repository as well, which is the container layer those environments run in."
  ]},
  "Print_RL_Dataset_Maker": { overview: [
    "Print is a reinforcement-learning task where the model must predict the exact text a Python program prints, including debug output. This tool builds the dataset for that task.",
    "It reads conversation samples, pulls out the Python problem and any stdin, runs the program, and stores the captured stdout as the ground-truth answer. merge_samples.py gathers the raw samples into one JSONL file, and run_problems.py executes them.",
    "A later script can strip actions out of the samples before they are used for training. The result is a set of problems paired with the output they really produce."
  ]},
  "Powerful-SWE-SYNTH-RL-Training": { overview: [
    "This is a three-stage trainer for the SWE-SYNTH bug-fixing environment. First it evaluates the model and stores the trajectories. Then it supervised-fine-tunes on the traces that succeeded. Then it runs GRPO, group-relative policy optimization, against the live environment.",
    "An alternate third stage, train_openenv.py, uses step-level REINFORCE instead of GRPO. Affinetes loads the environment, and each task runs in Docker as a repo with a bug and tests.",
    "Around the trainers there is a config file, an evaluation script, a plot script, and an Ubuntu setup script. The task set it expects is a public collection of pre-generated SWE-SYNTH problems."
  ]},
  "FAST": { overview: [
    "FAST-GRPO is a training method for large visual-language models. The model is taught to mix a fast answer with a slower, more deliberate one, and the policy is updated with group-relative policy optimization. The work was a spotlight at NeurIPS 2025.",
    "The code extends the verl trainer. Model files cover Qwen2-VL and Qwen3-VL. A thinking reward scores the reasoning trace, and the examples include a math prompt, a split of train and validation, and a shell script that launches a run.",
    "Configs and a model-merger script sit next to the trainer, so a finished run can be packed back into a single model."
  ]},
  "lobehub": { overview: [
    "LobeHub is a workspace for finding, building, and working with agent teammates. The product is a chat application with a desktop app, knowledge bases, memory, and a catalog of model providers.",
    "Agents can use skills and plugins. The repository includes the pieces for conversations, data fetching, the desktop window, database migrations, and the settings that point the app at a provider.",
    "It is meant to be the place those agents live, rather than a single chat box tied to one model."
  ]},
  "qwen-coder-company-site": { overview: [
    "The name points at a company site for a coding model. The repository has a single empty file and no pages, styles, or assets."
  ]},
  "JS-releases": { site: "https://call.job-offer.app", overview: [
    "Call Support is a Windows overlay for live calls. It listens to system audio as the other person and to the microphone as you, transcribes both sides as they speak, and streams suggested replies plus a running summary.",
    "The window stays on top and is left out of screen sharing, so a call on Zoom, Teams, Meet, or OBS does not show it. It needs Windows 10, version 2004 or later.",
    "This repository does not contain the application source. It holds the license, the installer, and the feed the desktop app checks for updates. The current setup package is published as a release, and the product site at call.job-offer.app points at that same installer."
  ]},
  "ccleaner": { overview: [
    "The only file in this repository is a heading that reads ccleaner. There is no cleaner, no settings screen, and no code that touches a disk."
  ]},
  "scrap_u_e": { overview: [
    "This repository is empty. It has no branch and no files."
  ]},
  "glowsenior": { overview: [
    "This is the GitHub profile page for glowsenior. It is a single centered table of tool icons: Python, FastAPI, Flask, C and C++, C#, JavaScript, and React.",
    "There is no application here. The page is the banner visitors see on the profile."
  ]},
  "three.js": { site: "https://threejs.org/", overview: [
    "three.js is a JavaScript library for drawing 3D scenes in the browser. You create a scene, a camera, lights, and meshes, and the library renders them.",
    "The main builds ship WebGL and WebGPU renderers. SVG and CSS3D renderers are available as addons when a scene should mix with ordinary page elements. The project also publishes examples, a manual, and a migration guide between versions."
  ]},
  "halo": { site: "https://www.halo.run", overview: [
    "Halo is an open-source tool for building a website. You run it, write in an admin, and publish, with themes and plugins for the parts a site usually needs.",
    "It is a Java application, packaged for Docker, and aimed at people who want a site they host themselves rather than a hosted page builder."
  ]},
  "eigent": { site: "https://www.eigent.ai", overview: [
    "Eigent is a desktop application for working with a group of agents. You assemble a workforce, hand it tasks, and manage those agents from one window on your own machine.",
    "It is built with the CAMEL agent framework. The app is the cowork layer: the place the agents are created, watched, and deployed, instead of a chat transcript."
  ]},
  "cortex": { overview: [
    "Cortex is a command-line coding agent focused on making code faster and cheaper to run. You point it at a codebase and it works toward runtime performance rather than only toward a passing test.",
    "The agent is fine-tuned in public. Contributors compete, under an incentive, to produce a stronger version of the same agent, and the CLI is how that agent is used."
  ]},
  "platform": { overview: [
    "Platform is a Bittensor subnet for evaluating AI work in the open. It runs several research challenges at the same time, and miners compete or cooperate across them.",
    "Validators form a distributed network that scores the submissions. The design goal is confidential work where it is needed, with an evaluation that stays visible, so a challenge can keep running instead of ending in one leaderboard."
  ]},
  "react-easy-edit": { site: "https://giorgosart.gitbook.io/react-easy-edit/", overview: [
    "react-easy-edit is a React component for inline editing. A value is shown as text; a click turns it into an editor; save writes it back and cancel restores it, without a separate form page.",
    "It is a small library, published on npm, with a documentation site that walks through the props and the save and cancel flow."
  ]},
  "op-platform-management": { site: "https://huly.io", overview: [
    "Huly is a single workspace that covers what teams usually split across several products: projects, chat, a CRM, HR, and hiring. The comparison it draws is Linear, Jira, Slack, and Notion in one place.",
    "This repository is the platform those products are built on, not only the hosted app. It includes the chat, project, CRM, HR, and applicant-tracking applications, and it can be self-hosted. Huly and TraceX are two products running on it."
  ]},
  "op-MyAgents": { site: "https://myagents.io", overview: [
    "MyAgents is a desktop agent meant for people who do not write software for a living. It puts an agent that can use tools on the computer, and it also speaks through chat-style bots, so the same agent is reachable both ways.",
    "It installs in one step on macOS 13 and Windows 10 or later. The aim is a machine that can carry out work from a student’s, a writer’s, or a product manager’s instructions, not only from an engineer’s."
  ]},
  "op-agency-agents": { overview: [
    "The Agency is a collection of role prompts. Each file is a specialist with a personality, a way of working, and a deliverable: frontend implementation, review, community work, and roles that check whether an idea is realistic.",
    "They are written to be dropped into an agent that accepts role instructions, so a session can call a particular specialist instead of a general assistant."
  ]},
  "op-code-assistant": { overview: [
    "Code Assistant is a coding agent written in Rust. It has a command-line interface and a graphical one, and it can read and change a project on its own.",
    "Tool calls adapt to the model. Some models use native function calls, others XML-style tags or caret blocks, and the interface streams those calls as they arrive and filters combinations that are unsafe. It also runs as an MCP server and in ACP mode, so other tools can drive it."
  ]},
  "op-carrycode": { site: "https://carrycode.ai", overview: [
    "CarryCode is a coding agent that lives in the terminal. You ask it, in ordinary language, to write, refactor, debug, or explain code.",
    "It connects to more than a dozen model providers and can take extra tools through MCP. The terminal UI has themes and syntax highlighting, and there is a VS Code extension that talks to the same agent."
  ]},
  "op-ripperdoc": { site: "https://ripperdoc-docs.pages.dev", overview: [
    "Ripperdoc is a coding agent that runs in the terminal and is meant to be extended. It sits in the same category as Claude Code and Aider: you describe a change, and it edits the project from the shell.",
    "It is Python 3.10 or newer, published on PyPI, with documentation for installing it and adding your own pieces. The license is Apache 2.0."
  ]},
  "op-SWE-AF": { site: "https://agentfield.ai/", overview: [
    "SWE-AF is a team of agents that does a software change the way a small engineering group would. One plans the work, others write the code, tests are run, and the result is opened as a pull request.",
    "It runs on AgentField, which is the runtime the agents share. The project is in public beta and targets Python 3.12. The name is pronounced as one word, swee-AF."
  ]},
  "op-talkcody": { site: "https://talkcody.com", overview: [
    "TalkCody is a coding agent that stays on your machine. You choose the model, including OpenAI, Anthropic, Google, or a model running locally, and the code does not have to be uploaded to use it.",
    "Its distinctive piece is parallelism: several levels of work can proceed at once, instead of one chat waiting on one reply. It is open source under the MIT license, with desktop releases."
  ]},
  "op-Open-AgentRL": { site: "https://huggingface.co/collections/Gen-Verse/open-agentrl", overview: [
    "Open AgentRL is training code for language-model agents. It includes two lines of work: RLAnything, which trains the environment, the policy, and the reward model together as the task changes, and DemyAgent.",
    "The algorithms cover GRPO, PPO, and RLHF. Training can run for multiple turns, with tool use, and can be spread across machines. Model checkpoints are published as a Hugging Face collection."
  ]},
  "op-swift": { site: "https://swift.readthedocs.io/zh-cn/latest/", overview: [
    "SWIFT, the Scalable lightWeight Infrastructure for Fine-Tuning, is ModelScope’s toolkit for training language and multimodal models. It supports full-parameter training and PEFT, and the recipes include continued pre-training, supervised fine-tuning, DPO, and GRPO.",
    "The model list is large: on the language side, Qwen3, Qwen3-MoE, DeepSeek-R1, GLM, InternLM, and Llama; on the multimodal side, Qwen-VL, InternVL, Ovis, and others. It needs Python 3.11 and PyTorch 2 or newer."
  ]},
  "op-Scrapling": { site: "https://scrapling.readthedocs.io/en/latest/", overview: [
    "Scrapling is a Python framework for web scraping that tries to keep working when a page changes. One interface covers a single request and a crawl that walks a site.",
    "Fetchers, parsers, and the adaptive selection logic live in the same library, with documentation for the common paths from a first request to a larger spider."
  ]},
  "op-easy-kota": { site: "https://crates.io/crates/kota", overview: [
    "Kota is a small coding agent written in Rust. It is built to start quickly, stay light, and be reshaped: skills, custom tools, hooks, and plugins are how you extend it, in the same spirit as a configurable editor.",
    "The crate is published as kota. API docs are on docs.rs, and the agent itself is a terminal tool rather than a hosted chat."
  ]},
  "op-ASTRA": { overview: [
    "ASTRA is a red-team system for AI software assistants. The name expands to Autonomous Spatial-Temporal Red-teaming for AI Software Assistants. It looks for ways an assistant can be pushed into doing something it should refuse, across a sequence of steps rather than one prompt.",
    "It was the top attacking entry in Amazon’s Nova AI challenge, a live contest where attacking teams tried to break defending systems from universities. A paper and a project site document the approach."
  ]},
  "op-10x-Tool-Calls": { overview: [
    "10x-Tool-Calls is a rules file for Cursor, Windsurf, and other agents that spend a monthly allowance of requests. A request can contain many tool calls, so the file keeps the agent inside one session instead of starting a new chat for every instruction.",
    "When a task finishes, a short Python prompt asks what to do next. You type the next change, the agent continues, and the loop runs until you stop it or the allowance is used up. It only applies in agent mode."
  ]},
  "bt-affinetes": { overview: [
    "Affinetes is a small orchestrator for Python environments. An environment is an env.py file. Affinetes builds it into a Docker image, runs one or more copies, and talks to them over HTTP on an internal network so the ports are not exposed.",
    "Methods on the environment are dispatched automatically, so a caller invokes a function without writing a server. Load balancing spreads calls across replicas, and an SSH tunnel is how a remote machine reaches an environment. It is the infrastructure layer used by the Affine training setup."
  ]}
};

const SHIP = {
  "HIPAA-Contract-Site": {
    develop: "React 18 with Create React App, Ant Design, and React Router on the client. Express and MongoDB on the server. In development the client and the API run together.",
    deploy: "A production script builds the React app and copies it into the Express server, which then serves the site and the API on one port. PM2 is the process manager named for keeping that server up. The documented address is the machine itself, port 5000."
  },
  "pacific-global-health": {
    develop: "Next.js, with Radix UI components. The app was assembled in v0 and the repository stays in step with that project.",
    deploy: "Built with next build and deployed on Vercel. The live project sits behind a Vercel login, so this page does not link it as a public website."
  },
  "license_scraper_scheduler": {
    develop: "Python. Flask serves the status page, and the schedule library fires a full scrape every two weeks. Each state board is its own script.",
    deploy: "There is no host, container, or cloud config. It runs on a machine where you start the scheduler and the Flask app."
  },
  "license_scrap_management": {
    develop: "The same Python stack as the larger scraper: Flask for the status board and a scheduler for the scrape cycle, with one script per board.",
    deploy: "No deployment file. It is started locally, the same way as the scheduler beside it."
  },
  "invoice_manger_electron": {
    develop: "Electron for the window, React and Ant Design for the screens, Express for the API, and MongoDB plus a local NeDB file for the records.",
    deploy: "electron-builder packs a Windows NSIS installer, with a desktop shortcut and a start-menu entry. The client also has a Vercel rewrite so the same screens can be hosted as a single-page app."
  },
  "quickbooks-invoice-manager": {
    develop: "Electron wrapped around a Create React App client. Express serves the data, with SQLite and MongoDB both in the dependencies. Invoices can be rendered to PDF.",
    deploy: "The build compiles the React app and then runs electron-builder, so the result is a desktop install rather than a website."
  },
  "metalandlace_frontend": {
    develop: "Vite, React, and TypeScript, with Radix UI and TanStack Query. The dev server is Vite, and the production build is a static bundle.",
    deploy: "No hosting config is in the repository. The shippable artifact is the Vite build, which a static host would serve."
  },
  "metalandlace_backend": {
    develop: "Node, Express, and MongoDB. Images go to Cloudinary, mail goes through Nodemailer, and Stripe is wired for payments. Nodemon restarts the API while you work.",
    deploy: "Started with node on the server file. There is no Dockerfile or platform file, so it expects a Node process with a MongoDB connection."
  },
  "metalandlance_backend": {
    develop: "Express, Node, and MongoDB. The shop pages are a built frontend checked into the public folder, next to the product photos.",
    deploy: "npm start runs the Express process, which serves both the API and those static pages. No separate host is configured."
  },
  "seramic": {
    develop: "TypeScript. Vite builds the React client, esbuild bundles the server, and Drizzle talks to Postgres. The database client is Neon. The project runs on Replit with Node 20.",
    deploy: "Replit’s autoscale deployment builds with npm run build and starts the bundled server. The app listens on port 5000 and is published on port 80. A Vercel address was recorded for the shop and now returns 404."
  },
  "seramic_shop": {
    develop: "Nothing to build. The repository has no source.",
    deploy: "Nothing to deploy."
  },
  "earthen-glow-emporium-78": {
    develop: "Vite, React, and TypeScript. The project was edited in Lovable, which commits changes back to this repository.",
    deploy: "The production step is vite build, a static bundle. Lovable is the editor attached to the repo. No other host file is checked in."
  },
  "energy_system_frontend": {
    develop: "Vite, React, and TypeScript, edited in Lovable. Role guards and the client, complex, and connection screens are the application; the hero copy is still the Lovable starter.",
    deploy: "vite build produces the static site. No cloud config is in the repository beyond the Lovable project it was created from."
  },
  "energy_system_backend": {
    develop: "Node and Express, with MongoDB, JWT sign-in, and Multer for uploads. Nodemon is the dev server. Tests run with Jest.",
    deploy: "node server.js starts the API. Node 14 or newer is required. There is no container or hosting file."
  },
  "trading_site": {
    develop: "Laravel 11 on PHP 8.2, with Inertia for the interface. Horizon runs the queues. Background commands handle orders, prices, liquidity, launchpad claims, and staking rewards.",
    deploy: "It is a standard Laravel app: Composer installs it, Artisan runs it, and Horizon keeps the workers up. A PM2 package is included for process supervision. No server provider is named in the repository."
  },
  "trading_mobile": {
    develop: "An Ionic app. This repository holds the compiled web build, the chart pages, and the icons, not the TypeScript sources.",
    deploy: "Shipped as a static web app. A web manifest and home-screen icons make it installable on a phone. There is nothing left to compile."
  },
  "FLR": {
    develop: "A Chrome extension, manifest version 3. A content script reads the Freelancer page, and a side panel plus a background service worker hold the rest.",
    deploy: "Installed in Chrome from the unpacked folder. There is no store listing and no server to deploy."
  },
  "glowsenior-drivereasy": {
    develop: "Not an application. It is a written diagnosis of a DriverEasy failure, plus a DriverEasy archive for a machine that has no network drivers.",
    deploy: "Nothing is deployed. The archive is copied onto the offline Windows machine."
  },
  "1111sn7": {
    develop: "A Python Bittensor subnet. Miners and validators implement the game, and btcli is how you register and connect them.",
    deploy: "The docs walk through a local run, then testnet, then mainnet. Mainnet registration locks TAO and emits real TAO, so the recommended path is local, then testnet, before mainnet."
  },
  "scraping": {
    develop: "No program. The repository is saved HTML from CoinGecko coin pages.",
    deploy: "Open the HTML files. There is no build and no server."
  },
  "ragieAI-mythology": {
    develop: "Python 3.11. Scrapy crawls the essays, Ragie stores them for retrieval, OpenAI writes the answer, and Voiceflow holds the conversation and the chat window.",
    deploy: "Replit runs python3 main.py. The deployment target is a container on port 5000, published on port 80. The chat window itself is hosted by Voiceflow."
  },
  "MultiFindtune": {
    develop: "Python training code on top of PyTorch, Transformers, TRL, and PEFT. QLoRA configs cover Qwen3 4B and 8B. Affinetes, in Docker, hosts the SWE-SYNTH tasks.",
    deploy: "Trained on one 80GB GPU or two 40GB GPUs, with DeepSpeed ZeRO-2 as an option. It is a training run, not a public service."
  },
  "agent-rl-train": {
    develop: "Python. A trainer runs supervised fine-tuning and then GRPO against terminal environments. SWE-SYNTH and LIVEWEB are wrapped behind one interface, and Affinetes runs them in Docker.",
    deploy: "Run on a machine with the training config and an API key. The environments come up as containers. There is no web deployment."
  },
  "Print_RL_Dataset_Maker": {
    develop: "Plain Python scripts. One merges conversation samples, another executes the programs and records stdout.",
    deploy: "Run the scripts where Python can execute the samples. No service is packaged."
  },
  "Powerful-SWE-SYNTH-RL-Training": {
    develop: "Python trainers for supervised fine-tuning, GRPO, and a step-level REINFORCE path. Affinetes loads the SWE-SYNTH environment.",
    deploy: "The setup script targets Ubuntu with an NVIDIA GPU, CUDA 12, and Docker. Each task runs inside a container. Nothing is published as a website."
  },
  "FAST": {
    develop: "A Python package extending the verl trainer, with model code for Qwen2-VL and Qwen3-VL and a reward for the thinking trace.",
    deploy: "Installed from the repo and trained on GPUs. Finished weights are aimed at ModelScope. There is no application server."
  },
  "lobehub": {
    develop: "A TypeScript workspace: a web app, a desktop app, and packages for chat, knowledge, memory, and model providers.",
    deploy: "Docker Compose files cover a deploy stack, a dev stack, and a production stack with Grafana. The desktop app is built from its own app folder."
  },
  "qwen-coder-company-site": {
    develop: "No source. The only file is empty.",
    deploy: "Nothing to deploy."
  },
  "JS-releases": {
    develop: "This repository is not the app source. It is the release channel for Call Support, a Windows overlay built with Electron.",
    deploy: "GitHub Releases hosts the installer, CallSupport-Setup. The desktop app updates itself from this repository with electron-updater, including delta updates. The download button on call.job-offer.app points at the latest release. The installer is unsigned, so Windows SmartScreen warns on first run."
  },
  "ccleaner": {
    develop: "No application code.",
    deploy: "Nothing to deploy."
  },
  "scrap_u_e": {
    develop: "No files.",
    deploy: "Nothing to deploy."
  },
  "glowsenior": {
    develop: "A profile README, a table of tool icons. No build step.",
    deploy: "GitHub renders it on the profile page."
  },
  "three.js": {
    develop: "A JavaScript library. The core renderers are WebGL and WebGPU, with SVG and CSS3D as addons.",
    deploy: "Published on npm. The examples, docs, and manual are served at threejs.org."
  },
  "halo": {
    develop: "A Java application for writing and publishing a site, with themes and plugins.",
    deploy: "Self-hosted. The usual path is the Docker image, and the project site is halo.run."
  },
  "eigent": {
    develop: "A desktop app on the CAMEL agent framework. You assemble agents and hand them work from one window.",
    deploy: "Shipped as a downloadable desktop application from eigent.ai."
  },
  "cortex": {
    develop: "A Rust command-line agent. The model is fine-tuned through a public incentive, and the CLI is how you run it.",
    deploy: "Distributed as GitHub releases of the CLI. There is no hosted editor."
  },
  "platform": {
    develop: "A Rust Bittensor subnet. Validators score miners across several challenges at once.",
    deploy: "Run as subnet software: miners and validators join the Bittensor network. It is not a website you deploy."
  },
  "react-easy-edit": {
    develop: "A React component. Click a value, edit it in place, then save or cancel.",
    deploy: "Published on npm as react-easy-edit. The documentation site is a GitBook."
  },
  "op-platform-management": {
    develop: "A TypeScript platform. The repository contains the chat, project, CRM, HR, and hiring applications that products are built on.",
    deploy: "The hosted product is huly.io. The platform can also be self-hosted; the docs point people who only want to run it, and not change it, at a separate install path."
  },
  "op-MyAgents": {
    develop: "A desktop agent with tool use and chat-bot access, for macOS 13 and Windows 10 or later.",
    deploy: "A one-step desktop install. The download is offered from myagents.io."
  },
  "op-agency-agents": {
    develop: "A set of role files. Each one is a specialist prompt with a process and a deliverable.",
    deploy: "No build. You copy a role into an agent that accepts instructions."
  },
  "op-code-assistant": {
    develop: "Rust, with a terminal and a graphical window. Tool calls adapt to the model, and the same binary can speak MCP and ACP.",
    deploy: "Built from source. GitHub Actions runs the build. You run the binary locally."
  },
  "op-carrycode": {
    develop: "A Rust terminal agent with themes, syntax highlighting, and connections to many model providers, plus MCP for extra tools.",
    deploy: "The agent is the terminal binary. A VS Code extension is shipped as a vsix, and the product site is carrycode.ai."
  },
  "op-ripperdoc": {
    develop: "Python 3.10 or newer. The agent runs in the terminal and is built to be extended.",
    deploy: "Published on PyPI. The docs are a static site at ripperdoc-docs.pages.dev."
  },
  "op-SWE-AF": {
    develop: "Python 3.12. A group of agents share the AgentField runtime so one can plan, others can code and test, and the result is a pull request.",
    deploy: "Run on AgentField. The project is in public beta, and the site is agentfield.ai."
  },
  "op-talkcody": {
    develop: "A TypeScript desktop agent. You point it at a hosted model or a local one, and it can run several pieces of work at once.",
    deploy: "Desktop releases on GitHub. The product site is talkcody.com."
  },
  "op-Open-AgentRL": {
    develop: "Python training code for agents: GRPO, PPO, and RLHF, with multi-turn tool use and distributed runs.",
    deploy: "Trained on your own machines. Model checkpoints are published as a Hugging Face collection."
  },
  "op-swift": {
    develop: "Python, on PyTorch 2 and Python 3.11. It fine-tunes language and multimodal models with full parameters or PEFT, including SFT, DPO, and GRPO.",
    deploy: "Installed from PyPI as ms-swift. Docs are on Read the Docs, and the model hub is ModelScope."
  },
  "op-Scrapling": {
    develop: "A Python library. Fetchers, parsers, and the adaptive selectors are one package, from a single request up to a crawl.",
    deploy: "Installed as a Python package. The documentation is on Read the Docs."
  },
  "op-easy-kota": {
    develop: "A Rust agent with a small core and extension points for skills, tools, hooks, and plugins.",
    deploy: "Published on crates.io as kota, with API docs on docs.rs. You run the binary locally."
  },
  "op-ASTRA": {
    develop: "Python research code for multi-step red-teaming of AI coding assistants. It was the winning attack entry in Amazon’s Nova AI challenge.",
    deploy: "The code and the paper are the release. A project site documents the method. There is no product server."
  },
  "op-10x-Tool-Calls": {
    develop: "A rules file plus a short Python prompt. After a task, the prompt asks for the next instruction and feeds it back to the agent.",
    deploy: "Dropped into Cursor, Windsurf, or another agent that supports tool calls. Nothing is hosted."
  },
  "bt-affinetes": {
    develop: "A Python library. An environment is an env.py file, and Affinetes wraps it with a Docker image and an HTTP API.",
    deploy: "You load a prebuilt image or build one, then run replicas in Docker. Remote access uses an SSH tunnel. The repo description also marks it as Kubernetes-compatible."
  }
};

const FACTS = [
  { keys: ["who", "name", "aldrey", "about"], text: "Aldrey Canlas, AI Engineer. Senior AI Engineer at Cognizant since August 2024. GitHub: github.com/glowsenior." },
  { keys: ["school", "university", "nus", "singapore", "degree", "education", "study"], text: "National University of Singapore, Bachelor’s Degree in Computational Science, January 2016 to January 2019." },
  { keys: ["cognizant", "senior", "current", "job", "work"], text: "Senior AI Engineer at Cognizant, Inc., full-time, August 2024 to September 2026, United States, remote. Listed skills: Python and JavaScript." },
  { keys: ["devtechnology", "dev technology", "react"], text: "Full stack and AI Engineer at DevTechnology Group, Inc., contract, June 2022 to July 2024, United States, remote. Listed skills: JavaScript and React.js." },
  { keys: ["alpha", "sydney", "australia"], text: "Software Engineer at Alpha Mu Digital, contract, May 2020 to May 2022, Sydney, remote. Listed skills: web engineering and Python." },
  { keys: ["dashlabs", "intern", "manila", "yc"], text: "Software Engineer Intern at Dashlabs.ai (YC W21), full-time, February 2019 to March 2020, Manila, remote." },
  { keys: ["fork", "three", "halo", "eigent"], text: "Forks are other people’s projects. three.js is a fork of mrdoob/three.js, halo is a fork of halo-dev/halo, and eigent is a fork of eigent-ai/eigent. This account has no commits on those forks." },
  { keys: ["lobehub", "lobe"], text: "LobeHub is a workspace for finding and working with agent teammates, with chat, a desktop app, knowledge, and memory." },
  { keys: ["github", "repos", "repositories", "glowsenior"], text: "Public code is at github.com/glowsenior. This page lists those repositories. Forks stay labeled with their upstream." }
];

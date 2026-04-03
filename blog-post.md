# Why I Built Almond: A Project Management Template Born from Coffee and Frustration

There's a particular kind of clarity that comes at 6 AM with a cup of black coffee and a blank code editor. No Slack notifications. No meetings. Just the hum of a laptop and the quiet conviction that something simple would work better than everything that already exists.

Almond started in one of those mornings.

## The Problem That Wouldn't Go Away

I've tried every project management tool out there. Trello. Asana. Jira. Linear. Monday. The list goes on. Each one does something well. Each one also does a hundred things I don't need, and charges me monthly for the privilege of ignoring them.

What I actually wanted was something small. A dashboard to see what's happening. A kanban board to move tasks around. A settings page to configure a project. That's it. No integrations marketplace. No AI assistant. No gantt charts nested inside gantt charts.

I wanted something I could host myself, customize to my taste, and not think about billing for.

It didn't exist. So I built it.

## Why "Almond"

The name came from the color palette, if I'm being honest. I was staring at a bag of raw almonds while thinking about design tokens. The warm cream tones felt right for something that was supposed to be calm and functional rather than loud and gamified.

But the more I worked on it, the more the name fit in other ways. Almonds are simple. They don't need much. They go with everything. That's the kind of template I wanted to make.

## Design Philosophy: The Dashboard You'd Actually Open

Most admin templates look like they were designed to impress in a product screenshot and then never touched again. Dense grids of widgets. Charts that update with fake data. Every possible UI component crammed into a single page to show off the component library.

I wanted the opposite.

**Start with the information that matters.** The dashboard shows four numbers: total projects, in progress, completed, pending tasks. That's your morning briefing. Everything else is secondary.

**Navigation should feel like a place, not a menu.** The dark brown secondary navbar isn't just aesthetic. It creates a sense of context. You know where you are. Dashboard, Kanban, Files, Reports. It's spatial, not hierarchical.

**Interactions should be obvious.** The kanban board uses drag-and-drop because that's how you'd move a sticky note. The settings page tracks completion percentage because people want to know when they're done. No tooltips explaining how to use a button. If you need a tooltip, the button isn't clear enough.

**Colors earn their place.** Every color in Almond has a job. Green means action and progress. Warm cream means calm and readable. Dark brown means navigation and structure. Nothing is decorative. If a color doesn't communicate something, it doesn't belong.

## The Self-Hosting Case

I know what you're thinking. "Just use Notion." And yes, Notion is great. But there's a category of projects — side projects, client work, personal experiments — where putting your data on someone else's servers feels like overkill. Or underkill, depending on how you think about it.

Self-hosting a static HTML template is about as simple as it gets. No database. No server-side language. No Docker containers. Just files on a web server. Run `npm run build`, point your hosting at the output, and you're live.

You can host Almond on GitHub Pages, Netlify, Vercel, a $5 VPS, or a Raspberry Pi in your closet. It doesn't care. It's just HTML, CSS, and JavaScript.

## The Tech Stack (Or Lack Thereof)

I kept the dependencies minimal on purpose:

- **Tailwind CSS** for styling. Because writing custom CSS for a dashboard is a rabbit hole I didn't want to fall into again.
- **Alpine.js** for interactivity. It's 15KB. It does what jQuery promised but with a modern declarative syntax. No build step required for the logic, just the markup.
- **Vite** for development and builds. Fast, simple, doesn't get in the way.

That's it. No React. No Vue. No state management library. No routing framework. The pages are separate HTML files. Links between them are regular `<a>` tags. It's boring technology, and that's the point.

I considered adding a component library early on. Pulled in Flowbite, even configured it. Then I looked at the actual pages and realized I wasn't using any of it. Every piece of UI was hand-written with Tailwind utilities. So I removed it. Less to install, less to break, less to load.

## What You Can Do With It

Almond is a starting point, not a finished product. Here are some things people have told me they're using it (or want to use it) for:

- **Freelancer project tracker** — one instance per client, dashboards for status updates
- **Internal team tool** — kanban board for a small dev team that doesn't need Jira's complexity
- **Personal task manager** — stripped-down, self-hosted alternative to Todoist
- **Portfolio project pages** — the settings page works well as a project detail view
- **Teaching tool** — clean enough HTML to use in a web development course

## What's Next

I'm keeping this intentionally small. The template will stay free and open source under the MIT license. No premium tier. No "pro" version with the features you actually want.

If I add anything, it'll be small things. Maybe a files page. Maybe a simple reports view. Maybe a couple more color schemes. But the core promise stays the same: a project management template that's quick to set up, free to use, and yours to control.

## Get Started

```bash
git clone https://github.com/your-username/almond-template.git
cd almond-template
npm install
npm run dev
```

That's it. You're looking at the dashboard.

The whole thing is under 500 lines per page. Read it. Change it. Make it yours.

---

*Almond is available on GitHub under the MIT license. If you build something with it, I'd love to hear about it.*

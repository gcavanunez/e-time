import Parser from "rss-parser";

import { db } from "@acme/db";

async function run() {
  const links = [
    "https://www.greenbiz.com/rss.xml",
    "https://sustainablebrands.com/rss",
    "https://greenblue.org/feed/",
    "https://recycle.com/feed/",
  ];
  const parser = new Parser();
  for (const link of links) {
    const feed = await parser.parseURL(link);
    console.log(feed);
  }
  await db.query.post.findFirst({ where: ({ id }, { eq }) => eq(id, 11) });
}

run();

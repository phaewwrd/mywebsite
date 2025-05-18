type Post = {
  title: string;
  content: string
  createdAt: Date;
};

export const posts: Post[] = [
  {
    title: "Learn Next.js",
    content: "Next.js is a React framework for production",
    createdAt: new Date("2025-04-01"),
  },
  {
    title: "Something else",
    content: "This is a test",
    createdAt: new Date("2025-04-01"),
  },
  {
    title: "Learn React",
    content: "React is a JavaScript library for building user interfaces",
    createdAt: new Date("2025-04-01"),
  },
 
];

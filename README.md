# Auth App

A modern authentication application built with Next.js 15, featuring a beautiful UI and robust authentication system.

## Features

- 🔐 Secure authentication system
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 📱 Responsive design
- 🎯 Form validation with React Hook Form and Zod
- 🗃️ Database integration with Prisma
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Database:** Prisma
- **Authentication:** JWT (jsonwebtoken)
- **Form Handling:** React Hook Form + Zod
- **Data Fetching:** Axios
- **State Management:** React Hooks

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- Yarn or npm
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/auth-app.git
cd auth-app
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables:

```env
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
```

4. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `yarn dev` - Starts the development server
- `yarn build` - Builds the app for production
- `yarn start` - Runs the built app in production mode
- `yarn lint` - Runs ESLint to check code quality

## Project Structure

```
auth-app/
├── src/              # Source files
├── public/           # Static files
├── prisma/          # Database schema and migrations
├── components/      # Reusable components
└── ...
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Prisma](https://www.prisma.io)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

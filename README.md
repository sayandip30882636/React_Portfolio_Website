
# Personal Portfolio Website

This is a modern, responsive, and feature-rich personal portfolio website built with React, TypeScript, and Tailwind CSS. It's designed to showcase skills, projects, and blog posts in a clean and professional manner.

![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge) <!-- Add your live demo link here -->

![Project Screenshot](https://picsum.photos/seed/portfolio-screenshot/1200/600)
*(Replace this placeholder with a screenshot of your portfolio)*

---

## ✨ Features

- **Modern & Responsive Design**: A clean, card-based layout that looks great on all devices, from mobile phones to desktops.
- **Light & Dark Mode**: A theme toggle that allows users to switch between light and dark modes, with their preference saved in local storage.
- **Dynamic Content**: Easily update skills, projects, and blog posts by modifying a single `constants.ts` file.
- **Interactive Project Cards**: Featured projects are displayed with images, descriptions, and tags, and each card links directly to its GitHub repository.
- **AI-Powered Blog Summaries**: An "AI Summarize" button on each blog post that uses the Hugging Face API to generate a concise summary of the content on-the-fly.
- **Client-Side Routing**: Smooth navigation between Home and Blog pages using React Router.
- **Built with Modern Tech**: Leverages the power of React, TypeScript for type safety, and Tailwind CSS for rapid, utility-first styling.

---

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, HTML5
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **APIs**: Hugging Face Inference API (for text summarization)
- **Deployment**: Can be deployed on any static site hosting service (e.g., Vercel, Netlify, GitHub Pages).

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Configuration

The project requires an API token from Hugging Face to power the "AI Summarize" feature.

1.  **Get a Hugging Face API Token:**
    - Go to the [Hugging Face website](https://huggingface.co/).
    - Sign up or log in.
    - Navigate to your profile settings -> "Access Tokens" to get your API token.

2.  **Set up the API Token:**
    - In the `components/BlogPostCard.tsx` file, you will find a placeholder for the API token:
      ```typescript
      const HUGGING_FACE_API_TOKEN = 'YOUR_HUGGING_FACE_API_TOKEN';
      ```
    - **(Recommended for security)** For a real-world application, it's best to store this token in an environment variable. Create a `.env` file in the root of your project and add the following line:
      ```
      VITE_HUGGING_FACE_API_TOKEN=your_token_here
      ```
      Then, you would access it in your code like this: `import.meta.env.VITE_HUGGING_FACE_API_TOKEN`.

### Running the Development Server

Start the local development server with this command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified in the console) to view it in your browser.

---

## 🔧 Customization

All the portfolio content (skills, projects, and blog posts) is centralized in the `src/constants.ts` file. You can easily customize the portfolio by editing this file.

-   **`SKILLS`**: An array of strings representing your skills.
-   **`PROJECTS`**: An array of `Project` objects. Update this to showcase your own work.
-   **`BLOG_POSTS`**: An array of `BlogPost` objects for your blog entries.

---

## 📂 File Structure

```
src/
├── components/         # Reusable React components (Header, Footer, Cards, etc.)
├── constants.ts        # Centralized data for skills, projects, and blog posts
├── contexts/           # React contexts (e.g., ThemeContext)
├── pages/              # Page components (HomePage, BlogPage)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component with routing
├── index.css           # Global styles
├── index.tsx           # Entry point of the React application
└── ...
```

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 👤 Contact

**Sayandip Ghosh**

-   **GitHub**: [@sayandip30882636](https://github.com/sayandip30882636)
-   **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile/) <!-- Add your LinkedIn link -->


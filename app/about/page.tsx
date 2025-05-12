import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Обо мне",
    description: "Страница обо мне",
  };

export default function About() {
    return (
        <h1>
            About me
        </h1>
    );
};

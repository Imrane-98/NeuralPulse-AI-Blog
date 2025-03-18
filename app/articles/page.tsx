"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Clock, Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"

// Static article data for GitHub Pages
const articles = [
  {
    title: "The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3",
    description:
      "Explore the development of GAN architectures, highlighting key milestones like Progressive GAN, StyleGAN-1, StyleGAN-2, and the latest advancements in StyleGAN-3.",
    category: "GenAI",
    date: "May 15, 2023",
    slug: "evolution-of-gans",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "AI in 2025: Transforming Daily Life",
    description:
      "Discuss how generative AI has integrated into everyday activities by 2025, providing personal style tips, translating conversations, analyzing diets, and more.",
    category: "Future Tech",
    date: "June 2, 2023",
    slug: "ai-in-2025",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    description:
      "Examine the emergence of multimodal AI models that process and generate multiple data types, such as text, images, and videos, and their applications in various industries.",
    category: "AI Research",
    date: "June 28, 2023",
    slug: "multimodal-ai-models",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
    description:
      "Explore how AI is revolutionizing 3D modeling and virtual world creation, enabling users to transform written prompts into immersive experiences.",
    category: "3D Modeling",
    date: "July 5, 2023",
    slug: "ai-driven-3d-modeling",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "The Integration of AI in Wearable Technology: Enhancing User Experience",
    description:
      "Analyze the incorporation of AI into wearable devices, such as smart glasses, and how it enhances user interaction through features like real-world navigation and information accessibility.",
    category: "Wearable Tech",
    date: "July 18, 2023",
    slug: "ai-in-wearable-technology",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Computer Vision in Autonomous Vehicles",
    description:
      "Exploring how computer vision algorithms are enabling self-driving cars to perceive and navigate complex environments.",
    category: "Computer Vision",
    date: "August 3, 2023",
    slug: "computer-vision-autonomous-vehicles",
    image: "https://images.unsplash.com/photo-1563630381190-77c336ea545a?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Deep Learning for Natural Language Processing",
    description: "How transformer models have revolutionized our ability to understand and generate human language.",
    category: "NLP",
    date: "August 15, 2023",
    slug: "deep-learning-nlp",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Ethical Considerations in Generative AI",
    description:
      "Examining the ethical implications of AI-generated content and the responsibility of AI researchers and practitioners.",
    category: "AI Ethics",
    date: "September 2, 2023",
    slug: "ethical-considerations-genai",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "The Future of AI Research: What's Next?",
    description:
      "Predictions and insights into the next frontiers of artificial intelligence research and development.",
    category: "Future of AI",
    date: "September 20, 2023",
    slug: "future-of-ai-research",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop",
  },
]

export default function ArticlesPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Neural<span className="text-purple-500">Pulse</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/articles/" className="text-white transition-colors border-b-2 border-purple-500 pb-1">
              Articles
            </Link>
            <Link href="/topics/" className="text-gray-400 hover:text-white transition-colors">
              Topics
            </Link>
            <Link href="/about/" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-950 hover:text-white"
            onClick={handleSubscribeClick}
          >
            Subscribe
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8">All Articles</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                slug={article.slug}
                image={article.image}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                Neural<span className="text-purple-500">Pulse</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Exploring the cutting edge of artificial intelligence and machine learning.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Generative AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Deep Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Machine Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Code Samples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Datasets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ameyaudeshmukh@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} NeuralPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArticleCard({ title, description, category, date, slug = "", image }) {
  return (
    <Link href={`/blog/${slug}/`} className="group">
      <div className="space-y-3">
        <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-colors">
          <Image src={image || "/placeholder.svg"} alt={`${title} thumbnail`} fill className="object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-purple-500 mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>{category}</span>
          </div>
          <h3 className="font-medium group-hover:text-purple-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}


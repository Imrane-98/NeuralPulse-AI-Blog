"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

// This is a static mapping of blog posts for GitHub Pages
const blogPosts = {
  "evolution-of-gans": {
    title: "The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3",
    date: "May 15, 2023",
    author: "Dr. Alex Chen",
    category: "GenAI",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Generative Adversarial Networks (GANs) have revolutionized the field of artificial intelligence since their introduction by Ian Goodfellow and his colleagues in 2014. These networks consist of two neural networks—a generator and a discriminator—that are trained simultaneously through adversarial training.</p>
      
      <h2>The Original GAN</h2>
      <p>The original GAN architecture introduced a novel approach to generative modeling. The generator network creates samples (such as images), while the discriminator network evaluates them. The generator aims to produce samples that are indistinguishable from real data, while the discriminator aims to correctly identify which samples are real and which are generated.</p>
      
      <p>However, early GANs faced significant challenges, including training instability, mode collapse (where the generator produces limited varieties of samples), and difficulty in generating high-resolution images.</p>
      
      <h2>Progressive GAN: A Step Forward</h2>
      <p>In 2017, researchers at NVIDIA introduced Progressive GAN, which addressed many of the limitations of the original architecture. Progressive GAN employed a training methodology where both the generator and discriminator start with low-resolution images and gradually add layers that deal with higher-resolution details.</p>
      
      <p>This progressive training approach significantly improved training stability and enabled the generation of higher-resolution images (up to 1024×1024 pixels) with impressive detail and realism.</p>
      
      <h2>StyleGAN: Controlling Image Synthesis</h2>
      <p>Building upon Progressive GAN, NVIDIA researchers introduced StyleGAN in 2018. StyleGAN incorporated a style-based generator architecture that offered unprecedented control over the generated images' features. It separated high-level attributes (such as pose and face shape) from stochastic variations (such as freckles and hair details).</p>
      
      <p>StyleGAN introduced several key innovations:</p>
      <ul>
        <li>A mapping network that transforms the input latent code into an intermediate latent space</li>
        <li>Adaptive instance normalization (AdaIN) to control the style at each convolution layer</li>
        <li>Stochastic variation injection to add randomness to the generated images</li>
      </ul>
      
      <h2>StyleGAN-2: Refining the Architecture</h2>
      <p>In 2020, NVIDIA released StyleGAN-2, which addressed several artifacts present in the original StyleGAN, such as "blob" artifacts and water-like features. StyleGAN-2 redesigned the normalization, regularization, and progressive growing components, resulting in significantly improved image quality.</p>
      
      <p>Key improvements in StyleGAN-2 included:</p>
      <ul>
        <li>Redesigned normalization technique</li>
        <li>Path length regularization</li>
        <li>No progressive growing (replaced with a residual network design)</li>
      </ul>
      
      <h2>StyleGAN-3: Addressing Aliasing</h2>
      <p>The latest iteration, StyleGAN-3 (2021), focuses on eliminating "texture sticking," a phenomenon where texture features remain fixed to image coordinates rather than moving naturally with objects. This was achieved by redesigning the architecture to be more translation and rotation equivariant.</p>
      
      <p>StyleGAN-3 introduces:</p>
      <ul>
        <li>Alias-free generative networks</li>
        <li>Fourier features for improved equivariance</li>
        <li>Filtered non-linearities to prevent aliasing</li>
      </ul>
      
      <h2>Impact and Applications</h2>
      <p>The evolution of GANs from the original architecture to StyleGAN-3 has enabled numerous applications:</p>
      <ul>
        <li>Photorealistic image generation</li>
        <li>Image-to-image translation</li>
        <li>Face editing and manipulation</li>
        <li>Virtual try-on systems</li>
        <li>Data augmentation for training other AI models</li>
      </ul>
      
      <h2>Future Directions</h2>
      <p>As GAN technology continues to evolve, we can expect further improvements in areas such as:</p>
      <ul>
        <li>Multi-modal generation (combining text, image, and other modalities)</li>
        <li>Improved control over generated content</li>
        <li>Reduced computational requirements</li>
        <li>Better integration with other AI techniques</li>
      </ul>
      
      <p>The journey from GAN to StyleGAN-3 represents a remarkable progression in generative modeling, enabling increasingly realistic and controllable image synthesis. As these technologies continue to mature, they will undoubtedly open new possibilities across various domains, from entertainment and art to healthcare and scientific visualization.</p>
    `,
    relatedPosts: [
      {
        title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
        category: "AI Research",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "multimodal-ai-models",
      },
      {
        title: "AI in 2025: Transforming Daily Life",
        category: "Future Tech",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ai-in-2025",
      },
    ],
  },
  "multimodal-ai-models": {
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    date: "February 5, 2024",
    author: "Dr. Michael Zhang",
    category: "AI Research",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Artificial intelligence has undergone a remarkable evolution in recent years, with one of the most significant developments being the rise of multimodal AI models. These sophisticated systems can process, understand, and generate content across multiple types of data—or modalities—such as text, images, audio, and video.</p>
      
      <h2>Understanding Multimodal AI</h2>
      <p>Traditional AI models were typically designed to work with a single type of data. Text-based models like GPT processed and generated language, while image-based models like DALL-E created visual content. These single-modality models, while powerful in their domains, were limited by their inability to connect concepts across different types of information.</p>
      
      <p>Multimodal AI models break down these barriers by integrating multiple types of data into a unified system. They can understand the relationships between text and images, audio and video, or any combination of modalities.</p>
      
      <h2>Key Multimodal AI Models</h2>
      <p>Several groundbreaking multimodal AI models have emerged in recent years:</p>
      
      <ul>
        <li><strong>GPT-4V</strong>: Building on the language capabilities of GPT-4, this model can process both text and images</li>
        <li><strong>CLIP</strong>: Developed by OpenAI, CLIP learns visual concepts from natural language supervision</li>
        <li><strong>DALL-E 3</strong>: This model generates highly detailed and accurate images from text prompts</li>
        <li><strong>Flamingo</strong>: Google DeepMind's model can process interleaved text and images</li>
        <li><strong>AudioLM and MusicLM</strong>: These models bridge text and audio, generating realistic speech or music</li>
      </ul>
      
      <h2>Technical Foundations</h2>
      <p>The development of multimodal AI has been enabled by several technical innovations:</p>
      
      <p><strong>Transformer Architecture</strong>: Originally developed for natural language processing, transformers have proven remarkably adaptable to other modalities.</p>
      
      <p><strong>Joint Embeddings</strong>: Multimodal models create unified representations that capture the meaning of content across different modalities in a shared mathematical space.</p>
      
      <p><strong>Contrastive Learning</strong>: This training approach helps models learn the relationships between different modalities.</p>
      
      <h2>Applications of Multimodal AI</h2>
      <p>The ability to process multiple types of data has opened up numerous applications across various industries:</p>
      
      <h3>Content Creation and Editing</h3>
      <p>Multimodal AI is revolutionizing creative workflows by enabling text-to-image generation, automatic video captioning, and sophisticated editing tools.</p>
      
      <h3>Accessibility</h3>
      <p>These models are making digital content more accessible by automatically generating alternative text for images, creating captions for videos, and translating content between modalities.</p>
      
      <h3>Healthcare</h3>
      <p>In medical settings, multimodal AI can analyze patient data across different formats to assist in diagnosis, treatment planning, and monitoring.</p>
      
      <h2>Challenges and Future Directions</h2>
      <p>Despite their impressive capabilities, multimodal AI models face several challenges including computational requirements, data quality and bias, and alignment between modalities.</p>
      
      <p>As research in this field continues to advance, we can expect more modalities to be incorporated, deeper cross-modal understanding, and integration with robotics to allow multimodal AI to interact with the physical world.</p>
    `,
    relatedPosts: [
      {
        title: "The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3",
        category: "GenAI",
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "evolution-of-gans",
      },
      {
        title: "Deep Learning for Natural Language Processing",
        category: "NLP",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "deep-learning-nlp",
      },
    ],
  },
  "ai-in-2025": {
    title: "AI in 2025: Transforming Daily Life",
    date: "October 18, 2023",
    author: "Dr. Sarah Johnson",
    category: "Future Tech",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>As we approach 2025, artificial intelligence has become deeply integrated into our daily lives in ways that were once the realm of science fiction. From personal assistants that anticipate our needs to AI systems that help us make better decisions, the technology has transformed how we live, work, and interact with the world around us.</p>
      
      <h2>Personal AI Assistants: Beyond Voice Commands</h2>
      <p>Personal AI assistants have evolved far beyond simple voice-activated helpers. In 2025, these systems understand context, remember past interactions, and proactively offer assistance based on your habits, preferences, and current situation.</p>
      
      <p>These assistants have become truly personal, adapting to individual communication styles and preferences. They can manage complex tasks like negotiating appointment times with other AI assistants, researching and summarizing information across multiple sources, and even handling routine correspondence in your personal communication style.</p>
      
      <h2>AI in Healthcare: Personalized and Preventative</h2>
      <p>Healthcare has been revolutionized by AI's ability to process vast amounts of medical data and identify patterns invisible to human practitioners. By 2025, AI systems routinely analyze data from wearable devices to detect potential health issues before symptoms appear.</p>
      
      <p>Personalized treatment plans, tailored to an individual's genetic makeup, lifestyle, and medical history, have become standard. AI systems can predict how patients will respond to specific medications or treatments, reducing trial and error in healthcare.</p>
      
      <h2>AI in Education: Personalized Learning Journeys</h2>
      <p>Education in 2025 has been transformed by AI systems that adapt to each student's learning style, pace, and interests. These systems identify knowledge gaps, suggest appropriate resources, and adjust difficulty levels in real-time to keep students engaged and challenged without becoming frustrated.</p>
      
      <h2>AI in the Workplace: Augmenting Human Capabilities</h2>
      <p>In the workplace, AI has become an indispensable partner, handling routine tasks and augmenting human capabilities. AI systems analyze data, generate reports, schedule meetings, and even draft correspondence, allowing workers to focus on creative problem-solving, strategic thinking, and interpersonal relationships.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite the benefits, the integration of AI into daily life has not been without challenges. Privacy concerns, algorithmic bias, and the digital divide remain significant issues. Ensuring that AI systems respect user privacy, make fair and unbiased decisions, and are accessible to all segments of society requires ongoing attention and effort.</p>
      
      <h2>Conclusion</h2>
      <p>As we navigate this AI-enhanced world of 2025, the technology continues to evolve, becoming more sophisticated, more intuitive, and more integrated into the fabric of daily life. The most successful AI implementations are those that complement human strengths, handle routine tasks, and provide insights and assistance while allowing humans to focus on what they do best.</p>
    `,
    relatedPosts: [
      {
        title: "The Future of AI Research: What's Next?",
        category: "Future of AI",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "future-of-ai-research",
      },
      {
        title: "Ethical Considerations in Generative AI",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ethical-considerations-genai",
      },
    ],
  },
  "deep-learning-nlp": {
    title: "Deep Learning for Natural Language Processing",
    date: "November 7, 2024",
    author: "Dr. Lisa Park",
    category: "NLP",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Natural Language Processing (NLP) has undergone a revolutionary transformation in recent years, driven largely by advances in deep learning. These powerful neural network approaches have dramatically improved machines' ability to understand, generate, and interact with human language.</p>
      
      <h2>The Evolution of NLP: From Rules to Neural Networks</h2>
      <p>To appreciate the impact of deep learning on NLP, it's helpful to understand how the field has evolved:</p>
      
      <h3>Rule-Based Systems (1950s-1980s)</h3>
      <p>Early NLP systems relied on hand-crafted rules and linguistic knowledge. While these approaches could handle specific, well-defined tasks, they struggled with language's inherent ambiguity.</p>
      
      <h3>Statistical Methods (1990s-2000s)</h3>
      <p>The next wave of NLP introduced statistical approaches like Hidden Markov Models and Conditional Random Fields. These methods learned patterns from data rather than relying solely on explicit rules.</p>
      
      <h3>The Transformer Revolution (2017-Present)</h3>
      <p>The introduction of the Transformer architecture in 2017 marked a watershed moment for NLP. Unlike previous approaches, Transformers process entire sequences in parallel using attention mechanisms, addressing limitations in handling long-range dependencies.</p>
      
      <h2>Key Deep Learning Architectures for NLP</h2>
      <p>Several neural network architectures have proven particularly effective for NLP tasks:</p>
      
      <h3>Transformer Models</h3>
      <p>The Transformer architecture has become the dominant approach in modern NLP, featuring self-attention mechanisms, parallelization, and excellent scalability.</p>
      
      <h3>Pre-trained Language Models</h3>
      <p>Building on the Transformer architecture, pre-trained language models like BERT, GPT, and T5 have revolutionized NLP by learning from vast amounts of text data before being fine-tuned for specific tasks.</p>
      
      <h2>Applications of Deep Learning in NLP</h2>
      <p>Deep learning has transformed numerous NLP applications including machine translation, conversational AI, content generation, and information extraction and retrieval.</p>
      
      <h2>Challenges and Future Directions</h2>
      <p>Despite remarkable progress, deep learning approaches to NLP face several challenges including computational requirements, data needs, reliability issues, and ethical considerations.</p>
      
      <p>Promising research directions include more efficient models, retrieval-augmented generation, improved reasoning capabilities, and deeper integration with other modalities.</p>
    `,
    relatedPosts: [
      {
        title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
        category: "AI Research",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "multimodal-ai-models",
      },
      {
        title: "Ethical Considerations in Generative AI",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ethical-considerations-genai",
      },
    ],
  },
  "future-of-ai-research": {
    title: "The Future of AI Research: What's Next?",
    date: "February 28, 2025",
    author: "Dr. Thomas Anderson",
    category: "Future of AI",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Artificial intelligence has advanced at a breathtaking pace in recent years, with breakthroughs in areas like large language models, diffusion-based image generation, and multimodal systems transforming what we thought possible. As we look to the future of AI research, several promising directions are emerging.</p>
      
      <h2>Beyond Scale: New Paradigms in AI Architecture</h2>
      <p>While scaling neural networks to unprecedented sizes has driven many recent advances, researchers are increasingly exploring alternative approaches:</p>
      
      <h3>Modular and Compositional Architectures</h3>
      <p>Rather than monolithic models, future AI systems may consist of specialized modules that can be dynamically composed, including Mixture of Experts (MoE) models, neural symbolic integration, and modular training approaches.</p>
      
      <h3>Self-Supervised and Unsupervised Learning</h3>
      <p>Moving beyond supervised learning with labeled data, researchers are developing more sophisticated approaches to learning from unlabeled data, such as contrastive learning, masked prediction, and energy-based models.</p>
      
      <h2>Embodied AI and Robotics</h2>
      <p>Moving beyond disembodied models that process text or images, researchers are increasingly focusing on AI systems that can interact with the physical world:</p>
      
      <h3>Physical Grounding</h3>
      <p>Embodied AI research explores how physical interaction shapes intelligence through sensorimotor learning, multimodal integration, and affordance learning.</p>
      
      <h3>Human-Robot Collaboration</h3>
      <p>Rather than fully autonomous systems, many researchers are focusing on robots that can work alongside humans with intuitive interfaces, shared autonomy, and adaptive assistance.</p>
      
      <h2>AI for Scientific Discovery</h2>
      <p>AI is increasingly being applied to accelerate scientific research across disciplines through automated experimentation, scientific foundation models, and advanced simulation and modeling.</p>
      
      <h2>Human-AI Collaboration and Augmentation</h2>
      <p>Beyond autonomous systems, researchers are exploring how AI can enhance human capabilities through cognitive augmentation, interpretable AI, and adaptive interfaces.</p>
      
      <h2>Ethical and Responsible AI</h2>
      <p>As AI becomes more powerful, ensuring it is developed and deployed responsibly becomes increasingly important, with research focusing on AI alignment, fairness and bias mitigation, and governance frameworks.</p>
    `,
    relatedPosts: [
      {
        title: "Ethical Considerations in Generative AI",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ethical-considerations-genai",
      },
      {
        title: "AI in 2025: Transforming Daily Life",
        category: "Future Tech",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ai-in-2025",
      },
    ],
  },
  "ethical-considerations-genai": {
    title: "Ethical Considerations in Generative AI",
    date: "January 14, 2025",
    author: "Dr. Maya Patel",
    category: "AI Ethics",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>Generative AI has emerged as one of the most transformative technologies of our time, capable of creating text, images, audio, video, and code that increasingly resembles human-created content. While these capabilities offer tremendous potential, they also raise profound ethical questions.</p>
      
      <h2>Understanding Generative AI</h2>
      <p>Generative AI refers to artificial intelligence systems that can create new content rather than simply analyzing or categorizing existing data. Modern generative AI systems have demonstrated remarkable capabilities in generating human-like text, creating photorealistic images, producing music and voice recordings, writing functional computer code, and translating between languages.</p>
      
      <h2>Key Ethical Considerations</h2>
      
      <h3>1. Bias and Fairness</h3>
      <p>Generative AI systems learn from existing data, which inevitably contains societal biases. This raises concerns about amplification of existing biases, representation disparities, and potential discriminatory outcomes.</p>
      
      <h3>2. Misinformation and Manipulation</h3>
      <p>The ability to generate convincing content raises concerns about deepfakes and synthetic media, automated disinformation, and personalized manipulation.</p>
      
      <h3>3. Intellectual Property and Attribution</h3>
      <p>Generative AI raises complex questions about training data rights, output ownership, and impacts on creative labor.</p>
      
      <h3>4. Privacy and Consent</h3>
      <p>These systems raise several privacy concerns including training data privacy, synthetic identity creation, and enhanced surveillance capabilities.</p>
      
      <h2>Ethical Frameworks and Governance Approaches</h2>
      <p>Addressing these ethical considerations requires multifaceted approaches including technical solutions like alignment techniques and safety measures, policy and regulatory approaches, responsible organizational practices, and individual and collective responsibility.</p>
      
      <h2>The Path Forward</h2>
      <p>As generative AI continues to advance, several principles can guide ethical development and deployment including anticipatory governance, shared responsibility across sectors, and human-centered design that augments human capabilities rather than replacing human agency.</p>
    `,
    relatedPosts: [
      {
        title: "The Future of AI Research: What's Next?",
        category: "Future of AI",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "future-of-ai-research",
      },
      {
        title: "Deep Learning for Natural Language Processing",
        category: "NLP",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "deep-learning-nlp",
      },
    ],
  },
  "ai-regulation-landscape-2025": {
    title: "AI Regulation Landscape in 2025: Global Policies and Industry Impact",
    date: "March 1, 2025",
    author: "Dr. Elena Kowalski",
    category: "AI Policy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=2000&h=1000&auto=format&fit=crop",
    content: `
      <p>The regulatory landscape for artificial intelligence has evolved dramatically over the past few years, as governments and international bodies have worked to establish frameworks that balance innovation with safety, privacy, and ethical considerations.</p>
      
      <h2>Major Regulatory Frameworks</h2>
      <p>Several jurisdictions have introduced comprehensive AI regulations aimed at ensuring responsible development and deployment of AI technologies:</p>
      
      <h3>1. The European Union: AI Act</h3>
      <p>The EU AI Act classifies AI systems into risk categories—unacceptable, high-risk, and low-risk—and imposes varying levels of regulatory scrutiny based on these classifications.</p>
      
      <h3>2. United States: AI Bill of Rights and Executive Orders</h3>
      <p>The U.S. has taken a sectoral approach to AI regulation, with federal guidelines emphasizing transparency, fairness, and human oversight in AI applications.</p>
      
      <h3>3. China: AI Governance and Social Stability</h3>
      <p>China has introduced strict AI governance policies, particularly targeting deepfakes, algorithmic recommendations, and large-scale AI deployments.</p>
      
      <h3>4. Global AI Standards and International Cooperation</h3>
      <p>Organizations like the OECD, United Nations, and G7 have worked to establish global AI governance principles emphasizing transparency, fairness, and international cooperation.</p>
      
      <h2>Industry Adaptation and Compliance</h2>
      <p>AI companies have been adjusting their policies, development practices, and risk management strategies to comply with new regulations through responsible AI initiatives and increased focus on explainability.</p>
      
      <h2>Challenges and Future Outlook</h2>
      <p>Despite progress, several challenges remain including regulatory fragmentation across jurisdictions, enforcement complexity, and the ongoing challenge of balancing innovation with responsible deployment.</p>
      
      <p>As AI continues to evolve, regulatory frameworks will need to adapt to emerging risks and opportunities, requiring collaboration between governments, industry leaders, and researchers to ensure AI develops in a way that is both ethical and beneficial to society.</p>
    `,
    relatedPosts: [
      {
        title: "Ethical Considerations in Generative AI",
        category: "AI Ethics",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "ethical-considerations-genai",
      },
      {
        title: "The Future of AI Research: What's Next?",
        category: "Future of AI",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=400&auto=format&fit=crop",
        slug: "future-of-ai-research",
      },
    ],
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const post = blogPosts[params.slug]

  useEffect(() => {
    if (!post) {
      toast({
        title: "Post not found",
        description: "The requested blog post could not be found.",
        variant: "destructive",
      })
    }
  }, [post, toast])

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied",
          description: "The article link has been copied to your clipboard.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Neural<span className="text-purple-500">Pulse</span>
          </Link>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-950 hover:text-white"
            onClick={() => {
              const newsletterSection = document.getElementById("newsletter")
              if (newsletterSection) {
                newsletterSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Subscribe
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/articles/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to articles
          </Link>

          <div className="flex items-center gap-2 text-sm text-purple-500 mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div>{post.date}</div>
            <div>By {post.author}</div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Article hero image showing GAN-generated art"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-800 hover:bg-gray-900"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          <article className="prose prose-invert prose-purple max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link href={`/blog/${relatedPost.slug}/`} className="group" key={index}>
                  <div className="space-y-3">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-colors">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={`${relatedPost.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-purple-500 mb-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-purple-400 transition-colors">{relatedPost.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Neural<span className="text-purple-500">Pulse</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 mb-6">
              Exploring the cutting edge of artificial intelligence and machine learning.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} NeuralPulse. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


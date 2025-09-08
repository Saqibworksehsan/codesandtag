"use client"; 
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, User, Tag, Share2 } from 'lucide-react';
import ShareButtons from '@/components/ShareButtons';

interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  author: string;
  body: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.json`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content) as BlogPost;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const blogDir = path.join(process.cwd(), 'content/blog');
    if (!fs.existsSync(blogDir)) {
      return [];
    }
    
    const files = fs.readdirSync(blogDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => ({
        slug: file.replace('.json', '')
      }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Codes & Tags',
    };
  }

  return {
    title: `${post.title} - Codes & Tags Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            {post.coverImage && (
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="p-8">
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    {post.author}
                  </div>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center mb-6">
                    <Tag className="w-5 h-5 mr-2 text-gray-500" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </header>

              <div className="prose prose-lg max-w-none mb-12">
                {post.body.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <footer className="border-t pt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                    <ShareButtons title={post.title} />
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">Need help with your IP needs?</p>
                    <Button 
                      onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20read%20your%20blog%20and%20need%20help%20with%20intellectual%20property', '_blank')}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Contact Us on WhatsApp
                    </Button>
                  </div>
                </div>
              </footer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
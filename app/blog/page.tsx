import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, User, Tag } from 'lucide-react';

export const metadata = {
  title: 'Blog - Codes & Tags',
  description: 'Latest insights on trademark registration, copyright protection, and intellectual property law in India.',
};

interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  author: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDir = path.join(process.cwd(), 'content/blog');
    if (!fs.existsSync(blogDir)) {
      return [];
    }
    
    const files = fs.readdirSync(blogDir);
    const posts = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
        return JSON.parse(content) as BlogPost;
      })
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Latest insights on trademark, copyright, and intellectual property
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Coming Soon</h2>
            <p className="text-gray-500">We're working on bringing you valuable content about intellectual property.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                {post.coverImage && (
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 mr-2 text-gray-500" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
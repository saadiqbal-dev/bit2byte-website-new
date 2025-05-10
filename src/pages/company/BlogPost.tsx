import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { posts } from '../../data/blog';

export const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <Section className="py-32">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link to="/company/blog" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link to="/company/blog" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article>
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover rounded-lg mb-8"
            />
            
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </Container>
    </Section>
  );
};
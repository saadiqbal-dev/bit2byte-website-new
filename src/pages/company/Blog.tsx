import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { posts } from '../../data/blog';

export const Blog = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Latest Insights"
          subtitle="Stay updated with the latest trends and insights in technology and digital solutions"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link
                      to={`/company/blog/${post.id}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group/btn"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
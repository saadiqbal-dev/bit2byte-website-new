import React from 'react';
import { motion } from 'framer-motion';
import { Code, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { GradientBorder } from '../ui/GradientBorder';
import { SectionTitle } from '../ui/SectionTitle';

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto">
    <code className="text-sm text-slate-300 font-mono">{children}</code>
  </pre>
);

export const AIPaddingAnalysis = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="AI Padding Analysis"
          subtitle="A comprehensive guide to handling padding in AI implementations"
        />

        <div className="space-y-16">
          {/* Common Padding Problems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GradientBorder className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold">Common Padding Problems</h2>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li>• Inconsistent sequence lengths affecting batch processing</li>
                <li>• Information loss due to truncation</li>
                <li>• Memory inefficiency from excessive padding</li>
                <li>• Padding token interference in attention mechanisms</li>
                <li>• Performance degradation in CNN architectures</li>
              </ul>
            </GradientBorder>
          </motion.div>

          {/* Impact on Model Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GradientBorder className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold">Performance Impact</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300">
                  Padding significantly affects model performance in several ways:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Training time increases with excessive padding</li>
                  <li>• Attention mechanisms may focus on padding tokens</li>
                  <li>• Memory usage scales with padded sequence length</li>
                  <li>• Batch processing efficiency depends on padding strategy</li>
                </ul>
              </div>
            </GradientBorder>
          </motion.div>

          {/* Implementation Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GradientBorder className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold">Implementation Examples</h2>
              </div>
              
              <div className="space-y-6">
                {/* Text Padding Example */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Text Sequence Padding</h3>
                  <CodeBlock>
                    {`def pad_sequences(sequences, max_length=None, padding_value=0):
    if max_length is None:
        max_length = max(len(seq) for seq in sequences)
    
    padded_sequences = []
    for seq in sequences:
        if len(seq) > max_length:
            padded_seq = seq[:max_length]
        else:
            padding = [padding_value] * (max_length - len(seq))
            padded_seq = seq + padding
        padded_sequences.append(padded_seq)
    
    return padded_sequences`}
                  </CodeBlock>
                </div>

                {/* Image Padding Example */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Image Padding</h3>
                  <CodeBlock>
                    {`def pad_image(image, target_size, mode='constant'):
    h, w = image.shape[:2]
    target_h, target_w = target_size
    
    pad_h = max(0, target_h - h)
    pad_w = max(0, target_w - w)
    
    pad_top = pad_h // 2
    pad_bottom = pad_h - pad_top
    pad_left = pad_w // 2
    pad_right = pad_w - pad_left
    
    return np.pad(image,
                 ((pad_top, pad_bottom),
                  (pad_left, pad_right),
                  (0, 0)),
                 mode=mode)`}
                  </CodeBlock>
                </div>
              </div>
            </GradientBorder>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GradientBorder className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
                <h2 className="text-2xl font-bold">Best Practices</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Text Data</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Use dynamic batch sizing when possible</li>
                    <li>• Implement attention masking</li>
                    <li>• Consider truncation strategies carefully</li>
                    <li>• Use efficient padding tokens</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Image Data</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Use reflection padding for CNNs</li>
                    <li>• Implement dynamic resizing</li>
                    <li>• Consider padding mode impact</li>
                    <li>• Balance padding vs. scaling</li>
                  </ul>
                </div>
              </div>
            </GradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
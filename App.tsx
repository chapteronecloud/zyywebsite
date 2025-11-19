
import React, { useState } from 'react';
import { 
  Terminal, 
  Code2, 
  Database, 
  FileText, 
  Globe, 
  ChevronRight,
  ExternalLink,
  Heart,
  TrendingUp,
  Cpu,
  Mail,
  GraduationCap // Import GraduationCap icon for school activity
} from 'lucide-react';
import { CONTENT, PROFILE_IMAGE, PROFILE_IMAGE_SIZE, PROFILE_IMAGE_FILTER } from './constants';
import { Language } from './types';
import ContentModal from './components/PDFViewer';

function App() {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'pdf' | 'text'; content: string; title: string } | null>(null);
  const data = CONTENT[lang];

  const toggleLang = () => {
    setLang(prev => prev === Language.EN ? Language.CN : Language.EN);
  };

  const openPdf = (url: string, title: string) => {
    setModalState({ isOpen: true, type: 'pdf', content: url, title });
  };

  const openText = (text: string, title: string) => {
    setModalState({ isOpen: true, type: 'text', content: text, title });
  };

  return (
    <div className="min-h-screen font-sans text-text-main selection:bg-accent-dim selection:text-accent-primary">
      
      {/* Generic Modal for PDF or Text */}
      <ContentModal 
        isOpen={!!modalState?.isOpen} 
        onClose={() => setModalState(null)} 
        type={modalState?.type || 'text'}
        content={modalState?.content || ''} 
        title={modalState?.title || ''} 
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-bg/90 backdrop-blur-md z-40 border-b border-bg-hover">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-accent-primary font-bold text-xl flex items-center gap-2">
            <Terminal size={20} />
            <span>YZ.</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 font-mono text-sm">
              <a href="#about" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">01.</span> {data.nav.about}</a>
              <a href="#experience" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">02.</span> {data.nav.experience}</a>
              <a href="#projects" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">03.</span> {data.nav.projects}</a>
              <a href="#skills" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">04.</span> {data.nav.skills}</a>
              <a href="#volunteer" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">05.</span> {data.nav.volunteer}</a>
              <a href="#schoolActivity" className="hover:text-accent-primary transition-colors text-text-muted"><span className="text-accent-primary">06.</span> {data.nav.schoolActivity}</a>
            </div>
            
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1 rounded border border-bg-hover hover:border-accent-primary transition-all font-mono text-xs font-bold text-text-muted hover:text-white"
            >
              <Globe size={14} />
              {lang === Language.EN ? 'EN / 中文' : '英文 / CN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <section id="about" className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
            <p className="font-mono text-accent-primary">{lang === Language.EN ? "Hi, my name is" : "你好，我是"}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 tracking-tight">
              {data.hero.name}.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-text-muted">
              {data.hero.title}.
            </h2>
            <p className="text-lg text-text-muted max-w-xl leading-relaxed">
              {data.hero.intro}
            </p>
            <div className="pt-8">
              <button 
                onClick={() => openText(data.hero.contactInfo, lang === Language.EN ? "Contact Information" : "联系方式")}
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-md border border-accent-primary text-accent-primary font-mono transition-all hover:bg-accent-dim"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={18} />
                  {data.hero.cta}
                </span>
              </button>
            </div>
          </div>
          
          <div className={`relative ${PROFILE_IMAGE_SIZE} shrink-0 group`}>
             <div className="absolute inset-0 border-2 border-accent-primary rounded-3xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
             <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-bg-card ${PROFILE_IMAGE_FILTER} transition-all duration-500`}>
               <img 
                 src={PROFILE_IMAGE} 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-mono">
              <span className="text-accent-primary mr-2">02.</span> 
              {data.nav.experience}
            </h2>
            <div className="h-[1px] bg-bg-hover flex-1 max-w-[200px]"></div>
          </div>

          <div className="space-y-8 border-l border-bg-hover ml-3 md:ml-8 pl-8 md:pl-12 relative">
            {data.experience.map((exp, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onClick={() => openText(exp.fullDetails, `${exp.role} @ ${exp.company}`)}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-bg border-2 border-gray-600 group-hover:border-accent-primary group-hover:bg-accent-primary transition-colors"></div>
                
                <div className="bg-bg-card p-6 rounded-lg border border-bg-hover hover:border-accent-primary/50 transition-all hover:-translate-y-1 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-accent-primary transition-colors">
                        {exp.role}
                    </h3>
                    <span className="font-mono text-sm text-text-muted">{exp.period}</span>
                    </div>
                    <p className="text-accent-secondary font-mono text-sm mb-4">@ {exp.company}</p>
                    <ul className="space-y-2">
                    {exp.summary.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                        <ChevronRight size={16} className="mt-1 text-accent-primary shrink-0" />
                        <span>{ach}</span>
                        </li>
                    ))}
                    </ul>
                    <div className="mt-4 flex justify-end">
                        <span className="text-xs font-mono text-text-muted group-hover:text-accent-primary flex items-center gap-1">
                            {lang === Language.EN ? "Click for details" : "点击查看详情"} <ExternalLink size={12} />
                        </span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-mono">
              <span className="text-accent-primary mr-2">03.</span> 
              {data.nav.projects}
            </h2>
            <div className="h-[1px] bg-bg-hover flex-1 max-w-[200px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <div 
                key={index}
                onClick={() => project.pdfPath && openPdf(project.pdfPath, project.title)}
                className={`group bg-bg-card p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-bg-hover hover:border-accent-primary/50 flex flex-col h-full ${project.pdfPath ? 'cursor-pointer' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-accent-primary">
                    <Database size={40} strokeWidth={1.5} />
                  </div>
                  {project.pdfPath && (
                    <div className="text-text-muted group-hover:text-accent-primary transition-colors">
                      <ExternalLink size={20} />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-accent-secondary font-mono text-xs mb-4">
                  {project.role} · {project.period}
                </div>

                <p className="text-text-muted text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-1 rounded bg-bg-hover/50 font-mono text-xs text-accent-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-mono">
              <span className="text-accent-primary mr-2">04.</span> 
              {data.nav.skills}
            </h2>
            <div className="h-[1px] bg-bg-hover flex-1 max-w-[200px]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {data.skills.map((skillSet, index) => (
              <div key={index} className="bg-bg-card p-6 rounded-lg border border-bg-hover">
                <div className="flex items-center gap-3 mb-6 text-accent-primary">
                  {index === 0 && <Code2 size={24} />}
                  {index === 1 && <TrendingUp size={24} />}
                  {index === 2 && <Globe size={24} />}
                  <h3 className="font-bold font-mono text-lg">{skillSet.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                   {skillSet.items.map((item, i) => (
                     <button 
                        key={i} 
                        onClick={() => openText(item.description, `${item.name} (${item.level})`)}
                        className="group flex items-center gap-2 px-4 py-2 bg-bg rounded border border-bg-hover hover:border-accent-primary/50 hover:bg-bg-hover transition-all text-left"
                     >
                       <span className="text-gray-200 font-medium">{item.name}</span>
                       <span className="text-xs text-text-muted font-mono group-hover:text-accent-secondary">{item.level}</span>
                     </button>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-mono">
                <span className="text-accent-primary mr-2">05.</span> 
                {data.nav.volunteer}
                </h2>
                <div className="h-[1px] bg-bg-hover flex-1 max-w-[200px]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.volunteer.map((vol, index) => (
                    <div key={index} className="bg-bg-card p-6 rounded-lg border border-bg-hover hover:border-accent-primary/30 transition-all group">
                        <div className="text-accent-primary mb-4">
                            <Heart size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-100 mb-1 group-hover:text-accent-primary transition-colors">{vol.role}</h3>
                        <div className="text-sm font-mono text-accent-secondary mb-3">{vol.organization}</div>
                        <div className="text-xs text-text-muted font-mono mb-4">{vol.period}</div>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                            {vol.description}
                        </p>
                        {vol.link && (
                            <a href={vol.link} target="_blank" rel="noreferrer" className="text-xs font-mono text-accent-primary hover:underline flex items-center gap-1">
                                {lang === Language.EN ? "Learn More" : "了解更多"} <ExternalLink size={10} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* School Activity Section */}
        <section id="schoolActivity" className="py-20 mb-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 font-mono">
                <span className="text-accent-primary mr-2">06.</span> 
                {data.nav.schoolActivity}
                </h2>
                <div className="h-[1px] bg-bg-hover flex-1 max-w-[200px]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.schoolActivity.map((activity, index) => (
                    <div key={index} className="bg-bg-card p-6 rounded-lg border border-bg-hover hover:border-accent-primary/30 transition-all group">
                        <div className="text-accent-primary mb-4">
                            <GraduationCap size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-100 mb-1 group-hover:text-accent-primary transition-colors">{activity.role}</h3>
                        <div className="text-sm font-mono text-accent-secondary mb-3">{activity.organization}</div>
                        {activity.period && (
                            <div className="text-xs text-text-muted font-mono mb-4">{activity.period}</div>
                        )}
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                            {activity.description}
                        </p>
                        {activity.link && (
                            <a href={activity.link} target="_blank" rel="noreferrer" className="text-xs font-mono text-accent-primary hover:underline flex items-center gap-1">
                                {lang === Language.EN ? "Learn More" : "了解更多"} <ExternalLink size={10} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-text-muted font-mono text-xs pb-8">
          <p>Designed & Built by Yiyun Zhang</p>
          <p className="mt-2 opacity-50">React · Tailwind · Lucide</p>
        </footer>

      </main>
    </div>
  );
}

export default App;

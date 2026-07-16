'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, FolderKanban, Award, Image as ImageIcon, Code2, LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import { projects, certifications } from '@/lib/data/site';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('projects');
  
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020814] text-white">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020814] px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,229,255,0.05),_transparent_50%)] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-2xl glass-panel relative z-10"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DEV_OS Admin</h1>
            <p className="text-slate-400 mt-2 font-mono text-sm">Enter credentials to mount system</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-cyan-200 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400/50 text-white transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-cyan-200 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400/50 text-white transition-all"
                required
              />
            </div>
            
            {error && <p className="text-red-400 text-sm font-mono">{error}</p>}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-50 font-display font-bold tracking-wide rounded-lg transition-all flex justify-center items-center shadow-[0_0_20px_rgba(0,229,255,0.15)]"
            >
              {isLoading ? 'Authenticating...' : 'INITIALIZE'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills & Tech', icon: Code2 },
    { id: 'media', label: 'Media Library', icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-[#020814] text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-black/20 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-display font-bold text-cyan-400">DEV_OS</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Command Center v1.2</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-[inset_0_0_12px_rgba(0,229,255,0.1)]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
              }`}
            >
              <item.icon size={18} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl transition-all"
          >
            <LogOut size={16} />
            <span className="text-sm font-medium">Terminate Session</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="h-20 border-b border-white/10 flex items-center px-8 bg-black/10">
          <h2 className="text-2xl font-display font-bold capitalize">{activeTab} Management</h2>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-slate-400">Manage your portfolio projects and case studies.</p>
                <button className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-100 px-4 py-2 rounded-lg hover:bg-cyan-500/30 transition-all text-sm font-medium">
                  <Plus size={16} /> Add Project
                </button>
              </div>
              
              <div className="glass rounded-xl overflow-hidden border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-slate-400">Project Name</th>
                      <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-slate-400">Status</th>
                      <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-slate-400">Stack</th>
                      <th className="px-6 py-4 font-mono text-xs uppercase tracking-wider text-slate-400 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {projects.map(p => (
                      <tr key={p.title} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-200">{p.title}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs">
                            {p.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-400">
                          {p.stack.slice(0, 3).join(', ')}{p.stack.length > 3 ? '...' : ''}
                        </td>
                        <td className="px-6 py-4 flex justify-end gap-2">
                          <button className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-colors">
                            <Edit2 size={14} />
                          </button>
                          <button className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <p className="text-slate-400">Manage your credentials and certifications.</p>
                <button className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-100 px-4 py-2 rounded-lg hover:bg-cyan-500/30 transition-all text-sm font-medium">
                  <Plus size={16} /> Add Credential
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map(c => (
                  <div key={c.id} className="glass p-5 rounded-xl border border-white/10 flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-white text-lg">{c.credential}</h4>
                      <div className="flex gap-2">
                        <button className="text-slate-400 hover:text-cyan-400 transition-colors"><Edit2 size={14} /></button>
                        <button className="text-slate-400 hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">{c.issuer}</p>
                    <div className="mt-auto bg-black/40 rounded p-2 border border-white/5 font-mono text-xs text-slate-500 truncate">
                      ID: {c.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {['skills', 'media'].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
              <div className="text-cyan-500/50 mb-4">
                <LayoutDashboard size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-200 mb-2 capitalize">{activeTab} Module</h3>
              <p className="text-slate-500 max-w-md text-center">
                This module is currently being provisioned. Data structures are active in the database and waiting for UI scaffolding.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

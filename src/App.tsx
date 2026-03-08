// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import FamiliaView from '@/views/FamiliaView';
import ParejaView from '@/views/ParejaView';
import TodasView from '@/views/TodasView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FamiliaView />} />
      <Route path="/beautifulprincess" element={<ParejaView />} />
      <Route path="/allwomen" element={<TodasView />} />
    </Routes>
  );
}

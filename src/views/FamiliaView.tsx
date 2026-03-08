// src/views/FamiliaView.tsx
import { useState, useEffect } from 'react';
import { GalaxyScene }        from '@/components/Galaxy/GalaxyScene';
import { familyMembers }      from '@/data/familyData';
import { FamilyCard }         from '@/components/Card/FamilyCard';
import { WelcomeBanner }      from '@/components/UI/WelcomeBanner';
import { HintTooltip }        from '@/components/UI/HintTooltip';
import { LoadingScreen }      from '@/components/UI/LoadingScreen';
import { useStarInteraction } from '@/hooks/useStarInteraction';

export default function FamiliaView() {
  const interaction          = useStarInteraction();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#0a0a1a]">

      <LoadingScreen visible={isLoading} />

      <GalaxyScene members={familyMembers} onStarClick={interaction.setActive} />

      <WelcomeBanner />
      <HintTooltip />

      <FamilyCard
        member={interaction.activeMember}
        onClose={() => interaction.setActive(null)}
      />

    </main>
  );
}

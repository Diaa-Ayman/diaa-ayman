import particlesConfig from "@/components/particles-bg/particles-options";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      // params={particlesConfig}
      options={particlesConfig}
      id="tsparticles"
      init={particlesInit}
    ></Particles>
  );
}

export default ParticlesBg;

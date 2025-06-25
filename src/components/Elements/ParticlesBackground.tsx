import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { Engine } from "@tsparticles/engine";

function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadAll(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            // init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                particles: {
                    number: { value: 60 },
                    size: { value: 2 },
                    move: { enable: true, speed: 0.5 },
                    links: {
                        enable: true,
                        color: '#b9fbc0',
                        distance: 140,
                        opacity: 0.3,
                        width: 1,
                    },
                    color: { value: '#b9fbc0' },
                    opacity: { value: 0.4 },
                },
            }}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
}

export default ParticlesBackground